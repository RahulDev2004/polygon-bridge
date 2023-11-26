import { ethers } from "hardhat";
import data from "../interface.json";

async function main() {
    const userAddress = "0x3D11f4dF48207873bbDFd701a91E326C97fc1317";
    const contract = await ethers.getContractAt(data.abi, "0xE3230b9e9D179065773bb5aE7BcB680fCd8Ef6cE");


    console.log("Balance NFTs : " + await contract.balanceOf(userAddress))
}

main()