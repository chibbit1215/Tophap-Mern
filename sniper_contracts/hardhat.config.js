
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


const accounts = {
  mnemonic: process.env.MNEMONIC,
};

module.exports = {
  solidity: "0.8.10",
  allowUnlimitedContractSize: true,
  etherscan: {
    apiKey: {
      goerli:'F8FWDHPJ3AY1KNUTSZHFSTNXNWKWU67EEB',
      ftmTestnet: 'WDHFZFMJKTS82UXC9R1G52UY278AMFWQ9V',
      bscTestnet: '9GUFJUEMXS4CF943XEQTSMXGRRJNT4BF5I',
      bsc: '9GUFJUEMXS4CF943XEQTSMXGRRJNT4BF5I',
      arbiscanApiKey: 'K8ZHY5JT47ETMM3KBRQSJ266EYXM7QXAE6'
    }
  },
  networks: {
    arbitrum: {
      url: "https://arbitrum-one.public.blastapi.io",
      accounts: [process.env.PRIVKEY],
      chainId: 42161,
      live: false,
      saveDeployments: true,
      gasMultiplier: 2,
    },
    bsctestnet: {
      url: "https://bsc-testnet.public.blastapi.io",
      accounts: [process.env.PRIVKEY],
      chainId: 97,
      live: false,
      saveDeployments: true,
      gasMultiplier: 2,
    },
    bscmainnet:{
      url: "https://bsc-dataseed.binance.org",
      accounts: [process.env.PRIVKEY],
      chainId: 56,
      live: false,
      saveDeployments: true,
      gasMultiplier: 2,
    },
    polygontestnet: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [process.env.PRIVKEY],
      chainId: 80001,
      live: true,
      saveDeployments: true,
      gasMultiplier: 2,
    },
  },
};