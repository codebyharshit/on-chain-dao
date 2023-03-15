const hre = require('hardhat');
const { Wallet } = require("ethers");
require("ethers");
require("dotenv").config();

const signer = new Wallet(process.env.REACT_APP_DEPLOYER_PRIV_KEY);
const signerAddress = signer.address;
const voter_1 = process.env.voter_1;
const voter_2 = process.env.voter_2;
const voter_3 = process.env.voter_3;
const voter_4 = process.env.voter_4;
const proposerWallet = process.env.wallet;

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
  
  
  await token.mint(voter_1.address, 100000000);
  await token.mint(voter_2.address, 100000000);
  await token.mint(voter_3.address, 100000000);
  await token.mint(voter_4.address, 100000000);

  await token.connect(voter_1).delegate(voter_1.address);
  await token.connect(voter_2).delegate(voter_2.address);
  await token.connect(voter_3).delegate(voter_3.address);
  await token.connect(voter_4).delegate(voter_4.address);
  
  await timeLock.grantRole(await timeLock.PROPOSER_ROLE(), proposerWallet.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
