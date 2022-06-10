import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

// @ts-ignore
async function getContract(contractName) {
    const factory = await ethers.getContractFactory(contractName);
    const contract = await factory.deploy();
    await contract.deployed();
    return contract;
}

async function deploy(contractName) {
    return await getContract(contractName);
}

