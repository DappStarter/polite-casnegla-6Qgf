require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan random magic horse grace derive blue general'; 
let testAccounts = [
"0x86f73b57eaf801c670c3e0af86b8378d31b486049d19deb9feb19aef6b98d9ef",
"0x6cc5d4041975522fc27aefcf6ea9fb26e5483cc77d8fa79a5d071eee3dd2e83b",
"0xafd4a8bd725562d3cff003405f4ff956c84bb8b10940a2fc7637f3cdedde275f",
"0x82d5a5bad48e6a3ccc53e90e08c1346f2c8a1c0f68ab9d74ec8eea2566edba7b",
"0x05299f902a90717a0f69735b1a01bb3f0200f486f86714da3e6998337dae01cc",
"0x51fdf4fea571479a1e0004896ec021f05339ea9a35963272b361dd9489f61fcc",
"0x65ef5a55fb74effe499bb59c090ebfd956ff6df3463f05be74933a48da41da47",
"0x29d5fc1d852aef675c363857990d85cda555c140719cedee43fef3620405f38a",
"0xc230a30e911444e614c6202d5d83bfbe3c4e604aa0e6ddd8c93490b88a889937",
"0x0f888ffccc6fd7e7f3fcb98bb5019c46462c295a5db8a9394cc642d2a9585b13"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


