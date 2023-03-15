// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.18",
// };

/** @type import('hardhat/config').HardhatUserConfig */

require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
// require("@nomiclabs/hardhat-waffle");
require("solidity-coverage");

require("dotenv").config();

const privateKey = process.env.REACT_APP_DEPLOYER_PRIV_KEY;
const alchemyProjectId = process.env.ALCHEMY_PROJECT_ID;
const explorerApiKey = process.env.EXPLORER_APIKEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // solidity: "0.8.17",
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  networks: {
    Mumbai: { 
      url: alchemyProjectId,
      accounts: [privateKey]
    }
  },

  etherscan: {
    apiKey: {
      polygonMumbai:explorerApiKey}
  }

};