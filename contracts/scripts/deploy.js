const hre = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  console.log("🚀 Deploying AI Meme Agent contracts...\n");

  // Get deployer account
  const [deployer] = await hre.ethers.getSigners();
  console.log("📝 Deploying contracts with account:", deployer.address);
  console.log("Account balance:", (await deployer.provider.getBalance(deployer.address)).toString());

  // Deploy MemeToken
  console.log("\n1️⃣  Deploying MemeToken...");
  const MemeToken = await hre.ethers.getContractFactory("MemeToken");
  const memeToken = await MemeToken.deploy();
  await memeToken.waitForDeployment();
  const tokenAddress = await memeToken.getAddress();
  console.log("✅ MemeToken deployed to:", tokenAddress);

  // Deploy MemeAgentNFT
  console.log("\n2️⃣  Deploying MemeAgentNFT...");
  const MemeAgentNFT = await hre.ethers.getContractFactory("MemeAgentNFT");
  const nftContract = await MemeAgentNFT.deploy();
  await nftContract.waitForDeployment();
  const nftAddress = await nftContract.getAddress();
  console.log("✅ MemeAgentNFT deployed to:", nftAddress);

  // Save deployment addresses
  const deploymentInfo = {
    network: hre.network.name,
    timestamp: new Date().toISOString(),
    deployer: deployer.address,
    contracts: {
      MemeToken: tokenAddress,
      MemeAgentNFT: nftAddress,
    },
  };

  console.log("\n📋 Deployment Summary:");
  console.log(JSON.stringify(deploymentInfo, null, 2));

  // Save to file
  const deploymentPath = path.join(__dirname, `../deployments/${hre.network.name}.json`);
  const deploymentDir = path.dirname(deploymentPath);

  if (!fs.existsSync(deploymentDir)) {
    fs.mkdirSync(deploymentDir, { recursive: true });
  }

  fs.writeFileSync(deploymentPath, JSON.stringify(deploymentInfo, null, 2));
  console.log("\n💾 Deployment info saved to:", deploymentPath);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
