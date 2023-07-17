import { ethers } from "ethers";
import { writable } from "svelte/store";
import Tazza from "tazzajs";

import { CONTRACT_ADDRESS, ABI, BET, NODE_URL, PRIVATE_KEY } from "../constant";
import { loadingStore } from "./loading";
import { tableStore } from "./table";
import { sleep, calculateResult, randomBool, randomPermutation, resultMessage } from "../utils";


function createGameStore() {
    const { subscribe, update } = writable({
        round: 0,
        result: null,
        myChoice: null,
        opponentChoice: null,
    });

    const provider = new ethers.providers.JsonRpcProvider(NODE_URL);
    const signer = new ethers.Wallet(PRIVATE_KEY, provider);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

    let gameInd, cards, myCard, myCardNumber, myChoice, opponentCard, opponentCardNumber, opponentChoice;
    let mp = new Tazza(1, 4);

    async function startGame() {
        tableStore.reset();
        update((game) => {
            game.result = null;
            game.myChoice = null;
            game.opponentChoice = null;
            return game;
        });
        loadingStore.start(["Generating key", "Sending tx", "Waiting for tx"]);
        mp.generateKey();
        loadingStore.next();
        let tx = await contract.start_game(BET, mp.publicKey, {
            value: BET * 2,
            gasLimit: 21000000,
        });
        loadingStore.next();
        await tx.wait();
        gameInd = await contract.game_per_player(await signer.getAddress());
        update((game) => {
            game.round = 1;
            return game;
        });
        loadingStore.next();
        await sleep(500);
        loadingStore.reset();
        tableStore.createDeck();
    }

    async function round1() {
        tableStore.flipAll();
        await sleep(1000);
        loadingStore.start(["Shuffling deck", "Sending tx", "Waiting for tx"]);
        let [_cards, _proof] = mp.shuffleDeck();
        loadingStore.next();
        cards = _cards;
        let tx = await contract.round1(gameInd, cards);
        loadingStore.next();
        await tx.wait();
        update((game) => {
            game.round = 2;
            return game;
        });
        loadingStore.next();
        await sleep(500);
        loadingStore.reset();
        for (let i = 0; i < 3; i++) {
            let permutation = randomPermutation(4);
            tableStore.swap(permutation[0], permutation[1]);
            await sleep(400);
        }
        while (tableStore.unshuffle()) {
            await sleep(400);
        }
        tableStore.draw(false);
        await sleep(400);
        tableStore.draw(true);
    }

    async function round2() {
        loadingStore.start(["Decrypting your card", "Sending tx", "Waiting for tx", "Revealing opponent's card"]);
        let [_myCard, _proof] = mp.decryptCard(cards[1]);
        myCard = _myCard;
        loadingStore.next();
        let tx = await contract.round2(gameInd);
        loadingStore.next();
        await tx.wait();
        loadingStore.next();
        opponentCardNumber = mp.openCard(cards[0]);
        tableStore.setNumber(0, opponentCardNumber + 1);
        tableStore.flip(0);
        update((game) => {
            game.round = 3;
            return game;
        });
        loadingStore.next();
        await sleep(500);
        loadingStore.reset();
    }

    async function round3(choice) {
        myChoice = choice;
        loadingStore.start(["Sending tx", "Waiting for tx"]);
        let tx = await contract.round3(gameInd, choice);
        loadingStore.next();
        await tx.wait();
        update((game) => {
            game.round = 4;
            game.myChoice = myChoice;
            return game;
        });
        loadingStore.next();
        await sleep(500);
        loadingStore.reset();
    }

    async function round4() {
        loadingStore.start(["Decrypting opponent's card", "Sending tx", "Waiting for tx", "Revealing your card"]);
        let [_opponentCard, _proof] = mp.decryptCard(cards[0]);
        opponentCard = _opponentCard;
        loadingStore.next();
        let tx = await contract.round4(gameInd);
        loadingStore.next();
        await tx.wait();
        loadingStore.next();
        myCardNumber = mp.openCard(myCard);
        update((game) => {
            game.round = 5;
            return game;
        });
        loadingStore.next();
        await sleep(500);
        loadingStore.reset();
        tableStore.setNumber(1, myCardNumber + 1);
        tableStore.flip(1);
    }

    async function round5() {
        loadingStore.start(["Sending tx", "Waiting for tx"]);
        opponentChoice = randomBool();
        let tx = await contract.round5(gameInd, opponentChoice, { gasLimit: 3000000 });
        loadingStore.next();
        await tx.wait();
        loadingStore.next();
        await sleep(500);
        loadingStore.reset();
        let [winner, multiple] = calculateResult(myCardNumber, opponentCardNumber, myChoice, opponentChoice);
        update((game) => {
            game.round = null;
            game.opponentChoice = opponentChoice;
            game.result = resultMessage(winner, multiple, BET);
            return game;
        });

    }

    return {
        subscribe,
        startGame,
        round1,
        round2,
        round3,
        round4,
        round5,
    }
}

export const gameStore = createGameStore();
