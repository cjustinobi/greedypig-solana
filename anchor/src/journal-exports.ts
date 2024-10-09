// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { Cluster, PublicKey } from "@solana/web3.js";
import GreedyPigIDL from "../target/idl/greedy_pig.json";
import type { GreedyPig } from "../target/types/greedy_pig";

// Re-export the generated IDL and type
export { GreedyPig, GreedyPigIDL };

// After updating your program ID (e.g. after running `anchor keys sync`) update the value below.
export const GREEDY_PIG_PROGRAM_ID = new PublicKey(
  "2MKHvQoStSV7tx6ywCSgGVoe7mhowfaQxnupbbUiNFmm"
);

// This is a helper function to get the Counter Anchor program.
export function getGreedyPiglProgram(provider: AnchorProvider) {
  return new Program(GreedyPigIDL as GreedyPig, provider);
}

// This is a helper function to get the program ID for the Journal program depending on the cluster.
export function getGreedyPigProgramId(cluster: Cluster) {
  switch (cluster) {
    case "devnet":
    case "testnet":
    case "mainnet-beta":
    default:
      return GREEDY_PIG_PROGRAM_ID;
  }
}
