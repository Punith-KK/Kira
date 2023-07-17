// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./ITazza.sol";
import "./key_generation/verifier.sol";
import "./create_shuffled_deck/verifier.sol";

contract Tazza is ITazza {
    KeyGenerationVerifier public keyGenerationVerifier;
    CreateShuffledDeckVerifier public createShuffledDeckVerifier;

    uint256 public deck_count;
    mapping(uint256 => Deck) public decks;

    modifier onlyOwner(uint256 deck_ind) {
        require(decks[deck_ind].owner == msg.sender);
        _;
    }

    constructor(
        KeyGenerationVerifier _keyGenerationVerifier,
        CreateShuffledDeckVerifier _createShuffledDeckVerifier
    ) {
        keyGenerationVerifier = _keyGenerationVerifier;
        createShuffledDeckVerifier = _createShuffledDeckVerifier;
        deck_count = 0;
    }

    function verify_public_key(
        uint256[24] calldata proof,
        uint256[2] calldata pubSignals
    ) public view override returns (bool) {
        return keyGenerationVerifier.verifyProof(proof, pubSignals);
    }

    // Create Deck with players and public cards
    // Typically owner is game contract
    // Assume that each player has verified that he has private key with corresponding public key
    function create_deck(
        address owner,
        Player[] memory players,
        uint256 num_cards
    ) external returns (uint256) {
        require(players.length <= 256);
        uint256 deck_ind = deck_count;
        deck_count++;
        decks[deck_ind].owner = owner;
        decks[deck_ind].num_players = players.length;
        for (uint256 i = 0; i < players.length; i++) {
            decks[deck_ind].players.push(players[i]);
        }
        decks[deck_ind].num_cards = num_cards;
        for (uint256 i = 0; i < num_cards; i++) {
            decks[deck_ind].cards.push(encode_card(players, i));
        }
        return deck_ind;
    }

    // TODO: check public key
    function create_shuffled_deck(
        uint256 deck_ind,
        uint256[24] calldata proof,
        uint256[18] calldata pubSignals
    ) external onlyOwner(deck_ind) returns (bool) {
        return createShuffledDeckVerifier.verifyProof(proof, pubSignals);
    }

    // Shuffle whole deck
    // TODO: verify valid shuffle
    function shuffle_deck(uint256 deck_ind, Card[] memory cards)
        external
        onlyOwner(deck_ind)
    {
        require(decks[deck_ind].num_cards == cards.length);
        for (uint256 i = 0; i < cards.length; i++) {
            decks[deck_ind].cards[i] = cards[i];
        }
    }

    // A player decrypt card with his private key
    // TODO: change card state as decrypted
    function decrypt_card(
        uint256 deck_ind,
        uint256 card_ind,
        uint256 player_index
    ) external onlyOwner(deck_ind) {
        require(
            ((decks[deck_ind].cards[card_ind].flag >> player_index) & 1) == 0
        );
        decks[deck_ind].cards[card_ind].flag |= (1 << player_index);
    }

    // Open card
    function open_card(uint256 deck_ind, uint256 card_ind)
        external
        view
        returns (uint256)
    {
        uint256 flag = decks[deck_ind].cards[card_ind].flag;
        for (uint256 i = 0; i < decks[deck_ind].num_players; i++) {
            require(((flag >> i) & 1) == 1);
        }
        return
            decode_card(
                decks[deck_ind].players,
                decks[deck_ind].cards[card_ind]
            );
    }

    // Encode card number 'c' with players' public keys
    // TODO: implement encoding
    function encode_card(
        Player[] memory, /*players*/
        uint256 c
    ) public pure returns (Card memory card) {
        card.c1_x = c;
    }

    // Decode card number
    // TODO: implement decoding
    function decode_card(Player[] memory, Card memory card)
        public
        pure
        returns (uint256 c)
    {
        return card.c1_x;
    }
}
