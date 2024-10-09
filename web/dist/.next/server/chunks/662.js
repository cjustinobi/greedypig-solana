"use strict";
exports.id = 662;
exports.ids = [662];
exports.modules = {

/***/ 2197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const FormBtn = ({ label , onClick , type ="button" , className ="" , disabled =false  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        disabled: disabled,
        type: type,
        onClick: onClick,
        className: `inline-block border-4 border-white rounded-full px-6 py-3 font-Coiny-Regular text-lg text-white text-center transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed ${className}`,
        children: label
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormBtn);


/***/ }),

/***/ 4481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* binding */ useGameProgram),
  "X": () => (/* binding */ useGameProgramAccount)
});

// EXTERNAL MODULE: ../node_modules/@coral-xyz/anchor/dist/cjs/index.js
var cjs = __webpack_require__(6883);
// EXTERNAL MODULE: ../node_modules/@solana/web3.js/lib/index.cjs.js
var index_cjs = __webpack_require__(9962);
;// CONCATENATED MODULE: ./target/idl/greedy_pig.json
const greedy_pig_namespaceObject = JSON.parse('{"address":"2MKHvQoStSV7tx6ywCSgGVoe7mhowfaQxnupbbUiNFmm","metadata":{"name":"greedy_pig","version":"0.1.0","spec":"0.1.0","description":"Created with Anchor"},"instructions":[{"name":"create_game","discriminator":[124,69,75,66,184,220,72,206],"accounts":[{"name":"game_account","writable":true,"pda":{"seeds":[{"kind":"arg","path":"title"},{"kind":"account","path":"owner"}]}},{"name":"owner","writable":true,"signer":true},{"name":"system_program","address":"11111111111111111111111111111111"}],"args":[{"name":"title","type":"string"},{"name":"winning_score","type":"u64"},{"name":"staking_amount","type":"u64"},{"name":"apparatus","type":"string"},{"name":"mode","type":"string"},{"name":"max_players","type":"u8"}]},{"name":"get_games_by_owner","discriminator":[103,53,187,211,115,228,15,105],"accounts":[{"name":"owner","signer":true},{"name":"system_program","address":"11111111111111111111111111111111"}],"args":[],"returns":{"vec":{"defined":{"name":"GameAccountState"}}}},{"name":"join_game","discriminator":[107,112,18,38,56,173,60,128],"accounts":[{"name":"game_account","writable":true},{"name":"player","signer":true},{"name":"system_program","address":"11111111111111111111111111111111"}],"args":[]},{"name":"pass_turn","discriminator":[224,215,57,43,234,162,75,182],"accounts":[{"name":"game_account","writable":true},{"name":"player","signer":true}],"args":[]},{"name":"play_turn","discriminator":[116,200,44,67,23,228,209,99],"accounts":[{"name":"game_account","writable":true},{"name":"player","signer":true}],"args":[{"name":"roll_result","type":"u8"}]},{"name":"start_game","discriminator":[249,47,252,172,184,162,245,14],"accounts":[{"name":"game_account","writable":true},{"name":"player","signer":true}],"args":[]}],"accounts":[{"name":"GameAccountState","discriminator":[134,141,26,149,244,232,229,119]}],"errors":[{"code":6000,"name":"GameFull","msg":"The game is already full"},{"code":6001,"name":"PlayerAlreadyJoined","msg":"Player has already joined this game"},{"code":6002,"name":"InvalidApparatus","msg":"Invalid apparatus specified"},{"code":6003,"name":"InvalidGameMode","msg":"Invalid game mode specified"},{"code":6004,"name":"GameAlreadyStarted","msg":"Game has already started"},{"code":6005,"name":"NotEnoughPlayers","msg":"Not enough players to start the game"},{"code":6006,"name":"GameNotInProgress","msg":"Game is not in progress"},{"code":6007,"name":"NotPlayerTurn","msg":"It\'s not this player\'s turn"},{"code":6008,"name":"PlayerNotFound","msg":"Player not found in the game"}],"types":[{"name":"GameAccountState","type":{"kind":"struct","fields":[{"name":"title","type":"string"},{"name":"winning_score","type":"u64"},{"name":"staking_amount","type":"u64"},{"name":"apparatus","type":"string"},{"name":"mode","type":"string"},{"name":"owner","type":"pubkey"},{"name":"players","type":{"vec":"pubkey"}},{"name":"max_players","type":"u8"},{"name":"current_player_index","type":"u8"},{"name":"game_state","type":{"defined":{"name":"GameState"}}},{"name":"leaderboard","type":{"vec":{"defined":{"name":"PlayerScore"}}}}]}},{"name":"GameState","type":{"kind":"enum","variants":[{"name":"WaitingForPlayers"},{"name":"InProgress"},{"name":"Finished"}]}},{"name":"PlayerScore","type":{"kind":"struct","fields":[{"name":"player","type":"pubkey"},{"name":"temp_score","type":"u64"},{"name":"final_score","type":"u64"}]}}]}');
;// CONCATENATED MODULE: ./lib/idl/greedypigIDL.ts
// Here we export some useful types and functions for interacting with the Anchor program.



// Re-export the generated IDL and type

// After updating your program ID (e.g. after running `anchor keys sync`) update the value below.
const GREEDY_PIG_PROGRAM_ID = new index_cjs.PublicKey("2MKHvQoStSV7tx6ywCSgGVoe7mhowfaQxnupbbUiNFmm");
// This is a helper function to get the Counter Anchor program.
function getGreedyPiglProgram(provider) {
    return new cjs.Program(greedy_pig_namespaceObject, provider);
}
// This is a helper function to get the program ID for the Journal program depending on the cluster.
function getGreedyPigProgramId(cluster) {
    switch(cluster){
        case "devnet":
        case "testnet":
        case "mainnet-beta":
        default:
            return GREEDY_PIG_PROGRAM_ID;
    }
}

// EXTERNAL MODULE: ../node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js
var useWallet = __webpack_require__(180);
// EXTERNAL MODULE: ../node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js
var useConnection = __webpack_require__(1158);
// EXTERNAL MODULE: ../node_modules/@tanstack/react-query/build/modern/useQuery.js + 6 modules
var useQuery = __webpack_require__(8193);
// EXTERNAL MODULE: ../node_modules/@tanstack/react-query/build/modern/useMutation.js + 1 modules
var useMutation = __webpack_require__(3618);
// EXTERNAL MODULE: ../node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(1425);
// EXTERNAL MODULE: ./components/cluster/cluster-data-access.tsx
var cluster_data_access = __webpack_require__(1410);
// EXTERNAL MODULE: ./components/solana/solana-provider.tsx
var solana_provider = __webpack_require__(3221);
// EXTERNAL MODULE: ./components/ui/ui-layout.tsx + 1 modules
var ui_layout = __webpack_require__(6247);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./hooks/useGameProgram.tsx
/* __next_internal_client_entry_do_not_use__ useGameProgram,useGameProgramAccount auto */ 



// import { useCluster, defaultClusters } from './useCluster';





function useGameProgram() {
    const { publicKey  } = (0,useWallet/* useWallet */.O)();
    const { connection  } = (0,useConnection/* useConnection */.R)();
    const { cluster  } = (0,cluster_data_access.useCluster)();
    const transactionToast = (0,ui_layout.useTransactionToast)();
    const provider = (0,solana_provider.useAnchorProvider)();
    const programId = (0,react_.useMemo)(()=>getGreedyPigProgramId(cluster.network), [
        cluster
    ]);
    const program = getGreedyPiglProgram(provider);
    const accounts = (0,useQuery/* useQuery */.a)({
        queryKey: [
            "greedy-pig",
            "all",
            {
                cluster
            }
        ],
        queryFn: ()=>program.account.gameAccountState.all()
    });
    console.log("account ", accounts);
    const getProgramAccount = (0,useQuery/* useQuery */.a)({
        queryKey: [
            "get-program-account",
            {
                cluster
            }
        ],
        queryFn: ()=>connection.getParsedAccountInfo(programId)
    });
    const createGame = (0,useMutation/* useMutation */.D)({
        mutationKey: [
            "greedy-pig",
            "create",
            {
                cluster
            }
        ],
        mutationFn: async ({ title , winning_score , staking_amount , apparatus , mode  })=>{
            const bnWinningScore = winning_score !== undefined ? new cjs.BN(winning_score) : null;
            const bnStakingAmount = staking_amount !== undefined ? new cjs.BN(staking_amount) : null;
            return program.methods.createGame(title, bnWinningScore, bnStakingAmount, apparatus, mode, bnStakingAmount).rpc();
        },
        onSuccess: (signature)=>{
            transactionToast(signature);
            accounts.refetch();
        },
        onError: (error)=>{
            dist/* default.error */.ZP.error(`Failed to create journal entry: ${error.message}`);
        }
    });
    const joinGame = (0,useMutation/* useMutation */.D)({
        mutationKey: [
            "greedy-pig",
            "join-game",
            {
                cluster
            }
        ],
        mutationFn: async ({ gameAccount  })=>{
            // const bnStakingAmount =
            //   staking_amount !== undefined ? new BN(staking_amount) : null
            return program.methods.joinGame().accounts({
                gameAccount,
                player: provider.wallet.publicKey
            }).rpc();
        },
        onSuccess: (signature)=>{
            transactionToast(signature);
            accounts.refetch();
        },
        onError: (error)=>{
            dist/* default.error */.ZP.error(`Failed to join game: ${error.message}`);
        }
    });
    const startGame = (0,useMutation/* useMutation */.D)({
        mutationKey: [
            "greedy-pig",
            "start-game",
            {
                cluster
            }
        ],
        mutationFn: async ({ gameAccount  })=>{
            return program.methods.startGame().accounts({
                gameAccount,
                player: provider.wallet.publicKey
            }).rpc();
        },
        onSuccess: (signature)=>{
            transactionToast(signature);
            accounts.refetch();
        },
        onError: (error)=>{
            dist/* default.error */.ZP.error(`Failed to join game: ${error.message}`);
        }
    });
    const getGamsByOwner = (0,useQuery/* useQuery */.a)({
        queryKey: [
            "journals",
            "byOwner",
            publicKey?.toBase58(),
            {
                cluster
            }
        ],
        queryFn: async ()=>{
            if (!publicKey) throw new Error("Wallet not connected");
            const allJournals = await program.account.gameAccountState.all();
            return allJournals.filter((journal)=>journal.account.owner.equals(publicKey));
        },
        enabled: !!publicKey
    });
    return {
        program,
        programId,
        accounts,
        getProgramAccount,
        createGame,
        getGamsByOwner,
        joinGame,
        startGame
    };
}
function useGameProgramAccount({ account  }) {
    const { cluster  } = (0,cluster_data_access.useCluster)();
    const transactionToast = (0,ui_layout.useTransactionToast)();
    const { program , accounts  } = useGameProgram();
    const accountQuery = (0,useQuery/* useQuery */.a)({
        queryKey: [
            "greedy-pig",
            "fetch-account-query",
            {
                cluster,
                account
            }
        ],
        queryFn: ()=>program.account.gameAccountState.fetch(account)
    });
    // const updateEntry = useMutation<string, Error, CreateEntryArgs>({
    //   mutationKey: ['journalEntry', 'update', { cluster }],
    //   mutationFn: async ({ title, message, owner }) => {
    //     return program.methods.update(title, message).rpc();
    //   },
    //   onSuccess: (signature) => {
    //     transactionToast(signature);
    //     accounts.refetch();
    //   },
    //   onError: (error) => {
    //     toast.error(`Failed to update journal entry: ${error.message}`);
    //   },
    // });
    // const deleteEntry = useMutation({
    //   mutationKey: ['journal', 'deleteEntry', { cluster, account }],
    //   mutationFn: (title: string) =>
    //     program.methods.deleteJournalEntry(title).rpc(),
    //   onSuccess: (tx) => {
    //     transactionToast(tx);
    //     return accounts.refetch();
    //   },
    // });
    return {
        accountQuery
    };
}


/***/ })

};
;