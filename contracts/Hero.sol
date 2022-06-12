pragma solidity ^0.8.0;

contract Hero {
    enum Class {  Mage, Healer, Barbarian }

    mapping(address => uint[]) heroes;

    function generateRandom() public virtual returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
    }

    function getHeroes() public view returns (uint[] memory) { return heroes[msg.sender]; }

    function getStrength(uint hero) public pure returns (uint32) { return uint32((hero >> 2) & 0x1F); }
    function getHealth(uint hero) public pure returns (uint32) { return uint32((hero >> 7) & 0x1F); }
    function getDexterity(uint hero) public pure returns (uint32) { return uint32((hero >> 12) & 0x1F); }
    function getIntellect(uint hero) public pure returns (uint32) { return uint32((hero >> 17) & 0x1F); }
    function getMagic(uint hero) public pure returns (uint32) { return uint32((hero >> 22) & 0x1F); }

    function createHero(Class class) public payable {
        require(msg.value >= 0.05 ether, "Please send more money!");
        uint[] memory statistics = new uint[](5);
        statistics[0] = 2;
        statistics[1] = 7;
        statistics[2] = 12;
        statistics[3] = 17;
        statistics[4] = 22;
        uint length = 5;
        uint hero = uint(class);
        do {
            uint position = generateRandom() % length;
            uint value = generateRandom() % (13 + length) + 1;
            hero |= value << statistics[position];
            length --;
            statistics[position] = statistics[length];
        } while (length > 0);
        heroes[msg.sender].push(hero);
    }
}