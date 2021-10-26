require('@nomiclabs/hardhat-waffle');
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
const projectId = '1b2381ee2b6944c88311568cbc8a33ce';
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey],
    },
  },
  solidity: '0.8.4',
};
