import * as snarkjs from "snarkjs";

/*
  signal input permutation[n];
  signal input randomness[n];
  signal input h[2];
  signal output D[2][2][n];
*/

export const createShuffledDeckWithProof = async (
  n,
  permutation,
  randomness,
  h
) => {
  const { proof, publicSignals } = await snarkjs.plonk.fullProve(
    { permutation, randomness, h },
    "./lib/shuffle_deck/circuit.wasm",
    "./lib/shuffle_deck/circuit_final.zkey"
  );
  const calldata = await snarkjs.plonk.exportSolidityCallData(
    proof,
    publicSignals
  );
  const deck = publicSignals.slice(0, 4 * n);
  return { deck, calldata };
};
