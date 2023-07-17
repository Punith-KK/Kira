import hardhat from "hardhat";
import chai from "chai";
import Tazza from "tazzajs";

const ethers = hardhat.ethers;
const expect = chai.expect;

describe("Indian Poker", function () {
    it("Demo", async function () {
        const player = await ethers.getSigner();

        const KEY_GENERATION_VERIFIER = await (await ethers.getContractFactory("KeyGenerationVerifier")).deploy();
        const CREATE_SHUFFLED_DECK_VERIFIER = await (await ethers.getContractFactory("CreateShuffledDeckVerifier")).deploy();
        const TAZZA = await (await ethers.getContractFactory("Tazza")).deploy(KEY_GENERATION_VERIFIER.address, CREATE_SHUFFLED_DECK_VERIFIER.address);
        const INDIAN_POKER_SOLO = await (await ethers.getContractFactory("IndianPokerSolo")).deploy(TAZZA.address);

        // Fund contract
        await player.sendTransaction({
            to: INDIAN_POKER_SOLO.address,
            value: ethers.utils.parseEther('1', 'ether'),
            gasLimit: 10000000,
        });


        const mp = new Tazza(1, 4);

        async function expectRound(n) {
            const game_state = await INDIAN_POKER_SOLO.game_states(1);
            expect(game_state[0]).equal(n);
        }

        async function expectBalance(address, b) {
            const balance = await ethers.provider.getBalance(address);
            expect(balance).equal(b);
        }

        const balanceBefore = await ethers.provider.getBalance(player.address);
        const bet = 1;

        let proof;

        proof = await mp.generateKey();
        const publicKey = mp.publicKey;
        console.log(proof);
        await INDIAN_POKER_SOLO.start_game(proof, publicKey, { value: bet * 2 });
        // await expectRound(1);
        // expectBalance(player.address, balanceBefore - bet * 2);
        // expectBalance(INDIAN_POKER_SOLO.address, bet * 2);

        // let [cards, _proof] = mp.shuffleDeck();
        // await INDIAN_POKER_SOLO.round1(1, cards);
        // await expectRound(2);

        // await INDIAN_POKER_SOLO.round2(1);
        // await expectRound(3);

        // await INDIAN_POKER_SOLO.round3(1, true);
        // await expectRound(4);

        // await INDIAN_POKER_SOLO.round4(1);
        // await expectRound(5);

        // await INDIAN_POKER_SOLO.round5(1, true);
        // await expectRound(6);
    })
});
