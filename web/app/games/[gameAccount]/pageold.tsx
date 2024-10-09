'use client'

import { useParams } from 'next/navigation'
import { useGameProgram, useGameProgramAccount } from '@/hooks/useGameProgram'
import { PublicKey } from '@solana/web3.js'
import React from 'react'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import ErrorComponent from '@/components/ui/ErrorComponent'
import { useWallet } from '@solana/wallet-adapter-react'

const GameDetailPage = () => {

  const { gameAccount } = useParams()
  const { startGame } = useGameProgram()
  const { publicKey } = useWallet()

  const { accountQuery } = useGameProgramAccount({
    account: gameAccount as unknown as PublicKey
  })

  if (accountQuery.isLoading) {
    return <LoadingSpinner /> // Show a loading spinner when data is being fetched
  }

  if (accountQuery.isError) {
    return (
      <ErrorComponent
        error={accountQuery.error?.message || 'Error loading game details'}
      />
    )
  }

  const handleStartGame = async () => {
    if (publicKey) {
      const res = await startGame.mutateAsync({
        gameAccount: gameAccount as unknown as PublicKey
      })

      console.log('result from startgame ', res)
    }
  }



  const gameData = accountQuery.data

  return (
    <div className="container mx-auto p-4">
      {gameData ? (
        <>
          <h1 className="text-3xl font-bold mb-4">{gameData.title}</h1>
          <p>Mode: {gameData.mode}</p>
          <p>Staking Amount: {gameData.stakingAmount.toString()}</p>
          <p>Winning Score: {gameData.winningScore.toString()}</p>
          <p>Owner: {gameData.owner.toBase58()}</p>
          <p>Max Players: {gameData.maxPlayers}</p>
          <p>Apparatus: {gameData.apparatus}</p>
          <p>Joined Players: {gameData.players.length}</p>

          <button onClick={handleStartGame}>Start Game</button>
        </>
      ) : (
        <p>No game data found</p>
      )}
    </div>
  )
}

export default GameDetailPage
