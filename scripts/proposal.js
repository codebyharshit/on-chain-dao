// // // const hre = require('hardhat');
// // // const { Wallet } = require("ethers");
// // // require("ethers");
// // // const {ethers} = require('hardhat');

// // // const GOVERNANCE_ADDRESS = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';
// // // const TREASURY_ADDRESS = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';

// // // // const signer = new Wallet(process.env.REACT_APP_DEPLOYER_PRIV_KEY);
// // // // const signerAddress = signer.address;

// // // async function main() {
  
// // //   [proposer, executor, vote1, vote2, vote3, vote4, vote5] =
// // //     await ethers.getSigners();

// // //   const Governance = await hre.ethers.getContractFactory('Governance');
// // //   const governance = await Governance.attach(GOVERNANCE_ADDRESS);

// // //   const Treasury = await hre.ethers.getContractFactory('Treasury');
// // //   const treasury = await Treasury.attach(TREASURY_ADDRESS);

// // //   // Create proposal
// // //   const callPropose = await governance.propose(
// // //     [TREASURY_ADDRESS],
// // //     [0],
// // //     [
// // //       await treasury.interface.encodeFunctionData('withdrawFunds', [
// // //         signerAddress,
// // //         ethers.utils.parseUnits('1', 18),
// // //       ]),
// // //     ],
// // //     'Donation Demo'
// // //   );

// // //   const txn = await callPropose.wait(0);

// // //   const propId = await txn.events[0].args.proposalId;

// // //   console.log("propId", propId);

// // //   const checkState = await governance.state(propId);
// // //   console.log("DAO State", checkState);
// // // }

// // // // We recommend this pattern to be able to use async/await everywhere
// // // // and properly handle errors.
// // // main()
// // //   .then(() => process.exit(0))
// // //   .catch((error) => {
// // //     console.error(error);
// // //     process.exit(1);
// // //   });

// // // // const { ethers } = require('hardhat');
// // // // const hre = require('hardhat');

// // // // const GOVERNANCE_ADDRESS = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';
// // // // const LOCKER_ADDRESS = '0xF6BFeFAdD008FBF7F5F3b54E3ec5d1403967ac8f';

// // // // // const propId ='';

// // // // async function main() {
// // // //   [proposer, executor, vote1, vote2, vote3, vote4, vote5] =
// // // //     await ethers.getSigners();

// // // //   const Governance = await hre.ethers.getContractFactory('Governance');
// // // //   const governance = await Governance.attach(GOVERNANCE_ADDRESS);

// // // //   const Locker = await hre.ethers.getContractFactory('Locker');
// // // //   const locker = await Locker.attach(LOCKER_ADDRESS);

// // // //   // Create proposal
// // // //   const callPropose = await governance.propose(
// // // //     [LOCKER_ADDRESS],
// // // //     [0],
// // // //     [
// // // //       await locker.interface.encodeFunctionData('withdrawFunds', [
// // // //         proposer.address,
// // // //         ethers.utils.parseUnits('1', 18),
// // // //       ]),
// // // //     ],
// // // //     'Donation Demo'
// // // //   );
// // // //   // console.log(locker.interface.encodeFunctionData('withdrawFunds', []));

// // // //   const txn = await callPropose.wait(1);
// // // //   // console.log(txn);

// // // //   // await ethers.provider.send('evm_mine');

// // // //   const propId = await txn.events[0].args.proposalId;

// // // //   console.log(propId);

// // // //   const checkState = await governance.state(propId);
// // // //   console.log(checkState);
// // // // }

// // // // // We recommend this pattern to be able to use async/await everywhere
// // // // // and properly handle errors.
// // // // main()
// // // //   .then(() => process.exit(0))
// // // //   .catch((error) => {
// // // //     console.error(error);
// // // //     process.exit(1);
// // // //   });

// // const { ethers } = require('hardhat');
// // const hre = require('hardhat');
// // require("ethers");

// // const GOVERNANCE_ADDRESS = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';
// // const TREASURY_ADDRESS = '0xF6BFeFAdD008FBF7F5F3b54E3ec5d1403967ac8f';

// // // const propId ='';

// // async function main() {
// //   [proposer, executor, vote1, vote2, vote3, vote4, vote5] =
// //     await ethers.getSigners();

// //   const Governance = await hre.ethers.getContractFactory('Governance');
// //   const governance = await Governance.attach(GOVERNANCE_ADDRESS);

// //   const Treasury = await hre.ethers.getContractFactory('Treasury');
// //   const treasury = await Treasury.attach(TREASURY_ADDRESS);

// //   // Create proposal
// //   // const callPropose = await governance.propose(
// //   //   [TREASURY_ADDRESS],
// //   //   [0],
// //   //   [
// //   //     await treasury.interface.encodeFunctionData('withdrawFunds', [
// //   //       proposer.address,
// //   //       ethers.utils.parseUnits('1', 18),
// //   //     ]),
// //   //   ],
// //   //   'Demos'
// //   // );
// //   // // console.log(locker.interface.encodeFunctionData('withdrawFunds', []));

// //   // const txn = await callPropose.wait(1);
// //   // console.log(txn);

// //   // await ethers.provider.send('evm_mine');

// //   const executeTxn = await multiTokenDAO.execute(
// //     [TREASURY_ADDRESS],
// //     [0],
// //     [await treasury.interface.encodeFunctionData("sendEther", [owner.address, ethers.utils.parseUnits("1", 18)])],
// //     ethers.utils.keccak256(ethers.utils.toUtf8Bytes("Sending 1 ether to owner address!"))
// //   );
// //   await executeTxn.wait();

// //   const propId = await txn.events[0].args.proposalId;

// //   console.log(propId);

// //   const checkState = await governance.state(propId);
// //   console.log("DAO State", checkState);}

// // // We recommend this pattern to be able to use async/await everywhere
// // // and properly handle errors.
// // main()
// //   .then(() => process.exit(0))
// //   .catch((error) => {
// //     console.error(error);
// //     process.exit(1);
// //   });


// const { ethers } = require("hardhat");
// // const { DAO_ADDRESS, TREASURY_ADDRESS } = require("./addresses.js");

// const GOVERNANCE_ADDRESS = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';
// const TREASURY_ADDRESS = '0xF6BFeFAdD008FBF7F5F3b54E3ec5d1403967ac8f';

// async function main() {
//     const [owner] = await ethers.getSigners();

//     // Get the MultiTokenDAO contract and attach deployed address.
//  const Governance = await hre.ethers.getContractFactory('Governance');
//  const governance = await Governance.attach(GOVERNANCE_ADDRESS);

//     // Get the Treasury contract and attach deployed address.
//     const Treasury = await ethers.getContractFactory("Treasury");
//     const treasury = await Treasury.attach(TREASURY_ADDRESS);
    
//     // Create a proposal to send 1 ether from the treasury to an address.
//     const proposalTxn = await governance.propose(
//         [TREASURY_ADDRESS],
//         [0],
//         [await treasury.interface.encodeFunctionData("sendEther", [owner.address, ethers.utils.parseUnits("1", 18)])],
//         "Sending 1 ether to owner address!"
//     );
//     const txn = await proposalTxn.wait();

//     // Get the proposalId from the events emitted.
//     const proposalId = txn.logs[0].args.proposalId;
//     console.log("/n -> Created a proposal to send 1 ether to owner with id: ", proposalId);

// }

// main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     })


const { ethers } = require('hardhat');
const hre = require('hardhat');

const GOVERNANCE_ADDRESS = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';
const TREASURY_ADDRESS = '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9';

// const propId ='';

async function main() {
  [proposer, executor, vote1, vote2, vote3, vote4, vote5] =
    await ethers.getSigners();

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
        proposer.address,
        ethers.utils.parseUnits('1', 18),
      ]),
    ],
    "Donation Demo"
  );
  // console.log(locker.interface.encodeFunctionData('withdrawFunds', []));

  const txn = await callPropose.wait(1);
  // console.log(txn);

  // await ethers.provider.send('evm_mine');

  const propId = await txn.events[0].args.proposalId;

  console.log(propId);

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