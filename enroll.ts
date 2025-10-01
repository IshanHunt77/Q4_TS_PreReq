import {
 address,
 appendTransactionMessageInstructions,
 assertIsTransactionWithinSizeLimit,
 createKeyPairSignerFromBytes,
 createSolanaRpc,
 createSolanaRpcSubscriptions,
 createTransactionMessage,
 devnet,
 getSignatureFromTransaction,
 pipe,
 sendAndConfirmTransactionFactory,
 setTransactionMessageFeePayerSigner,
 setTransactionMessageLifetimeUsingBlockhash,
 signTransactionMessageWithSigners,
 addSignersToTransactionMessage,
 getProgramDerivedAddress,
 generateKeyPairSigner,
 getAddressEncoder
} from "@solana/kit";
const MPL_CORE_PROGRAM =
address("CoREENxT6tW1HoK8ypY1SxRMZTcVPm7R94rH4PZNhX7d");
const PROGRAM_ADDRESS =
address("TRBZyQHB3m68FGeVsqTK39Wm4xejadjVhP5MAZaKWDM");
const SYSTEM_PROGRAM = address("11111111111111111111111111111111");
import wallet from "./dev-wallet.json";
import { getInitializeInstruction, getSubmitTsInstruction } from
"./clients/js/src/generated/index";

const Enroll = async ()=>{
    const keypair = await createKeyPairSignerFromBytes(new Uint8Array(wallet));
    const turbin3Wallet = address('7Q5iC1cj2ap3uxg2okKDU75xNSEKjh8fq4yvWY8faD9n');//wallet to receive token
    const rpc = createSolanaRpc(devnet("https://api.devnet.solana.com"));
    const rpcSubscriptions = createSolanaRpcSubscriptions(devnet('ws://api.devnet.solana.com'));
}