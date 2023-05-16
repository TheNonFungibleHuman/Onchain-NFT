const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
    alfajores: {
      provider: () =>
        new HDWalletProvider(
          process.env.MNEMONIC,
          `https://alfajores-forno.celo-testnet.org`
        ),
      network_id: 42220,
      gas: 2000000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.2",
      docker: false,
      settings: {
        optimizer: {
          enabled: false,
          runs: 200,
        },
        evmVersion: "istanbul",
      },
    },
  },
};