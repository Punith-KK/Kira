import * as snarkjs from "snarkjs";

export const addKey = async (sum, pk) => {
  const { publicSignals } = await snarkjs.plonk.fullProve(
    { sum, pk },
    "./lib/add_key/circuit.wasm",
    "./lib/add_key/circuit_final.zkey"
  );
  return publicSignals;
};
