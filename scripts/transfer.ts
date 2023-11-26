import { ethers } from "hardhat";
import data from "../interface.json";
import bridgeABIData from "../fxRootContractABI.json"

async function main() {
    const userAddress = "0x3D11f4dF48207873bbDFd701a91E326C97fc1317";
    const contract = await ethers.getContractAt(data.abi, data.address);

    const bridgeContract = await ethers.getContractAt(bridgeABIData, "0xF9bc4a80464E48369303196645e876c8C7D972de");

    for (let i = 0; i < 5; i++) {
        const approveTx = await contract.approve("0xF9bc4a80464E48369303196645e876c8C7D972de", i);
        await approveTx.wait();
        console.log("NFT "+i+" approved ")
    }
    
    console.log("--------------------")
    for (let i = 0; i < 5; i++) {
        const depositTx = await bridgeContract.deposit(data.address, userAddress, i, "0x6556");
        await depositTx.wait();
        console.log("NFT "+i+" Deposited")
    }
    console.log("Transfer is Completed 👍")
}

main()