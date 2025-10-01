import bs58 from 'bs58'
import promptSync from 'prompt-sync'

const prompt = promptSync();

const bs58ToWallet = async ()=> {
    
    let name = prompt("Enter your name");
    let pvtkey = prompt("Enter your base58 private key: ");
    let wallet = bs58.decode(pvtkey);
    console.log("Wallet : ",Array.from(wallet));
}

const WalletToBs58 = async ()=>{
    const walletArray = prompt("Enter Wallet Array: ");
    const numbers = walletArray.split(",").map(Number);
    const wallet = new Uint8Array(numbers);
    const base58 = bs58.encode(wallet);
    console.log("Base58 private key: ", base58);
}

