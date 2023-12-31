/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "CreateShuffledDeckVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CreateShuffledDeckVerifier__factory>;
    getContractFactory(
      name: "IndianPokerSolo",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IndianPokerSolo__factory>;
    getContractFactory(
      name: "ITazza",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITazza__factory>;
    getContractFactory(
      name: "KeyGenerationVerifier",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.KeyGenerationVerifier__factory>;
    getContractFactory(
      name: "Tazza",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Tazza__factory>;

    getContractAt(
      name: "CreateShuffledDeckVerifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CreateShuffledDeckVerifier>;
    getContractAt(
      name: "IndianPokerSolo",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IndianPokerSolo>;
    getContractAt(
      name: "ITazza",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITazza>;
    getContractAt(
      name: "KeyGenerationVerifier",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.KeyGenerationVerifier>;
    getContractAt(
      name: "Tazza",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Tazza>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
