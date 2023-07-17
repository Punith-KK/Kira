import * as snarkjs from "snarkjs";

export const encode = async (M) => {
  const { publicSignals } = await snarkjs.plonk.fullProve(
    { M },
    "./lib/encode/circuit.wasm",
    "./lib/encode/circuit_final.zkey"
  );
  return publicSignals;
};
