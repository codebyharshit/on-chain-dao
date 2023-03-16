const hre = require("hardhat");
const BigNumber = require('bignumber.js');
const { ethers } = require('hardhat');
const { Wallet } = require("ethers");


async function main() {
  [proposer, executor, vote1, vote2, vote3, vote4, vote5] =
    await ethers.getSigners();

  const Token = await hre.ethers.getContractFactory("Token");
  const tokenName = "Government Token";
  const tokenSymbol = "VTC";
  const initialSupply = ethers.utils.parseEther("1000000");
  const token = await Token.deploy(tokenName, tokenSymbol, initialSupply);
  console.log("Deploying token contract...");
  await token.deployed();
  console.log("Token deployed at:", token.address);

  const TimeLock = await hre.ethers.getContractFactory("TimeLock");
  const timeLock = await TimeLock.deploy(
    0,
    [],
    [proposer.address],
    proposer.address
  );

  await timeLock.deployed();

  console.log("TimeLock deployed to:", timeLock.address);

  const Governance = await hre.ethers.getContractFactory("Governance");
  const governance = await Governance.deploy(token.address, timeLock.address);

  await governance.deployed();

  console.log("Governance deployed to:", governance.address);

  const Treasury = await hre.ethers.getContractFactory("Treasury");
  const treasury = await Treasury.deploy();

  await treasury.deployed();

  console.log("Treasury deployed to:", treasury.address);

  await treasury.transferOwnership(timeLock.address);

  await token.mint(executor.address, 100000000);
  await token.mint(vote1.address, 100000000);
  await token.mint(vote2.address, 100000000);
  await token.mint(vote3.address, 100000000);
  await token.mint(vote4.address, 100000000);

  await token.connect(executor).delegate(executor.address);
  await token.connect(vote1).delegate(vote1.address);
  await token.connect(vote2).delegate(vote2.address);
  await token.connect(vote3).delegate(vote3.address);
  await token.connect(vote4).delegate(vote4.address);

  await timeLock.grantRole(await timeLock.PROPOSER_ROLE(), governance.address);
  console.log("Proposal Role Changed");

  const callPropose = await governance.propose(
    [treasury.address],
    [0],
    [
      await treasury.interface.encodeFunctionData("withdrawFunds", [
        proposer.address,
        ethers.utils.parseUnits("1", 18),
      ]),
    ],
    "Donation Demo"
  );

  const txn = await callPropose.wait({ timeout: 1000000 });

  // if (!txn.confirmed) {
  //   throw new Error("Transaction not confirmed");
  // }

  const propId = await txn.events[0].args.proposalId;
  console.log(propId.toString());

  await governance.connect(vote1).castVote(propId.toString(), 1);
  await governance.connect(vote2).castVote(propId.toString(), 1);
  await governance.connect(vote3).castVote(propId.toString(), 1);
  await governance.connect(vote4).castVote(propId.toString(), 1);

  await governance.queue(
    [treasury.address],
    [0],
    [
      await treasury.interface.encodeFunctionData("withdrawFunds", [
        proposer.address,
        ethers.utils.parseUnits("1", 18),
      ]),
    ],
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("Donation Demo"))
  );

  const executePropose = await governance.execute(
    [treasury.address],
    [0],
    [
      treasury.interface.encodeFunctionData("withdrawFunds", [
        proposer.address,
        ethers.utils.parseUnits("1", 18),
      ]),
    ],
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("Donation Demo"))
  );

  await executePropose.wait();

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
