import { defineConfig } from "hardhat/config";
import ethers from "@nomicfoundation/hardhat-ethers";
import mocha from "@nomicfoundation/hardhat-mocha";
export default defineConfig({plugins:[ethers,mocha],solidity:"0.8.10",networks:{hardhat:{type:"edr-simulated",chainId:1337},localhost:{type:"http",url:"http://127.0.0.1:8545"}}});
