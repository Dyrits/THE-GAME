import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Hero.sol --", function () {

    let contract;

    async function getContract() {
        const Hero = await ethers.getContractFactory("Hero");
        const contract = await Hero.deploy();
        await contract.deployed();
        return contract;
    }

    before(async function () { contract = await getContract(); });

    it("-- should fail at creating a hero because of an insufficient payment", async function () {
        let error;
        try { await contract.createHero(0, { value: ethers.utils.parseEther("0.045") }); }
        catch ($error) { error = $error; }
        expect(error.message.includes("Please send more money!")).to.equal(true);
    });

    it("-- should get an empty list of heroes", async function () {
        expect(await contract.getHeroes()).to.deep.equal([]);
    });
});
