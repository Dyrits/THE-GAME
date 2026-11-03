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

## Dependency maintenance

Use Node.js 26.13.0 LTS (see `.nvmrc`) and Yarn 1.22.22. This project now uses Hardhat 3, ethers 6, TypeScript 6 and matching ethers/Mocha plugins. Waffle and its old Ganache dependency tree have been removed. Contracts and Solidity 0.8.10 are unchanged.

Run `yarn install --frozen-lockfile`, `yarn test`, `yarn typecheck`, and `yarn build`. The webpack build exits instead of watching indefinitely. The local Hardhat tests use disposable simulated accounts; they do not send money or deploy to a live chain. Browser use still requires an injected wallet and a configured `CONTRACT_ADDRESS`.

Hardhat 3's built-in `--gas-stats` replaces the old gas-reporter plugin, and `yarn test` displays the new gas table. Remaining dependency advisories include Hardhat/plugin zod 3 and Mocha glob/minimatch. Do not force zod 4 into the zod 3 plugin API. No production deployment or wallet was tested.
