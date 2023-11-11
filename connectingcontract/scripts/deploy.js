const hre = require("hardhat");

async function main() {
  // NFT Deploy Section
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nftMarketplace = await NFTMarketplace.deploy();
  await nftMarketplace.deployed(); // Wait for deployment

  

  console.log("NFTMarketplace Address:", nftMarketplace.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
