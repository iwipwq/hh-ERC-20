const { network } = require("hardhat");
const {
  developmentChains,
  networkConfig,
} = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  log(deployer);
  const chainId = network.config.chainId;
  const args = [networkConfig[chainId]["initialSupply"]];

  const token = await deploy("OurToken", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: network.config.blockConfirmations,
  });

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    log("계약 검증하는 중...");
    await verify(token.address, args);
  }
  log("------------------ 배포가 완료되었습니다. ------------------");
};

module.exports.tags = ["all", "token"];
