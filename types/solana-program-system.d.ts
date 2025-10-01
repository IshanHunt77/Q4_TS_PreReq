declare module '@solana-program/system' {
  import { PublicKey, TransactionInstruction } from '@solana/web3.js';

  export function getTransferSolInstruction(params: {
    amount: bigint;
    source: { address: PublicKey };
    destination: { address: PublicKey };
  }): TransactionInstruction;

  export function getCreateAccountInstruction(params: {
    payer: { address: PublicKey };
    newAccount: { address: PublicKey };
    lamports: bigint;
    space: bigint;
    programAddress: PublicKey;
  }): TransactionInstruction;
}
