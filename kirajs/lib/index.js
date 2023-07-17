import { randomPermutation, randomNumber } from "./utils.js";

import { encode } from "./encode/index.js";
import { addKey } from "./add_key/index.js";
import { generatePubkeyWithProof } from "./key_generation/index.js";
import { createShuffledDeckWithProof } from "./create_shuffled_deck/index.js";
import { shuffleDeckWithProof } from "./shuffle_deck/index.js";

// TODO: order of group
const ORDER = 10000000;

export default class Tazza {
  constructor(numPlayers, numCards) {
    this.numPlayers = numPlayers;
    this.numCards = numCards;
    this.publicKeys = [];
    this.h = ["0", "1"]; // before init
  }

  async initEncodedCards() {
    const cards = [];
    for (let i = 0; i < this.numCards; i++) {
      const encodedCard = await encode(i);
      cards.push(encodedCard);
    }
    this.encodedCards = cards;
  }

  // TODO: ensure each player's pubkey is only added once
  async setPublicKey(playerIndex, publicKey) {
    this.publicKeys[playerIndex] = publicKey;
    this.h = await addKey(this.h, publicKey);
  }

  async generateKey() {
    this.privateKey = randomNumber(ORDER);
    const { pubKey, calldata } = await generatePubkeyWithProof(this.privateKey);
    this.publicKey = pubKey;
    return calldata;
  }

  // XXX: if deckBefore is null, it returns proof of createShuffledDeck
  async shuffleDeck(deckBefore) {
    let permutation = randomPermutation(this.numCards);
    let randomness = [...Array(this.numCards)].map((_) => randomNumber(ORDER));

    if (!deckBefore) {
      const { deck, calldata } = await createShuffledDeckWithProof(
        this.numCards,
        permutation,
        randomness,
        this.h
      );
      return { deck, calldata };
    }
    const { deck, calldata } = await shuffleDeckWithProof(
      this.numCards,
      deckBefore,
      permutation,
      randomness,
      h
    );
    return { deck, calldata };
  }

  getCard(deck, i) {
    return [
      [deck[i], deck[i + this.numCards]],
      [deck[i + 2 * this.numCards], deck[i + 3 * this.numCards]],
    ];
  }

  // TODO: change interface
  decryptCard(cardBefore) {
    // let cardAfter = unmask(cardBefore, this.privateKey);
    // let proof = proveDecryptCard(cardBefore, cardAfter, this.privateKey);
    // return [cardAfter, proof];
  }

  openCard(card) {
    return decode(card, this.publicKeys);
  }
}
