import { ethers } from "hardhat";
import Web3 from "web3";

async function main() {

  const web3 = new Web3("https://eth-mainnet.g.alchemy.com/v2/1B0UqLoMs_6TuU9O7ZyNMTIPFVEL7OpG");
  const type = [ 'uint64' ];

  const Sushi = "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2";
  const SushiValue = await web3.eth.getStorageAt(Sushi, 3);
  const sushiValue = ethers.utils.defaultAbiCoder.decode(type, SushiValue);
  console.log(`Sushi value: ${sushiValue}`);
  
  const Aave = "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9";
  const AaveValue = await web3.eth.getStorageAt(Aave, 2);
  const aaveValue = ethers.utils.defaultAbiCoder.decode(type, AaveValue)
  console.log(`Aave value: ${aaveValue}`);
  
  const Mana = "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942";
  const ManaValue = await web3.eth.getStorageAt(Mana, 0);
  const manaValue = ethers.utils.defaultAbiCoder.decode(type, ManaValue);
  console.log(`Mana value: ${manaValue}`);
 
  const Aavegotchi = "0x1906fd9c4AC440561F7197Da0A4BD2E88DF5fA70";
  const AavegotchiValue = await web3.eth.getStorageAt(Aavegotchi, 3);
  const aavegotchiValue = ethers.utils.defaultAbiCoder.decode(type, AavegotchiValue);
  console.log(`Aavegotchi value: ${aavegotchiValue}`);

  const Balancer = "0xba100000625a3754423978a60c9317c58a424e3D";
  const BalancerValue = await web3.eth.getStorageAt(Balancer, 4);
  const balancerValue = ethers.utils.defaultAbiCoder.decode(type, BalancerValue);
  console.log(`Balancer value: ${balancerValue}`);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
