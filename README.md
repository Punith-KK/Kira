
![start](https://github.com/Punith-KK/Kira/assets/118302022/34ffeaef-bbad-4f10-9d95-4ea32f380044)

# Kira - An infrastructure for on-chain card game.

## "Kira: Unleash the Power of On-Chain Card Games" encapsulates the essence of the project in a concise tagline. It highlights Kira's unique ability to harness the potential of on-chain card games, where gameplay and interactions occur directly on the blockchain without the need for centralized servers. By leveraging the power of zero-knowledge proofs and the Gnosis chain, Kira empowers developers and players to experience the benefits of decentralized gaming. It signifies that Kira opens up a new realm of possibilities, allowing users to fully immerse themselves in secure, transparent, and dynamic card game experiences directly on the blockchain.

## Video
https://github.com/Punith-KK/Kira/assets/118302022/d693bd83-b73e-4104-bac7-6774dc0c5c98





## Output 

![5](https://github.com/Punith-KK/Kira/assets/118302022/4e5c3e73-a9ba-4238-bed9-631eb9a33484)
![7](https://github.com/Punith-KK/Kira/assets/118302022/57186fc2-7f29-4a80-9872-dbdea9bb531b)
![8](https://github.com/Punith-KK/Kira/assets/118302022/d08a2948-d2a4-4d31-8a68-34c7957c6fa2)
![9](https://github.com/Punith-KK/Kira/assets/118302022/3befad17-78c3-49f4-9979-62fd67bc55e2)
![10](https://github.com/Punith-KK/Kira/assets/118302022/480064ee-ee8b-40c0-a31d-680ec1b2c640)

![11](https://github.com/Punith-KK/Kira/assets/118302022/78db4b91-5d25-4cbf-8b4b-754d7a8725e6)
![12](https://github.com/Punith-KK/Kira/assets/118302022/7770b736-936a-4ae1-9e75-e155e9ed86c2)

# Problem it Solves
### Kira is a groundbreaking solution that addresses the challenges associated with developing fully on-chain card games using zero-knowledge proofs (ZK) on the Gnosis chain. While numerous Web3 games tokenize assets on the blockchain, most rely on centralized servers for gameplay. Kira fills the void left by Dark Forest, an experimental ZK-based on-chain game, by providing an abstract software development kit (SDK) tailored specifically for card games.

### Throughout development, we encountered the significant hurdle of making ZK tools more accessible to developers and users unfamiliar with zero-knowledge proofs. To overcome this obstacle, our focus was on creating an SDK that simplifies the implementation of ZK-based card games. Leveraging circom and snarkjs, we designed Kira's circuits for critical card actions such as deck shuffling, card drawing, and card opening. These tools empower game developers to effortlessly generate Kira contracts and the Kira JS SDK, streamlining the integration of ZK-based card games.

### One notable exception to this trend is Dark Forest, an experimental ZK-based game on the Gnosis chain that operates entirely on the blockchain without relying on centralized servers. Dark Forest showcased the potential of fully on-chain games, leveraging the security and transparency of the blockchain. However, since Dark Forest's release, there has been a lack of fully on-chain games that fully embrace this decentralized approach.

### To address the challenge of translating traditional game logic into a ZK-compatible format, Kira leverages the power of circom and snarkjs. These tools facilitate the creation of circuits for card actions, such as shuffling decks and drawing cards. The use of these tools streamlines the translation of game logic into a format that can be verified on-chain, ensuring the integrity and fairness of the gameplay experience.

### Furthermore, Kira leverages the features of the Gnosis chain to revolutionize the gaming industry. It benefits from low-cost on-chain verification, minimizing transaction fees and improving the overall affordability of gameplay. 



## About our Project
![6](https://github.com/Punith-KK/Kira/assets/118302022/afa336c9-cc38-4b14-aa00-1ef9f5c66b88)
![1](https://github.com/Punith-KK/Kira/assets/118302022/4b945cd8-8db3-40d5-a89d-ce81381dbe98)
![2](https://github.com/Punith-KK/Kira/assets/118302022/b8c04255-2b70-436f-b4b2-dc25a95df2cf)
![3](https://github.com/Punith-KK/Kira/assets/118302022/d9893028-9014-42ca-8006-6984b10686bc)
![4](https://github.com/Punith-KK/Kira/assets/118302022/b25394f7-da13-43f3-bfe4-7e53e1457399)



# Challenges We Faced

####  During the development of Kira, we encountered several challenges that required innovative solutions. One of the primary hurdles we faced was making zero-knowledge proofs more accessible to developers and users who may be unfamiliar with this technology. We tackled this challenge by focusing on creating a user-friendly SDK that simplifies the implementation of ZK-based card games. Through careful design and documentation, we aimed to lower the barrier to entry for developers interested in creating fully on-chain games.

#### Another challenge we faced was translating traditional game logic into a format compatible with zero-knowledge proofs. We found that the complexity of traditional game logic often posed difficulties when trying to incorporate it into ZK-based systems. However, through meticulous analysis and iterative development, we successfully devised methods to adapt game logic into a ZK-compatible format suitable for card games.

#### Additionally, we encountered computational challenges when scaling the shuffling circuit using circom and snarkjs. As the number of cards increased, the library size and computational complexity grew linearly, impacting the performance of the game. Although we were unable to resolve this issue during the hackathon, we explored potential solutions such as utilizing shuffle-specific zero-knowledge proof methods optimized for shuffling or parallelizing the shuffling process to enhance efficiency.

#### By addressing these challenges, Kira aims to provide developers with the necessary tools and infrastructure to create fully on-chain card games using zero-knowledge proofs. The project strives to drive the adoption of decentralized gaming experiences on the Gnosis chain, revolutionizing the gaming industry and enabling players to engage in secure, transparent, and immersive gameplay.



## It was Built during Flow Hackathon Season-2
![flow](https://github.com/Punith-KK/Kira/assets/118302022/26d55eb3-fdc5-413e-be23-619f6235e668)
![flow2](https://github.com/Punith-KK/Kira/assets/118302022/8e3641f0-f709-4262-b543-e910c1ebbcb8)


## Our Team
![team](https://github.com/Punith-KK/Kira/assets/118302022/9cf59815-942c-467c-b218-1f421d25d4bb)



# Kira
### [Kira](https://github.com/Punith-KK/Kira) is an innovative solution for developing fully on-chain card games using zero-knowledge proofs on the Gnosis chain.

## Documentation Links

### [Snarkjs Documentation](https://github.com/iden3/snarkjs) - Official documentation for Snarkjs, a JavaScript library for zkSNARK proofs.

### [Circom Documentation](https://github.com/iden3/circom) - Official documentation for Circom, a tool for creating circuits for zkSNARK proofs.

### [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Official documentation for TypeScript, a typed superset of JavaScript.

### [Svelte Documentation](https://svelte.dev/docs) - Official documentation for Svelte, a reactive JavaScript framework for building user interfaces.

### [Gnosis Chain Documentation](https://docs.gnosis.io/chain/) - Official documentation for the Gnosis chain, providing information about its features and functionality.


# Snarkjs
## [Snarkjs](https://github.com/iden3/snarkjs) is a JavaScript library that enables the generation and verification of zkSNARK proofs. It offers powerful tools and APIs for working with zero-knowledge proofs in your project. Visit the Snarkjs documentation to learn more about its features, usage, and integration with your application.

# Circom
## [Circom](https://github.com/iden3/circom) is a powerful tool for creating circuits that can be used to generate zkSNARK proofs. With Circom, you can define the logic and constraints of your circuits in a high-level language, and then compile them into a format compatible with zero-knowledge proofs. Refer to the Circom documentation to understand how to create circuits for your specific use case.

# TypeScript
## [TypeScript](https://www.typescriptlang.org/docs/) is a typed superset of JavaScript that provides enhanced developer tooling and type checking. It allows you to write safer and more maintainable code, providing compile-time error checking and improved code readability. Check out the TypeScript documentation to learn how to leverage its features in your project.

# Svelte
## [Svelte](https://svelte.dev/docs) is a reactive JavaScript framework for building user interfaces. It offers a simple yet powerful approach to component-based development, enabling efficient rendering and seamless state management. The Svelte documentation provides detailed guidance on how to use Svelte components to build rich and interactive user interfaces.

# Gnosis Chain
## [Gnosis Chain](https://docs.gnosis.io/chain/) is a blockchain platform that offers powerful features for decentralized applications. It provides the infrastructure and tools necessary to build secure, scalable, and transparent applications. Visit the Gnosis Chain documentation to explore its features, such as on-chain verification and on-chain randomness, and understand how they can be integrated into your project.






# Installation and Setup
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


# Thank You
![thank](https://github.com/Punith-KK/Kira/assets/118302022/30eaf34a-c9c2-4f38-b21f-4a2c2b3a1f84)





















