import React from 'react'
import WinningScore from '@/components/shared/WinningScore'
import GameLeaderboard from '@/components/shared/GameLeaderboard'

const GameArena = () => {
  return (
    <div className="grid grid-cos-1 lg:grid-cols-12 p-6 lg:p-8 gap-8">
      <div className="col-span-full lg:col-span-8">
        <WinningScore />
      </div>

      <div className="col-span-full lg:col-span-4">
        <GameLeaderboard />
      </div>
    </div>
  )
}

export default GameArena
