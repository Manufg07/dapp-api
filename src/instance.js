import { Contract, JsonRpcProvider, Wallet } from "ethers";

import details from "./scdata/deployed_addresses.json" assert {type: "json"};
import Cert from "./scdata/Cert.json" assert { type: "json"};

// const provider = new JsonRpcProvider("http://127.0.0.18545");
// const signer = await provider.getSigner();

const provider = new JsonRpcProvider(
  "https://sepolia.infura.io/v3/887666071b1844899a3865952de8e7bf"
);

const wallet = new Wallet('759b047157c23a0e93b3f13fbfdd09de6834a185fe0132714041c146dc3974f1', provider);
console.log('address', details)
export const instance = new Contract(details.CertModuleCert, Cert.abi, wallet);

