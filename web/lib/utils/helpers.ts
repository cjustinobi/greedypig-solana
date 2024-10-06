// helpers/gameHelpers.ts
import { PublicKey } from '@solana/web3.js'

/**
 * Checks if the player has already joined the game.
 * @param players - Array of PublicKeys representing the players who have joined the game.
 * @param publicKey - The current player's public key.
 * @returns A boolean indicating if the player has joined the game.
 */
export const hasPlayerJoinedGame = (
  players: PublicKey[] | undefined,
  publicKey: PublicKey | null
): boolean => {
  if (!players || !publicKey) return false
  return players.some(player => player.equals(publicKey))
}
