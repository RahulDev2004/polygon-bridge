import { ethers } from "hardhat";
import { writeFileSync } from "fs"

const OUTPUT_FILE = "./interface.json"

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const Storage = await ethers.deployContract(
    "CoderNFT", ["CODER", "CDR"]
    );

  const storageInstance = await Storage.waitForDeployment();

  const data = {
    address: await storageInstance.getAddress(),
    abi: JSON.parse(storageInstance.interface.formatJson())
  }

  writeFileSync(OUTPUT_FILE, JSON.stringify(data));
  console.log(`Contract Deployed Successfully`)
}

main()
