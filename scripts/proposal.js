const { ethers } = require('hardhat');
const hre = require('hardhat');
const { Wallet } = require("ethers");


const GOVERNANCE_ADDRESS = '0x5D5db3AAE5C2a1e68753A6106cA5Abfe78D730Af';
const TREASURY_ADDRESS = '0x454A23F355327e198E6CE6A1E96133C7A495068B';

// const propId ='';

const signer = new Wallet(process.env.REACT_APP_DEPLOYER_PRIV_KEY);
const signerAddress = signer.address;
const voter_1 = process.env.voter_1;
const voter_2 = process.env.voter_2;
const voter_3 = process.env.voter_3;
const voter_4 = process.env.voter_4;
const voter_5 = process.env.voter_5;


async function main() {

  const Governance = await hre.ethers.getContractFactory('Governance');
  const governance = await Governance.attach(GOVERNANCE_ADDRESS);

  const Treasury = await hre.ethers.getContractFactory('Treasury');
  const treasury = await Treasury.attach(TREASURY_ADDRESS);

  // Create proposal
  const callPropose = await governance.propose(
    [TREASURY_ADDRESS],
    [0],
    [
      await treasury.interface.encodeFunctionData('withdrawFunds', [
        signerAddress,
        ethers.utils.parseUnits('1', 18),
      ]),
    ],
    'Donation Demo'
  );

  const txn = await callPropose.wait(1);

  const propId = await txn.events[0].args.proposalId;

  console.log("propId", propId);

  const checkState = await governance.state(propId);
  console.log("DAO State", checkState);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });