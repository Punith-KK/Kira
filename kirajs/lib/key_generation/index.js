import path from "path";
import * as snarkjs from "snarkjs";

export const generatePubkeyWithProof = async (privateKey) => {
  const { proof, publicSignals } = await snarkjs.plonk.fullProve(
    { x: privateKey },
    path.resolve(__dirname, "./circuit.wasm"),
    path.resolve(__dirname, "./circuit_final.zkey"),
  );
  const calldata = await snarkjs.plonk.exportSolidityCallData(
    proof,
    publicSignals
  );
  return { pubKey: publicSignals, calldata };
};
