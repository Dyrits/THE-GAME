pragma solidity ^0.8.0;

import "./Hero.sol";

contract TestHero is Hero {
    uint random;

    function generateRandom() public override returns (uint) { return random; }

    function setRandom(uint $random) public { random = $random; }
}