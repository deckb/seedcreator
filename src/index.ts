const bip39 = require("bip39");
const hdkey = require("hdkey");
const ecc = require("eosjs-ecc");

const seedPhrase = bip39.generateMnemonic();
console.log(seedPhrase);

var seed = bip39.mnemonicToSeedSync(seedPhrase);
const master = hdkey.fromMasterSeed(seed);

// using 194 per slip44
// https://github.com/satoshilabs/slips/blob/master/slip-0044.md
const owner = master.derive("m/44'/194'/0'/0/0");
const active = master.derive("m/44'/194'/0'/0/1");

console.log(`owner private key: ${ecc.PrivateKey(owner._privateKey)}`);
console.log(`owner public key: ${ecc.PublicKey(owner._publicKey).toString()}`);
console.log(`active private key: ${ecc.PrivateKey(active._privateKey)}`);
console.log(
  `active public key: ${ecc.PublicKey(active._publicKey).toString()}`
);
