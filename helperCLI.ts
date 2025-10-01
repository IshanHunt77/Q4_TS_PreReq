import bs58 from "bs58";
import promptSync from "prompt-sync";
import { createKeyPairSignerFromBytes } from "@solana/kit";

const prompt = promptSync();

const bs58ToWallet = async () => {
  const pvtkey = prompt("Enter your Phantom base58 private key: ");
  const private32 = bs58.decode(pvtkey);

  if (private32.length !== 32) {
    console.error("Error: Phantom key must be 32 bytes");
    return;
  }

  const fake64 = new Uint8Array([...private32, ...new Uint8Array(32)]);
  const signer = await createKeyPairSignerFromBytes(fake64);

  
  const publicKeyBytes = new Uint8Array(
    bs58.decode(signer.address) 
  );
  const keypairBytes = new Uint8Array([...private32, ...publicKeyBytes]);

  const finalSigner = await createKeyPairSignerFromBytes(keypairBytes);

  console.log(`Solana Address: ${finalSigner.address}`);
  console.log(`64-byte Uint8Array: [${Array.from(keypairBytes)}]`);
  console.log(`Save as dev-wallet.json`);
};


const walletToBs58 = () => {
  const walletArray = prompt("Enter Wallet Array (comma separated): ");
  const numbers = walletArray.split(",").map((n) => Number(n.trim()));
  const wallet = new Uint8Array(numbers);

  if (wallet.length !== 64) {
    console.error("Error: Must provide full 64-byte array");
    return;
  }

  const private32 = wallet.slice(0, 32);
  console.log("Phantom Import base58:", bs58.encode(private32));
  console.log("Full 64-byte base58:", bs58.encode(wallet));
};


 await bs58ToWallet();
// walletToBs58();
