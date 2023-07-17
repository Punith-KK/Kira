# kira

An infrastructure for on-chain card game.

## Circom

### Installation

```shell
# snarkjs
$ npm install -g snarkjs@latest

# circom
$ git clone https://github.com/iden3/circom.git
$ cargo build --release
$ cargo install --path circom
```

### Setup

Universal Trusted Setup: Single ptau file

```shell
circuits $ snarkjs powersoftau new bn128 17 pot17_0000.ptau -v # generate pot17_0000.ptau
circuits $ snarkjs powersoftau contribute pot17_0000.ptau pot17_0001.ptau --name="First contribution" -v -e="some random text" # generate pot17_0001.ptau
circuits $ snarkjs powersoftau prepare phase2 pot17_0001.ptau pot17_final.ptau -v # generate pot17_final.ptau
circuits $ snarkjs powersoftau verify pot17_final.ptau
```

### Compile

```shell
circuits/<circuit> $ circom circuit.circom --r1cs --wasm --sym # generate (circuit.r1cs, circuit.wasm, circuit.sym)
circuits/<circuit> $ snarkjs plonk setup circuit.r1cs ../pot17_final.ptau circuit_final.zkey # generate circuit_final.zkey
circuits/<circuit> $ snarkjs zkey export verificationkey circuit_final.zkey verification_key.json # generate verification_key.json
circuits/<circuit> $ snarkjs zkey export solidityverifier circuit_final.zkey verifier.sol # generate verifier.sol
```

## Hardhat

### Installation

```shell
hardhat $ npm install
```

### Compile

```shell
hardhat $ npx hardhat compile
```

### Test

```shell
hardhat $ npx hardhat test
```

## App

```shell
app $ npm install
app $ npm run dev
```
