export const BET = 1;

export const NODE_URL = "https://rpc.chiadochain.net";

export const ACCOUNT_ADDRESS = "0x546d5d61F846051222d744bb78f5487beaF17af1"
export const PRIVATE_KEY = "bd1bbb32c79cb51660b3511343e75a9536a9bd971645b152fe2d71e55e5e9127"

export const CONTRACT_ADDRESS = "0x3e080d09FC2bD63915d96e451fc52c11a861338d";
export const ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_TAZZA",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "game_ind",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "player",
                "type": "address"
            }
        ],
        "name": "Draw",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "game_ind",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Lose",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "game_ind",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "round",
                "type": "uint256"
            }
        ],
        "name": "Round",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "game_ind",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "bet",
                "type": "uint256"
            }
        ],
        "name": "StartGame",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "game_ind",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "Win",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "TAZZA",
        "outputs": [
            {
                "internalType": "contract ITazza",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "game_count",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "game_per_player",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "game_states",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "round",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deck_ind",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "choice",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "games",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "bet",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256[2]",
                        "name": "public_key",
                        "type": "uint256[2]"
                    }
                ],
                "internalType": "struct ITazza.Player",
                "name": "player",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "game_ind",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "c1_x",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "c1_y",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "c2_x",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "c2_y",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "flag",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct ITazza.Card[]",
                "name": "cards",
                "type": "tuple[]"
            }
        ],
        "name": "round1",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "game_ind",
                "type": "uint256"
            }
        ],
        "name": "round2",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "game_ind",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "choice",
                "type": "bool"
            }
        ],
        "name": "round3",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "game_ind",
                "type": "uint256"
            }
        ],
        "name": "round4",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "game_ind",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "opponent_choice",
                "type": "bool"
            }
        ],
        "name": "round5",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "bet",
                "type": "uint256"
            },
            {
                "internalType": "uint256[2]",
                "name": "public_key",
                "type": "uint256[2]"
            }
        ],
        "name": "start_game",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
];
