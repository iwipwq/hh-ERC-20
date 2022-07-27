const { ethers } = require("hardhat");

console.log (ethers);

const networkConfig = {
  4: {
    name: "rinkeby",
    initialSupply: ethers.utils.parseEther("50"),
  },
  31337: {
    name: "localhost",
    initialSupply: ethers.utils.parseEther("50"),
  },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmentChains,
};
