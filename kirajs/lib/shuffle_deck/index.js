import * as snarkjs from "snarkjs";

/*
  signal input D[2][2][n]; // (c1, c2) of ith card
  signal input permutation[n];
  signal input randomness[n];
  signal input h[2];
  signal output E[2][2][n]; // (c1, c2) of ith card after shuffled
*/

export const shuffleDeckWithProof = async (
  n,
  deckBefore,
  permutation,
  randomness,
  h
) => {
  const { proof, publicSignals } = await snarkjs.plonk.fullProve(
    { D: deckBefore, permutation, randomness, h },
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
