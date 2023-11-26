import { ethers } from "hardhat";
import data from "../interface.json";

const nfturi = [
    "QmVpaMbNfy98f3zR7M8UuJbH4K1XFFjH6D9JsbX6B75EJo", "QmXgMWcQb4ncwHq5xSMNhri2c71yZiZYvqQ7pHEcEU44DK", "Qmdw8JEcq3U17uLawaZbnuKv5UmnP1kndd86e5Ktxoxkey",
    "QmNMiRmz1QhLkEdzL16M3pQ8Qf229zwpqETf7TpQ9By1AB", "QmUfSAUkPxV6VYKzoJHDKNEtK2szKA3SRHsXAr9LxjjFPj"
]

async function main() {
    const userAddress = "0x3D11f4dF48207873bbDFd701a91E326C97fc1317";
    const contract = await ethers.getContractAt(data.abi, data.address);

    console.log("minting...")
    let tx = await contract.mint(userAddress, 5);


    await tx.wait();
    console.log("NFTs minted Successfully 🤞")

    for (let i = 0; i < 5; i++) {
        console.log("Setting Prompt for NFT "+i+" ...");
        tx = await contract.updatePrompt("Generate image of a Boy doing coding in a computer", i);
        await tx.wait();

        console.log("Setting uri for NFT "+i+" ...")
        tx = await contract.setURI(nfturi[i], i)
        await tx.wait();
    }

    console.log("Balance : ", await contract.balanceOf(userAddress));
}

main()