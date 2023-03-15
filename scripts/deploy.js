const hre = require('hardhat');
const { Wallet } = require("ethers");
require("ethers");
require("dotenv").config();

const signer = new Wallet(process.env.REACT_APP_DEPLOYER_PRIV_KEY);
const signerAddress = signer.address;
const voterOne = process.env.voter_1;
const voterTwo = process.env.voter_2;
const voterThree = process.env.voter_3;
const voterFour = process.env.voter_4;

async function main() {

  const ERC20Token = await hre.ethers.getContractFactory('Token');
  const tokenName = "Government Token";
  const tokenSymbol = "VTC";
  const initialSupply = ethers.utils.parseEther("1000000");

  const Token = await await hre.ethers.getContractFactory('Token');

  const token = await Token.deploy(tokenName, tokenSymbol, initialSupply);

  console.log("Deploying token contract...");
  await token.deployed();
  console.log("Token deployed at:", token.address);

  const TimeLock = await hre.ethers.getContractFactory('TimeLock');
  const timeLock = await TimeLock.deploy(
    1,
    ["0xDF28C8cF657F679732F2ff5E2E39E970c44bab9c"],
    ["0xDF28C8cF657F679732F2ff5E2E39E970c44bab9c"],
    "0xDF28C8cF657F679732F2ff5E2E39E970c44bab9c"
  );

  await timeLock.deployed();

  console.log('TimeLock deployed to:', timeLock.address);

  const Governance = await hre.ethers.getContractFactory('Governance');
  const governance = await Governance.deploy(
    token.address,
    timeLock.address
  );

  await governance.deployed();

  console.log('Governance deployed to:', governance.address);

  const Treasury = await hre.ethers.getContractFactory('Treasury');
  const treasury = await Treasury.deploy();

  await treasury.deployed();

  console.log('Treasury deployed to:', treasury.address);
  
  await treasury.transferOwnership(timeLock.address);
  
  console.log('Ownership transfer to :', timeLock.address);
  
  await timeLock.grantRole(await timeLock.PROPOSER_ROLE(), governance.address);

  await token.mint(vote1.address, 100000000);
  await token.mint(vote2.address, 100000000);
  await token.mint(vote3.address, 100000000);
  await token.mint(vote4.address, 100000000);

  await token.connect(vote1).delegate(vote1.address);
  await token.connect(vote2).delegate(vote2.address);
  await token.connect(vote3).delegate(vote3.address);
  await token.connect(vote4).delegate(vote4.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });