'use client'

import { useParams } from 'next/navigation'
import { useGameProgramAccount } from '@/hooks/useGameProgram'
import { PublicKey } from '@solana/web3.js'
import React from 'react'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import ErrorComponent from '@/components/ui/ErrorComponent'

const GameDetailPage = () => {

  const { gameAccount } = useParams()

  // Convert gameId to PublicKey
  // const gameAccountKey = gameAccount ? new PublicKey(gameAccount as string) : undefined

  // Fetch the game details using the gameId
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

          {/* You can add more game details here */}
        </>
      ) : (
        <p>No game data found</p>
      )}
    </div>
  )
}

export default GameDetailPage
