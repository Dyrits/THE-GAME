import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Hero.sol --", function () {

    let contract;

    async function getContract() {
        const Hero = await ethers.getContractFactory("TestHero");
        const contract = await Hero.deploy();
        await contract.deployed();
        return contract;
    }

    before(async function () { contract = await getContract(); });

    it("-- should get an empty list of heroes", async function () {
        expect(await contract.getHeroes()).to.deep.equal([]);
    });

    it("-- should create a hero with the correct statistics", async function () {
        contract.setRandom(69);
        await contract.createHero(0, { value: ethers.utils.parseEther("0.05") });
        const heroes = await contract.getHeroes();
        const hero = heroes[0];
        expect(await contract.getStrength(hero)).to.equal(6);
        expect(await contract.getHealth(hero)).to.equal(2);
        expect(await contract.getDexterity(hero)).to.equal(14);
        expect(await contract.getIntellect(hero)).to.equal(10);
        expect(await contract.getMagic(hero)).to.equal(16);
    });

    it("-- should fail at creating a hero because of an insufficient payment", async function () {
        let error;
        try { await contract.createHero(0, { value: ethers.utils.parseEther("0.045") }); }
        catch ($error) { error = $error; }
        expect(error.message.includes("Please send more money!")).to.equal(true);
    });
});
