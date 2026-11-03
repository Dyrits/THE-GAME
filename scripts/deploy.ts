import { network } from "hardhat";
const { ethers } = await network.create();

async function getContract(contractName: string) {
    const factory = await ethers.getContractFactory(contractName);
    const contract = await factory.deploy();
    await contract.waitForDeployment();
    return contract;
}

async function deploy(contractName: string) {
    return await getContract(contractName);
}

