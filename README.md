# NFT Project on Polygon Bridge - Readme

## Overview

This project focuses on deploying a 5-item collection of NFTs using either DALLE 2 or Midjourney for image generation. The main goal is to enhance demand and reduce gas costs by migrating the NFT collection from the Ethereum Goerli blockchain to Polygon. The process involves storing images on IPFS, deploying an ERC721 or ERC1155 contract on the Goerli Ethereum Testnet and utilizing the FxPortal Bridge for batch minting and transferring of NFTs.


### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/nft-polygon-bridge.git
   cd nft-polygon-bridge

2. **Install dependencies:**

    ```bash
    npm install

3. **Deploy the contract on the Goerli Ethereum Testnet:**

    ```
    npx hardhat run scripts/deploy.ts --network goerli

4. **Minting and Transferring NFTs**
    Generate a 5-item collection using DALLE 2 or Midjourney.
    And URIs of the generate NFTs in "nfturi" array in mint.ts.

    ```bash
    npx hardhat run scripts/mint.ts --network goerli

5. Transfer all NFTs from Goerli to Polygon Mumbai using the FxPortal Bridge:

    ```
    npx hardhat run scripts/transfer.ts --network goerli

6. Check Balance

    ```
    npx hardhat run scripts/balance.ts --network mumbai


## Author

Rahul B
