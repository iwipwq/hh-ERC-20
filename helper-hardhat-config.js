const networkConfig = {
  4: {
    name: "rinkeby",
    initialSupply: 50,
  },
  31337: {
    name: "localhost",
    initialSupply: 50,
  },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmentChains,
};
