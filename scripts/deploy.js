// // // const hre = require('hardhat');
// // // const { Wallet } = require("ethers");
// // // require("ethers");
// // // const {ethers} = require('hardhat');
// // // // require("dotenv").config();

// // // const signer = ethers.provider.getSigner();
// // // // const signer = new Wallet(process.env.REACT_APP_DEPLOYER_PRIV_KEY);
// // // const voter_1 = new Wallet(process.env.voter_1);
// // // const voter_2 = new Wallet(process.env.voter_2);
// // // const voter_3 = new Wallet(process.env.voter_3);
// // // const voter_4 = new Wallet(process.env.voter_4);
// // // const proposer = new Wallet(process.env.wallet);

// // // async function main() {

// // //   // [proposer, executor, vote1, vote2, vote3, vote4, vote5] =
// // //   //   await ethers.getSigners();
  
// // //   const Token = await hre.ethers.getContractFactory('Token');
// // //   const tokenName = "Government Token";
// // //   const tokenSymbol = "VTC";
// // //   const initialSupply = ethers.utils.parseEther("1000000");
// // //   const token = await Token.deploy(tokenName, tokenSymbol, initialSupply);
// // //   console.log("Deploying token contract...");
// // //   await token.deployed();
// // //   console.log("Token deployed at:", token.address);

// // //   const TimeLock = await hre.ethers.getContractFactory('TimeLock');
// // //   const timeLock = await TimeLock.deploy(
// // //     1,
// // //     [proposer.address],
// // //     [proposer.address],
// // //     proposer.address
    
// // //   );

// // //   await timeLock.deployed();

// // //   console.log('TimeLock deployed to:', timeLock.address);

// // //   const Governance = await hre.ethers.getContractFactory('Governance');
// // //   const governance = await Governance.deploy(
// // //     token.address,
// // //     timeLock.address
// // //   );

// // //   await governance.deployed();

// // //   console.log('Governance deployed to:', governance.address);

// // //   const Treasury = await hre.ethers.getContractFactory('Treasury');
// // //   const treasury = await Treasury.deploy();

// // //   await treasury.deployed();

// // //   console.log('Treasury deployed to:', treasury.address);
  
// // //   await treasury.transferOwnership(timeLock.address);
  
// // //   console.log('Ownership transfer to :', timeLock.address);
  
// // //   const contract = token.attach(token.address).connect(signer);
// // //   await contract.mint(voter_1.address, 100000000);
// // //   await contract.mint(voter_2.address, 100000000);
// // //   await contract.mint(voter_3.address, 100000000);
// // //   await contract.mint(voter_4.address, 100000000);

// // //   await contract.connect(voter_1).delegate(voter_1.address);
// // //   await contract.connect(voter_2).delegate(voter_2.address);
// // //   await contract.connect(voter_3).delegate(voter_3.address);
// // //   await contract.connect(voter_4).delegate(voter_4.address);
  
// // //   await timeLock.grantRole(await timeLock.PROPOSER_ROLE(), governance.address);
// // // }

// // // // We recommend this pattern to be able to use async/await everywhere
// // // // and properly handle errors.
// // // main()
// // //   .then(() => process.exit(0))
// // //   .catch((error) => {
// // //     console.error(error);
// // //     process.exit(1);
// // //   });


// // const hre = require('hardhat');
// // const { Wallet } = require("ethers");
// // require("ethers");
// // const {ethers} = require('hardhat');

// // const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
// // const signer = ethers.provider.getSigner();

// // const voter_1 = new Wallet(process.env.voter_1);
// // const voter_2 = new Wallet(process.env.voter_2);
// // const voter_3 = new Wallet(process.env.voter_3);
// // const voter_4 = new Wallet(process.env.voter_4);
// // const proposer = new Wallet(process.env.wallet);

// // async function main() {
  
// //   const Token = await hre.ethers.getContractFactory('Token');
// //   const tokenName = "Government Token";
// //   const tokenSymbol = "VTC";
// //   const initialSupply = ethers.utils.parseEther("1000000");
// //   const token = await Token.deploy(tokenName, tokenSymbol, initialSupply);
// //   console.log("Deploying token contract...");
// //   await token.deployed();
// //   console.log("Token deployed at:", token.address);

// //   const TimeLock = await hre.ethers.getContractFactory('TimeLock');
// //   const timeLock = await TimeLock.deploy(
// //     1,
// //     [proposer.address],
// //     [proposer.address],
// //     proposer.address
    
// //   );

// //   await timeLock.deployed();

// //   console.log('TimeLock deployed to:', timeLock.address);

// //   const Governance = await hre.ethers.getContractFactory('Governance');
// //   const governance = await Governance.deploy(
// //     token.address,
// //     timeLock.address
// //   );

// //   await governance.deployed();

// //   console.log('Governance deployed to:', governance.address);

// //   const Treasury = await hre.ethers.getContractFactory('Treasury');
// //   const treasury = await Treasury.deploy();

// //   await treasury.deployed();

// //   console.log('Treasury deployed to:', treasury.address);
  
// //   await treasury.transferOwnership(timeLock.address);
  
// //   console.log('Ownership transfer to :', timeLock.address);
  
// //   const contract = token.attach(token.address).connect(signer);
// //   await contract.mint(voter_1.address, 100000000);
// //   await contract.mint(voter_2.address, 100000000);
// //   await contract.mint(voter_4.address, 100000000);
// //   await contract.mint(voter_3.address, 100000000);

// //   await contract.connect(voter_1).delegate(voter_1.address);
// //   await contract.connect(voter_2).delegate(voter_2.address);
// //   await contract.connect(voter_3).delegate(voter_3.address);
// //   await contract.connect(voter_4).delegate(voter_4.address);
  
// //   await timeLock.grantRole(await timeLock.PROPOSER_ROLE(), governance.address);
// // }

// // // We recommend this pattern to be able to use async/await everywhere
// // // and properly handle errors.
// // main()
// //   .then(() => process.exit(0))
// //   .catch((error) => {
// //     console.error(error);
// //     process.exit(1);
// //   });



// const hre = require('hardhat');
// const { Wallet } = require("ethers");
// require("ethers");
// const {ethers} = require('hardhat');

// // Define the provider
// const provider = new ethers.providers.JsonRpcProvider('http://localhost:7545');

// // Define the wallets
// const signer = provider.getSigner();
// const voter_1 = new Wallet(process.env.voter_1, provider);
// const voter_2 = new Wallet(process.env.voter_2, provider);
// const voter_3 = new Wallet(process.env.voter_3, provider);
// const voter_4 = new Wallet(process.env.voter_4, provider);
// const proposer = new Wallet(process.env.REACT_APP_DEPLOYER_PRIV_KEY, provider);

// async function main() {
  
//   const Token = await hre.ethers.getContractFactory('Token');
//   const tokenName = "Government Token";
//   const tokenSymbol = "VTC";
//   const initialSupply = ethers.utils.parseEther("1000000");
//   const token = await Token.deploy(tokenName, tokenSymbol, initialSupply);
//   console.log("Deploying token contract...");
//   await token.deployed();
//   console.log("Token deployed at:", token.address);

//   const TimeLock = await hre.ethers.getContractFactory('TimeLock');
//   const timeLock = await TimeLock.deploy(
//     1,
//     [proposer.address],
//     [proposer.address],
//     proposer.address
    
//   );

//   await timeLock.deployed();

//   console.log('TimeLock deployed to:', timeLock.address);

//   const Governance = await hre.ethers.getContractFactory('Governance');
//   const governance = await Governance.deploy(
//     token.address,
//     timeLock.address
//   );

//   await governance.deployed();

//   console.log('Governance deployed to:', governance.address);

//   const Treasury = await hre.ethers.getContractFactory('Treasury');
//   const treasury = await Treasury.deploy();

//   await treasury.deployed();

//   console.log('Treasury deployed to:', treasury.address);
  
//   await treasury.transferOwnership(timeLock.address);
  
//   console.log('Ownership transfer to :', timeLock.address);
  
//   const contract = token.attach(token.address).connect(signer);
//   // await contract.mint(voter_1.address, 100000000);
//   // await contract.mint(voter_2.address, 100000000);
//   // await contract.mint(voter_3.address, 100000000);
//   // await contract.mint(voter_4.address, 100000000);
//   await contract.mint(voter_1.address, 100000000, { gasLimit: 5000000 });
//   await contract.mint(voter_2.address, 100000000, { gasLimit: 5000000 });
//   await contract.mint(voter_3.address, 100000000, { gasLimit: 5000000 });
//   await contract.mint(voter_4.address, 100000000, { gasLimit: 5000000 });


//   await contract.connect(voter_1).delegate(voter_1.address, { gasLimit: 5000000 });
//   await contract.connect(voter_2).delegate(voter_2.address, { gasLimit: 5000000 });
//   await contract.connect(voter_3).delegate(voter_3.address, { gasLimit: 5000000 });
//   await contract.connect(voter_4).delegate(voter_4.address, { gasLimit: 5000000 });
  
//   // await timeLock.grantRole(await timeLock.PROPOSER_ROLE(), governance.address);
//   await timeLock.grantRole(await timeLock.PROPOSER_ROLE(), governance.address);
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   }); 


const hre = require('hardhat');

async function main() {
  [proposer, executor, vote1, vote2, vote3, vote4, vote5] =
    await ethers.getSigners();

  const Token = await hre.ethers.getContractFactory('Token');
  const tokenName = "Government Token";
  const tokenSymbol = "VTC";
  const initialSupply = ethers.utils.parseEther("1000000");
  const token = await Token.deploy(tokenName, tokenSymbol, initialSupply);
  console.log("Deploying token contract...");
  await token.deployed();
  console.log("Token deployed at:", token.address);

  const TimeLock = await hre.ethers.getContractFactory('TimeLock');
  const timeLock = await TimeLock.deploy(
    1,
    [],
    [proposer.address], 
    proposer.address

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

  // const walletAddress = '0xb41b7589ae02a4594cd9314f6b500b387027250b';
  const Treasury = await hre.ethers.getContractFactory('Treasury');
  const treasury = await Treasury.deploy();

  await treasury.deployed();

  console.log('Treasury deployed to:', treasury.address);

  await treasury.transferOwnership(timeLock.address);
  
  await token.mint(vote1.address, 100000000);
  await token.mint(vote2.address, 100000000);
  await token.mint(vote3.address, 100000000);
  await token.mint(vote4.address, 100000000);
  
  await token.connect(vote1).delegate(vote1.address);
  await token.connect(vote2).delegate(vote2.address);
  await token.connect(vote3).delegate(vote3.address);
  await token.connect(vote4).delegate(vote4.address);
  
  await timeLock.grantRole(await timeLock.PROPOSER_ROLE(), governance.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });