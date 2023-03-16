const { ethers } = require('hardhat');
const hre = require('hardhat');
const { Wallet } = require("ethers");

const GOVERNANCE_ADDRESS = '0x3191b0F329b6CAe2Ea9593Dbd550a287eEE23Ae3';
const TREASURY_ADDRESS = '0xF6BFeFAdD008FBF7F5F3b54E3ec5d1403967ac8f';

const propId =
  '16576104739305558309183164176600087805738290249125002459270796645909364066296';

const signer = new Wallet(process.env.REACT_APP_DEPLOYER_PRIV_KEY);
const signerAddress = signer.address;
const voter_1 = process.env.voter_1;
const voter_2 = process.env.voter_2;
const voter_3 = process.env.voter_3;
const voter_4 = process.env.voter_4;

async function main() {
//   [proposer, executor, vote1, vote2, vote3, vote4, vote5] =
//     await ethers.getSigners();

  const Governance = await hre.ethers.getContractFactory('Governance');
  const governance = await Governance.attach(GOVERNANCE_ADDRESS);

  const Treasury = await hre.ethers.getContractFactory('Treasury');
  const treasury = await Treasury.attach(TREASURY_ADDRESS);

  await governance.connect(voter_1).castVote(propId, 1);
  await governance.connect(voter_2).castVote(propId, 1);
  await governance.connect(voter_3).castVote(propId, 1);
  await governance.connect(voter_4).castVote(propId, 1);

  const checkState = await governance.state(propId);
  console.log(checkState);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });