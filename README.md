**Onchain NFT App**

This is an onchain NFT (Non-Fungible Token) App that allows users to store metadata onchain as NFTs. The application is built on the Celo
blockchain and leverages the ERC-721 standard to create unique NFTs for each metadata stored on the blockchain.
Requirements

    Node.js
    Truffle
    Ganache

**Installation**
Clone the repository
   
    git clone (https://github.com/TheNonFungibleHuman/Onchain-NFT).git 
   **Install Dependencies**
     
    cd onchain-nft-app
    npm install

**Usage**

    Start a local blockchain network using Ganache.

ganache-cli

  Compile and migrate the smart contract.

    truffle compile
    truffle migrate --network alfajores

  Start the development server.

     npm start

  Open the app in your browser at http://localhost:3000.

**Deployment**

This project has been deployed on the Alfajores Testnet and can be accessed through the following address: [https://alfajores-testnet.onchain-nft-app.com](https://explorer.celo.org/alfajores/address/0x8abA45e7178D26bc1a19637dA577Ba5802014362)
**Compilation**

This project was compiled with the Injected VM environment on Remix IDE.
**Contributing**

Contributions are welcome! If you find any bugs or have suggestions for improvement, please feel free to raise an issue or submit a pull request.
**License**

This project is licensed under the MIT License.
