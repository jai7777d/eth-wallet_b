// scripts/sample-script.js

// Hardhat Runtime Environment ko explicitly require karna optional hai,
// par standalone run karte waqt useful hota hai.
const hre = require("hardhat");

const main =   async  ()=> {

  // Contract Factory lata hai
  const Transactions = await hre.ethers.getContractFactory("Transactions");

  // Contract deploy karo
  const transactions = await Transactions.deploy();

  // Deploy hone ka wait karo
  await transactions.deployed();

  console.log("Transactions Contract deployed to:", transactions.address);
}

// Best practice: async/await + error handling
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });