/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface KeyGenerationVerifierInterface extends utils.Interface {
  functions: {
    "verifyProof(uint256[24],uint256[2])": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "verifyProof"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "verifyProof",
    values: [
      PromiseOrValue<BigNumberish>[],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "verifyProof",
    data: BytesLike
  ): Result;

  events: {};
}

export interface KeyGenerationVerifier extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KeyGenerationVerifierInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    verifyProof(
      _proof: PromiseOrValue<BigNumberish>[],
      _pubSignals: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  verifyProof(
    _proof: PromiseOrValue<BigNumberish>[],
    _pubSignals: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    verifyProof(
      _proof: PromiseOrValue<BigNumberish>[],
      _pubSignals: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    verifyProof(
      _proof: PromiseOrValue<BigNumberish>[],
      _pubSignals: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    verifyProof(
      _proof: PromiseOrValue<BigNumberish>[],
      _pubSignals: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
