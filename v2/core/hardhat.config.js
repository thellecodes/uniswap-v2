require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  // solidity: "0.5.16",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.WALLET_PRIVATE_KEY],
    },
  },
  solidity: {
    compilers: [
      { version: "0.5.16" },
      { version: "0.8.0" },
      { version: "0.7.6", },
    ],
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};