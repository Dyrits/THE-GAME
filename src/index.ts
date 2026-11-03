import { ethers } from "ethers";
import Hero from "../artifacts/contracts/Hero.sol/Hero.json" with { type: "json" };

function getEthereumProxy() {
    // @ts-ignore
    const proxy = window.ethereum;
    if (!proxy) { throw new Error("No ethereum provider found!"); }
    return proxy;
}

function requestEthereumProxy(method: string) {
    return async function () {
        const proxy = getEthereumProxy();
        const accounts = await proxy.request({method}) as string[];
        return accounts && accounts.length;
    }
}

const hasAccounts = requestEthereumProxy("eth_accounts");
const requestAccounts = requestEthereumProxy("eth_requestAccounts");

async function run() {
    if (!await hasAccounts() && !await requestAccounts()) { throw new Error("No accounts found!");}
    const address = process.env.CONTRACT_ADDRESS;
    if (!address) { throw new Error("CONTRACT_ADDRESS is not configured"); }
    const contract = new ethers.Contract(
        address,
        Hero.abi,
        await new ethers.BrowserProvider(getEthereumProxy()).getSigner()
    );
    console.info(contract);
}

run();