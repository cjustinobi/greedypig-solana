/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/greedy_pig.json`.
 */
export type GreedyPig = {
  "address": "2MKHvQoStSV7tx6ywCSgGVoe7mhowfaQxnupbbUiNFmm",
  "metadata": {
    "name": "greedyPig",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "createGame",
      "discriminator": [
        124,
        69,
        75,
        66,
        184,
        220,
        72,
        206
      ],
      "accounts": [
        {
          "name": "gameAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "arg",
                "path": "title"
              },
              {
                "kind": "account",
                "path": "owner"
              }
            ]
          }
        },
        {
          "name": "owner",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "winningScore",
          "type": "u64"
        },
        {
          "name": "stakingAmount",
          "type": "u64"
        },
        {
          "name": "apparatus",
          "type": "string"
        },
        {
          "name": "mode",
          "type": "string"
        },
        {
          "name": "maxPlayers",
          "type": "u8"
        }
      ]
    },
    {
      "name": "getGamesByOwner",
      "discriminator": [
        103,
        53,
        187,
        211,
        115,
        228,
        15,
        105
      ],
      "accounts": [
        {
          "name": "owner",
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [],
      "returns": {
        "vec": {
          "defined": {
            "name": "gameAccountState"
          }
        }
      }
    },
    {
      "name": "joinGame",
      "discriminator": [
        107,
        112,
        18,
        38,
        56,
        173,
        60,
        128
      ],
      "accounts": [
        {
          "name": "gameAccount",
          "writable": true
        },
        {
          "name": "player",
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "passTurn",
      "discriminator": [
        224,
        215,
        57,
        43,
        234,
        162,
        75,
        182
      ],
      "accounts": [
        {
          "name": "gameAccount",
          "writable": true
        },
        {
          "name": "player",
          "signer": true
        }
      ],
      "args": []
    },
    {
      "name": "playTurn",
      "discriminator": [
        116,
        200,
        44,
        67,
        23,
        228,
        209,
        99
      ],
      "accounts": [
        {
          "name": "gameAccount",
          "writable": true
        },
        {
          "name": "player",
          "signer": true
        }
      ],
      "args": [
        {
          "name": "rollResult",
          "type": "u8"
        }
      ]
    },
    {
      "name": "startGame",
      "discriminator": [
        249,
        47,
        252,
        172,
        184,
        162,
        245,
        14
      ],
      "accounts": [
        {
          "name": "gameAccount",
          "writable": true
        },
        {
          "name": "player",
          "signer": true
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "gameAccountState",
      "discriminator": [
        134,
        141,
        26,
        149,
        244,
        232,
        229,
        119
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "gameFull",
      "msg": "The game is already full"
    },
    {
      "code": 6001,
      "name": "playerAlreadyJoined",
      "msg": "Player has already joined this game"
    },
    {
      "code": 6002,
      "name": "invalidApparatus",
      "msg": "Invalid apparatus specified"
    },
    {
      "code": 6003,
      "name": "invalidGameMode",
      "msg": "Invalid game mode specified"
    },
    {
      "code": 6004,
      "name": "gameAlreadyStarted",
      "msg": "Game has already started"
    },
    {
      "code": 6005,
      "name": "notEnoughPlayers",
      "msg": "Not enough players to start the game"
    },
    {
      "code": 6006,
      "name": "gameNotInProgress",
      "msg": "Game is not in progress"
    },
    {
      "code": 6007,
      "name": "notPlayerTurn",
      "msg": "It's not this player's turn"
    },
    {
      "code": 6008,
      "name": "playerNotFound",
      "msg": "Player not found in the game"
    }
  ],
  "types": [
    {
      "name": "gameAccountState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "winningScore",
            "type": "u64"
          },
          {
            "name": "stakingAmount",
            "type": "u64"
          },
          {
            "name": "apparatus",
            "type": "string"
          },
          {
            "name": "mode",
            "type": "string"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "players",
            "type": {
              "vec": "pubkey"
            }
          },
          {
            "name": "maxPlayers",
            "type": "u8"
          },
          {
            "name": "currentPlayerIndex",
            "type": "u8"
          },
          {
            "name": "gameState",
            "type": {
              "defined": {
                "name": "gameState"
              }
            }
          },
          {
            "name": "leaderboard",
            "type": {
              "vec": {
                "defined": {
                  "name": "playerScore"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "gameState",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "waitingForPlayers"
          },
          {
            "name": "inProgress"
          },
          {
            "name": "finished"
          }
        ]
      }
    },
    {
      "name": "playerScore",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "player",
            "type": "pubkey"
          },
          {
            "name": "tempScore",
            "type": "u64"
          },
          {
            "name": "finalScore",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
