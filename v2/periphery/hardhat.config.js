require("@nomiclabs/hardhat-waffle");

module.exports = {
  // solidity: "0.8.17",
  solidity: {
    compilers: [
      { version: "0.6.6" },
      { version: "0.4.18" }
    ],
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
    }
  },
};
