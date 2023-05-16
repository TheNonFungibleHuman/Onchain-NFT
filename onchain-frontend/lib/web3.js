import Web3 from 'web3';
import NFTMinting from '../abi/NFTMinting.json';

const web3 = new Web3(window.ethereum);

export async function getAccount() {
  await window.ethereum.enable();
  const accounts = await web3.eth.getAccounts();
  return accounts[0];
}

export function getContract() {
  const networkId = `https://alfajores-forno.celo-testnet.org`;
  const contractAddress = 0x8abA45e7178D26bc1a19637dA577Ba5802014362;
  const contract = new web3.eth.Contract(NFTMinting.abi, contractAddress);
  return contract;
}

export async function mintNFT(name) {
  const account = await getAccount();
  const contract = getContract();
  const result = await contract.methods.mint(name).send({ from: account });
  return result;
}
