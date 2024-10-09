'use client';

import { getGreedyPiglProgram, getGreedyPigProgramId } from '@/lib/idl/greedypigIDL';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Cluster, PublicKey, SystemProgram } from '@solana/web3.js';
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useCluster, defaultClusters } from './useCluster';
import { useAnchorProvider } from '@/components/solana/solana-provider';
import { useTransactionToast } from '@/components/ui/ui-layout';
import { useMemo } from 'react';
import { BN } from '@coral-xyz/anchor'

interface ICreateGame {
  title: string
  winning_score: number
  staking_amount: number
  apparatus: string
  mode: string
  max_players: number
  owner: PublicKey
}

interface IGameAccount {
  gameAccount: PublicKey
}

export function useGameProgram() {
  const { publicKey } = useWallet()
  const { connection } = useConnection();
  const { cluster } = useCluster()

  const transactionToast = useTransactionToast();
  const provider = useAnchorProvider();
  const programId = useMemo(
    () => getGreedyPigProgramId(cluster.network as Cluster),
    [cluster]
  );
  const program = getGreedyPiglProgram(provider);

  const accounts = useQuery({
    queryKey: ['greedy-pig', 'all', { cluster }],
    queryFn: () => program.account.gameAccountState.all(),
  });

  console.log('account ', accounts)

  const getProgramAccount = useQuery({
    queryKey: ['get-program-account', { cluster }],
    queryFn: () => connection.getParsedAccountInfo(programId),
  });

  const createGame = useMutation<string, Error, ICreateGame>({
    mutationKey: ['greedy-pig', 'create', { cluster }],
    mutationFn: async ({
      title,
      winning_score,
      staking_amount,
      apparatus,
      mode
    }) => {

      const bnWinningScore =
        winning_score !== undefined ? new BN(winning_score) : null
      const bnStakingAmount =
        staking_amount !== undefined ? new BN(staking_amount) : null
      return program.methods
        .createGame(
          title,
          bnWinningScore,
          bnStakingAmount,
          apparatus,
          mode,
          bnStakingAmount
        )
        .rpc()
    },
    onSuccess: signature => {
      transactionToast(signature)
      accounts.refetch()
    },
    onError: error => {
      toast.error(`Failed to create journal entry: ${error.message}`)
    }
  })

  const joinGame = useMutation<string, Error, IGameAccount>({
    mutationKey: ['greedy-pig', 'join-game', { cluster }],
    mutationFn: async ({ gameAccount }) => {
      // const bnStakingAmount =
      //   staking_amount !== undefined ? new BN(staking_amount) : null
      return program.methods
        .joinGame()
        .accounts({
          gameAccount, // line 92
          player: provider.wallet.publicKey
          // systemProgram: SystemProgram.programId
        })

        .rpc()
    },
    onSuccess: signature => {
      transactionToast(signature)
      accounts.refetch()
    },
    onError: error => {
      toast.error(`Failed to join game: ${error.message}`)
    }
  })

   const startGame = useMutation<string, Error, IGameAccount>({
     mutationKey: ['greedy-pig', 'start-game', { cluster }],
     mutationFn: async ({ gameAccount }) => {

       return program.methods
         .startGame()
         .accounts({
           gameAccount,
           player: provider.wallet.publicKey
         })
         .rpc()
     },
     onSuccess: signature => {
       transactionToast(signature)
       accounts.refetch()
     },
     onError: error => {
       toast.error(`Failed to join game: ${error.message}`)
     }
   })

  const getGamsByOwner = useQuery({
    queryKey: ['journals', 'byOwner', publicKey?.toBase58(), { cluster }],
    queryFn: async () => {
      if (!publicKey) throw new Error('Wallet not connected')

      const allJournals = await program.account.gameAccountState.all()
      return allJournals.filter(journal =>
        journal.account.owner.equals(publicKey)
      )
    },
    enabled: !!publicKey
  })

  return {
    program,
    programId,
    accounts,
    getProgramAccount,
    createGame,
    getGamsByOwner,
    joinGame,
    startGame
  };
}

export function useGameProgramAccount({ account }: { account: PublicKey }) {
  const { cluster } = useCluster();
  const transactionToast = useTransactionToast();
  const { program, accounts } = useGameProgram();

  const accountQuery = useQuery({
    queryKey: ['greedy-pig', 'fetch-account-query', { cluster, account }],
    queryFn: () => program.account.gameAccountState.fetch(account),
  });

  // const updateEntry = useMutation<string, Error, CreateEntryArgs>({
  //   mutationKey: ['journalEntry', 'update', { cluster }],
  //   mutationFn: async ({ title, message, owner }) => {
  //     return program.methods.update(title, message).rpc();
  //   },
  //   onSuccess: (signature) => {
  //     transactionToast(signature);
  //     accounts.refetch();
  //   },
  //   onError: (error) => {
  //     toast.error(`Failed to update journal entry: ${error.message}`);
  //   },
  // });

  // const deleteEntry = useMutation({
  //   mutationKey: ['journal', 'deleteEntry', { cluster, account }],
  //   mutationFn: (title: string) =>
  //     program.methods.deleteJournalEntry(title).rpc(),
  //   onSuccess: (tx) => {
  //     transactionToast(tx);
  //     return accounts.refetch();
  //   },
  // });

  return {
    accountQuery,
    // updateEntry,
    // deleteEntry,
  };
}
