# The Game

A Solidity smart contract game with a Hardhat development setup and a TypeScript front end.

## About The Project

This project contains a Hero smart contract written in Solidity (`contracts/Hero.sol`, with `TestHero.sol`), Hardhat tests (`test/Hero.ts`), a deployment script (`scripts/deploy.ts`), and a small TypeScript front end (`src/index.ts` and `src/index.html`) bundled with webpack.

### Course

Frontend Masters - A Tour of Web 3: Ethereum & Smart Contracts with Solidity (per the repository's original description).

### Built With

- Solidity
- Hardhat
- Ethers.js
- TypeScript
- Webpack

## Getting Started

### Prerequisites

- Node.js
- Yarn (a yarn.lock is included)

### Usage

1. Install dependencies:

   ```sh
   yarn install
   ```

2. Start a local Hardhat node:

   ```sh
   yarn launch
   ```

3. Deploy the contract to the local network:

   ```sh
   yarn deploy
   ```

4. Run the tests:

   ```sh
   yarn test
   ```

5. Serve the front end (after building with webpack):

   ```sh
   yarn serve
   ```

   The front end is served at [http://localhost:6969](http://localhost:6969).

## License

MIT is declared in `package.json`; no license file is present in this repository.
