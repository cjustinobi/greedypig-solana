'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Gameitemsimg from '@/assets/img/gameitemsimg.png'
import Gameitemspeople from '@/assets/img/gameitemspeople.png'
import Gameitemsclock from '@/assets/img/gameitemsclock.png'
import { PublicKey } from '@solana/web3.js'
import { useGameProgram, useGameProgramAccount } from '@/hooks/useGameProgram'
import FormBtn from './FormBtn'
import { useWallet } from '@solana/wallet-adapter-react'
import { hasPlayerJoinedGame } from '@/lib/utils'

const GameCard = ({ account }: { account: PublicKey }) => {
  const { publicKey } = useWallet()
  const { joinGame } = useGameProgram()
  const { accountQuery } = useGameProgramAccount({
    account
  })

   const handleJoinGame = async (gameAccount: PublicKey) => {
     if (publicKey) {
       const res = await joinGame.mutateAsync({
         gameAccount
       })

       console.log('result from joingame ', res)
     }
   }

   const isLoading = joinGame.status === 'pending'

   const hasJoinedGame = hasPlayerJoinedGame(
     accountQuery.data?.players,
     publicKey
   )

  return (
    <div className="w-full lg:w-[290px] h-[147px] bg-custom-gray8 flex flex-row justify-between rounded-3xl p-4 gap-3">
      <div className="">
        <Image
          className="rounded-2xl"
          src={Gameitemsimg}
          width={125}
          height={115}
          alt="gameitemsimg"
        />
      </div>
      <div className="w-[113px] h-[115px] flex flex-col justify-between">
        <div className="w-[113px] h-16 flex flex-col justify-between gap-2">
          <div className="w-[113px] h-[25px]">
            <Link
              className="font-WorkSans-SemiBold font-semibold text-xl/[25px]"
              href={`/games/${account.toBase58()}`}
            >
              {accountQuery.data?.title}
            </Link>
          </div>
          <div className="w-[95px] h-[31px] gap-2 flex flex-row">
            <div className="w-[39px] h-[31px] bg-custom-gray7 flex text-custom-gray5 rounded-lg p-2 gap-1">
              <Image
                src={Gameitemspeople}
                width={12}
                height={12}
                alt="gameitemsimg"
              />
              <p className="w-[7px] h-[15px] font-WorkSans-Medium font-medium text-xs/[15px]">
                {accountQuery.data?.players.length}
              </p>
            </div>
            <div className="w-12 h-[31px] bg-custom-gray7 flex text-custom-gray5 rounded-lg p-2 gap-1">
              <Image
                src={Gameitemsclock}
                width={12}
                height={12}
                alt="gameitemsimg"
              />
              <p className="w-4 h-[15px] font-WorkSans-Medium font-medium text-xs/[15px]">
                2H
              </p>
            </div>
          </div>
        </div>
        <div className="w-[113px] h-[34px] bg-[#8621FF] flex justify-center items-center rounded-3xl border px-6 py-2 gap-2.5">
          {hasJoinedGame ? (
            <FormBtn
              label="Joined"
              className="font-Coiny-Regular font-normal text-white text-sm/[17.5px]"
              disabled={true}
            />
          ) : (
            <FormBtn
              label={isLoading ? 'Joining...' : 'Join'}
              onClick={() => handleJoinGame(account)}
              className="font-Coiny-Regular font-normal text-white text-sm/[17.5px]"
              disabled={isLoading}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default GameCard
