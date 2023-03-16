const { ethers } = require("hardhat");
const hre = require("hardhat");
const { Wallet } = require("ethers");


const GOVERNANCE_ADDRESS = "0xF73f40D8B3a84AF091587a1B3783a84715D68f9D";

const propId =
  "564861217255075053938381601589245904799469081615614726766894502527280538790";

const signer = new Wallet(process.env.REACT_APP_DEPLOYER_PRIV_KEY);
const signerAddress = signer.address;
const voter_1 = process.env.voter_1;
const voter_2 = process.env.voter_2;
const voter_3 = process.env.voter_3;
const voter_4 = process.env.voter_4;

async function main() {

  const Governance = await hre.ethers.getContractFactory("Governance");
  const governance = await Governance.attach(GOVERNANCE_ADDRESS);

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
