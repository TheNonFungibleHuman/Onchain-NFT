import Web3 from "web3";
import NFTMinting from "../abi/NFTMinting.json";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  web3 = new Web3(window.ethereum);
} else {
  // Handle the case when the window or window.ethereum is undefined
}

export async function getAccount() {
  if (web3) {
    await window.ethereum.enable();
    const accounts = await web3.eth.getAccounts();
    return accounts[0];
  }
  return null; // Handle the case when web3 is not available
}

export function getContract() {
  const contractAddress = "0x8abA45e7178D26bc1a19637dA577Ba5802014362";
  const contract = new web3.eth.Contract(NFTMinting.abi, contractAddress, {
    from: web3.eth.defaultAccount,
    gasPrice: "20000000", // adjust the gas price as needed
    network: networkId,
  });
  return contract;
}

export async function mintNFT(name) {
  if (web3) {
    const account = await getAccount();
    if (!account) {
      throw new Error("No account available");
    }
    const contract = getContract();
    const result = await contract.methods.mint(name).send({ from: account });
    return result;
  }
  throw new Error("Web3 is not available");
}
