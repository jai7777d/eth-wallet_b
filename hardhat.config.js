require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/e838n7reIeTScPkmfS7lq",   // <-- FIXED
      accounts: ["dc6d5f008ff838f3730634317e71a54ffa92e3314021becc274cb7d46fbc78a5"]
    }
  }
};

//https://eth-mainnet.g.alchemy.com/v2/e838n7reIeTScPkmfS7lq