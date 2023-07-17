// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

interface ITazza {
    struct Player {
        address addr;
        uint256[2] public_key;
    }

    struct Card {
        uint256 c1_x;
        uint256 c1_y;
        uint256 c2_x;
        uint256 c2_y;
        uint256 flag; // bitmask whether player i decrypt card
    }

    struct Deck {
        address owner;
        uint256 num_players;
        uint256 num_cards;
        Player[] players;
        Card[] cards;
    }

    function verify_public_key(
        uint256[24] calldata _proof,
        uint256[2] calldata _pubSignals
    ) external returns (bool);

    // Create Deck with players and public cards
    // Typically owner is game contract
    function create_deck(
        address owner,
        Player[] memory players,
        uint256 num_cards
    ) external returns (uint256);

    // Shuffle whole deck
    function shuffle_deck(uint256 deck_ind, Card[] memory cards) external;

    function decrypt_card(
        uint256 deck_ind,
        uint256 card_ind,
        uint256 player_index
    ) external;

    function open_card(uint256 deck_ind, uint256 card_ind)
        external
        view
        returns (uint256);

    // Encode card number 'c' with players' public keys
    function encode_card(Player[] memory players, uint256 c)
        external
        pure
        returns (Card memory card);

    // Decode card number
    function decode_card(Player[] memory, Card memory card)
        external
        pure
        returns (uint256 c);
}
