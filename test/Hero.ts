import { network } from "hardhat";
const { ethers } = await network.create();
import { expect } from "chai";

describe("Hero.sol --", function () {

    let contract: any;

    async function getContract() {
        const Hero = await ethers.getContractFactory("TestHero");
        const contract = await Hero.deploy();
        await contract.waitForDeployment();
        return contract;
    }

    before(async function () { contract = await getContract(); });

    it("-- should get an empty list of heroes", async function () {
        expect(await contract.getHeroes()).to.deep.equal([]);
    });

    it("-- should create a hero with the correct statistics", async function () {
        await contract.setRandom(69);
        await contract.createHero(0, { value: ethers.parseEther("0.05") });
        const heroes = await contract.getHeroes();
        const hero = heroes[0];
        expect(await contract.getStrength(hero)).to.equal(6n);
        expect(await contract.getHealth(hero)).to.equal(2n);
        expect(await contract.getDexterity(hero)).to.equal(14n);
        expect(await contract.getIntellect(hero)).to.equal(10n);
        expect(await contract.getMagic(hero)).to.equal(16n);
    });

    it("-- should fail at creating a hero because of an insufficient payment", async function () {
        let error: any;
        try { await contract.createHero(0, { value: ethers.parseEther("0.045") }); }
        catch ($error) { error = $error; }
        expect(error.message.includes("Please send more money!")).to.equal(true);
    });
});
