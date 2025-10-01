import { createKeyPairSignerFromBytes } from "@solana/kit";




const wallet = async()=> {
    const keypair  = await crypto.subtle.generateKey(
    {name : "ED25519"},
    true,
    ["sign","verify"]
    ) as CryptoKeyPair;
    const privateJwk = await crypto.subtle.exportKey('jwk', keypair.privateKey) as JsonWebKey;
    const privateBase64 = privateJwk.d;

    if (!privateBase64) throw new Error('Failed to get private keybytes');

    const privateKeyBytes = new Uint8Array(Buffer.from(privateBase64,'base64'));
    const publicKeyBytes = new Uint8Array(await crypto.subtle.exportKey('raw', keypair.publicKey));
    const keypairBytes = new Uint8Array([...privateKeyBytes,...publicKeyBytes]);

    const signer = await createKeyPairSignerFromBytes(keypairBytes);
    console.log(`You have generated a new Solana wallet:${signer.address}`);

    console.log(`To save your wallet, copy and paste the following into a JSON file: [${keypairBytes}]`);
}

await wallet();


