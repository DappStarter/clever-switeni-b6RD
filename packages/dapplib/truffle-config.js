require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse frown slab carpet rifle tank company grace infant equal gesture'; 
let testAccounts = [
"0xf9301c0355f6ed0e94e9a9575310afdada66e068ba161e33246e9df2469d11ea",
"0xa0b45890fecc89188c370f92876f9e7e1fc9b791351281b11e89830527061690",
"0xfd61f4d7c015e64f67277ef4489fa45c603d50ce9fc22b0d4ce1926598d633ea",
"0x16540bcf40ce57dcb3fbf2189924e24b41af7e5c7b07d380881a98d90c798ebb",
"0x5217b1cb2ef185285f39e7a41ddc2079b9e739d192dbcbf10f9bbb1009084793",
"0x11a8b86ef04becdb6eabc88a11bc8bf272857c7bdc1b9aca2d9f80594be3ac7b",
"0xe4b25488979bfcf915699ed4adfb8f22a340da148e89a118f5c08370a120be96",
"0x29644d67c3f3d9d369fdaa97fc770f3df98115be1f3fc22ef582bedaa3a70d28",
"0x1e785feb882106a6c39974a4c00e8c296532ceb03000a7995944fe5c8ee45132",
"0x9aaac7ec0453d4d0480a41f78b15658f6d5f2f7f1a0280538f4a8f4cf4fe9055"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

