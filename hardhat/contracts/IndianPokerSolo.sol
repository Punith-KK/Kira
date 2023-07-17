// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "./ITazza.sol";

// 게임마다 bet * 2 의 판돈으로 시작
//
// <승부표>           | Call  | Die without 4 | Die with 4
// Call             | x2    | x1            | x2
// Die without 4    | x1    | 0             | x2
// Die with 4       | x2    | x2            | -
contract IndianPokerSolo {
    uint256 constant bet = 1;

    struct Game {
        uint256 bet;
        ITazza.Player player;
    }

    struct GameState {
        uint256 round;
        uint256 deck_ind;
        bool choice;
    }

    event StartGame(uint256 game_ind, address player, uint256 bet);
    event Round(uint256 game_ind, uint256 round);
    event Win(uint256 game_ind, address player, uint256 amount);
    event Lose(uint256 game_ind, address player, uint256 amount);
    event Draw(uint256 game_ind, address player);

    ITazza public TAZZA;

    uint256 public game_count;
    mapping(uint256 => Game) public games;
    mapping(uint256 => GameState) public game_states;
    mapping(address => uint256) public game_per_player;

    modifier onlyRound(uint256 game_ind, uint256 round) {
        require(game_states[game_ind].round == round);
        _;
        game_states[game_ind].round = round + 1;
        emit Round(game_ind, round + 1);
    }

    modifier onlyPlayer(uint256 game_ind) {
        require(games[game_ind].player.addr == msg.sender);
        _;
    }

    constructor(address _TAZZA) {
        TAZZA = ITazza(_TAZZA);
        game_count = 0;
    }

    function start_game(
        uint256[24] calldata proof,
        uint256[2] calldata public_key
    ) external payable {
        require(msg.value == 2 * bet);
        require(TAZZA.verify_public_key(proof, public_key));
        game_count++;
        uint256 game_ind = game_count;
        games[game_ind].bet = bet;
        games[game_ind].player.addr = msg.sender;
        games[game_ind].player.public_key = public_key;
        game_per_player[msg.sender] = game_ind;
        emit StartGame(game_ind, msg.sender, bet);
        game_states[game_ind].round = 1;
    }

    // Player A create and shuffle deck
    function round1(
        uint256 game_ind,
        ITazza.Card[] calldata cards
    ) external onlyRound(game_ind, 1) onlyPlayer(game_ind) {
        ITazza.Player[] memory players = new ITazza.Player[](1);
        players[0].addr = games[game_ind].player.addr;
        players[0].public_key = games[game_ind].player.public_key;
        uint256 deck_ind = TAZZA.create_deck(address(this), players, 4);
        TAZZA.shuffle_deck(deck_ind, cards);
        game_states[game_ind].deck_ind = deck_ind;
    }

    // Player A decrypt the first card
    // Actually this is unneccessary round for solo game
    function round2(
        uint256 game_ind
    ) external onlyRound(game_ind, 2) onlyPlayer(game_ind) {
        uint256 deck_ind = game_states[game_ind].deck_ind;
        TAZZA.decrypt_card(deck_ind, 0, 0);
    }

    // Player A call or die
    function round3(
        uint256 game_ind,
        bool choice
    ) external onlyRound(game_ind, 3) onlyPlayer(game_ind) {
        game_states[game_ind].choice = choice;
    }

    // Player A decrypt the second card
    function round4(
        uint256 game_ind
    ) external onlyRound(game_ind, 4) onlyPlayer(game_ind) {
        uint256 deck_ind = game_states[game_ind].deck_ind;
        TAZZA.decrypt_card(deck_ind, 1, 0);
    }

    // Settle
    function round5(
        uint256 game_ind,
        bool opponent_choice
    ) external onlyRound(game_ind, 5) {
        uint256 deck_ind = game_states[game_ind].deck_ind;
        uint256 card_B = TAZZA.open_card(deck_ind, 0);
        uint256 card_A = TAZZA.open_card(deck_ind, 1);
        bool choice_A = game_states[game_ind].choice;
        bool choice_B = opponent_choice;

        (uint256 winner, uint256 multiple) = result(
            choice_A,
            choice_B,
            card_A,
            card_B
        );

        address player_A = games[game_ind].player.addr;
        address player_B = address(this);
        settle(player_A, player_B, winner, multiple);

        if (winner == 0) {
            emit Win(game_ind, player_A, bet * multiple);
            emit Lose(game_ind, player_B, bet * multiple);
        } else if (winner == 1) {
            emit Win(game_ind, player_B, bet * multiple);
            emit Lose(game_ind, player_A, bet * multiple);
        } else {
            emit Draw(game_ind, player_A);
            emit Draw(game_ind, player_B);
        }
    }

    function result(
        bool choice_A,
        bool choice_B,
        uint256 card_A,
        uint256 card_B
    ) internal pure returns (uint256 winner, uint256 multiple) {
        if (choice_A && choice_B) {
            multiple = 2;
            if (card_A > card_B) {
                winner = 0;
            } else {
                winner = 1;
            }
        } else if (choice_A && !choice_B) {
            winner = 0;
            if (card_B == 3) {
                multiple = 2;
            } else {
                multiple = 1;
            }
        } else if (!choice_A && choice_B) {
            winner = 1;
            if (card_A == 3) {
                multiple = 2;
            } else {
                multiple = 1;
            }
        } else {
            if (card_A == 3) {
                winner = 1;
                multiple = 2;
            } else if (card_B == 3) {
                winner = 0;
                multiple = 2;
            } else {
                winner = 2;
                multiple = 0;
            }
        }
    }

    function settle(
        address player_A,
        address player_B,
        uint256 winner,
        uint256 multiple
    ) internal {
        uint256 reward_A;
        uint256 reward_B;
        if (winner == 0) {
            reward_A = (2 + multiple) * bet;
            reward_B = (2 - multiple) * bet;
        } else if (winner == 1) {
            reward_A = (2 - multiple) * bet;
            reward_B = (2 + multiple) * bet;
        } else {
            reward_A = 2 * bet;
            reward_B = 2 * bet;
        }
        if (reward_A != 0) {
            require(payable(player_A).send(reward_A));
        }
        if (reward_B != 0) {
            require(payable(player_B).send(reward_B));
        }
    }

    receive() external payable {}
}
