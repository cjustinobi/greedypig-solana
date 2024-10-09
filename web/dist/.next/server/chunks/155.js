"use strict";
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 7036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ shared_LatestGames)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ../node_modules/next/image.js
var next_image = __webpack_require__(4427);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__(3533);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./assets/img/gameitemsimg.png
/* harmony default export */ const gameitemsimg = ({"src":"/_next/static/media/gameitemsimg.c8c75a59.png","height":115,"width":125,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA70lEQVR4nAVAu0rDUBj+/l7UkpLYaFQQRUFRYpcWUQyITyCIk5vg6gM4+CCOziJOriqCiFjnRDqEXmiztE2hJ6RNk5O/0Pfbu13SFLPlNrjWr9BTR0EUx+wKJsjUodrnBxtLBoTfheOpuPrbxv0+47KS4Oc/Bj0+vKROc0q7GxomkiGWLVwctGHu6IinYDq/eeZXuw11bR1W1cKRNsTJpofTs0Pksww6vnPTBRlQQTWQmS8irH+hlAQob2WwahSZqrc2j8UAoe8hlRJRKFDWE8h8AW5PgPauf+2R3zWjScCcnSNlcQUyl2OdA5L9hjMDODdraYAM6RMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./assets/img/gameitemspeople.png
/* harmony default export */ const gameitemspeople = ({"src":"/_next/static/media/gameitemspeople.cc211656.png","height":13,"width":12,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAqklEQVR42k1PIQ7CQBAsmCJwvAKDw1Xxjrp+AYuAkOb27hZ6t4cEXSwvqkRAggGBgTkuEDaZzGRnJpvN4qja5so0o6gj1xuTZ98hK07b0NVqN4TuNIfm36yAI7EriKUFqo+BRqlZ7jAP2soZvIf5QLvMiH2B5Q1Lpax4sn5NMWRkltrsp2hfiMMLwas2YfK7OV9QH+kWeAKnpfaD9IZ1PVDSxo1XepsnLb03fZdZKcqUWBsAAAAASUVORK5CYII=","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./assets/img/gameitemsclock.png
/* harmony default export */ const gameitemsclock = ({"src":"/_next/static/media/gameitemsclock.acc4e7be.png","height":13,"width":12,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAqklEQVR42jWPQQrCMBBFh4J4hq51p1dw1asULyEootBkkiBN0hN4DZcudalrQQS7VA9Q/4Q28Jj582fCDJlDkxHeTrmRNn6+2ddj0cwx1UnbsGAXLogvcANFMtA9gfhoG3/gxC520I+KfU4Qy75wVyasEFs0daAk7UIJRHxhHJGfk4kh0lznKD5legANLZiSPCSFfAvebMNVFkxG1a+8xQnK+NkaJ4lm02R/3XZpuXx/VZUAAAAASUVORK5CYII=","blurWidth":7,"blurHeight":8});
// EXTERNAL MODULE: ./hooks/useGameProgram.tsx + 2 modules
var useGameProgram = __webpack_require__(4481);
// EXTERNAL MODULE: ./components/shared/FormBtn.tsx
var FormBtn = __webpack_require__(2197);
// EXTERNAL MODULE: ../node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js
var useWallet = __webpack_require__(180);
;// CONCATENATED MODULE: ./lib/utils/helpers.ts
// helpers/gameHelpers.ts
/**
 * Checks if the player has already joined the game.
 * @param players - Array of PublicKeys representing the players who have joined the game.
 * @param publicKey - The current player's public key.
 * @returns A boolean indicating if the player has joined the game.
 */ const hasPlayerJoinedGame = (players, publicKey)=>{
    if (!players || !publicKey) return false;
    return players.some((player)=>player.equals(publicKey));
};

;// CONCATENATED MODULE: ./components/shared/GameCard.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










const GameCard = ({ account  })=>{
    const { publicKey  } = (0,useWallet/* useWallet */.O)();
    const { joinGame  } = (0,useGameProgram/* useGameProgram */.x)();
    const { accountQuery  } = (0,useGameProgram/* useGameProgramAccount */.X)({
        account
    });
    const handleJoinGame = async (gameAccount)=>{
        if (publicKey) {
            const res = await joinGame.mutateAsync({
                gameAccount
            });
            console.log("result from joingame ", res);
        }
    };
    const isLoading = joinGame.status === "pending";
    const hasJoinedGame = hasPlayerJoinedGame(accountQuery.data?.players, publicKey);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full lg:w-[290px] h-[147px] bg-custom-gray8 flex flex-row justify-between rounded-3xl p-4 gap-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    className: "rounded-2xl",
                    src: gameitemsimg,
                    width: 125,
                    height: 115,
                    alt: "gameitemsimg"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-[113px] h-[115px] flex flex-col justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-[113px] h-16 flex flex-col justify-between gap-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-[113px] h-[25px]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "font-WorkSans-SemiBold font-semibold text-xl/[25px]",
                                    href: `/games/${account.toBase58()}`,
                                    children: accountQuery.data?.title
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-[95px] h-[31px] gap-2 flex flex-row",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-[39px] h-[31px] bg-custom-gray7 flex text-custom-gray5 rounded-lg p-2 gap-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: gameitemspeople,
                                                width: 12,
                                                height: 12,
                                                alt: "gameitemsimg"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "w-[7px] h-[15px] font-WorkSans-Medium font-medium text-xs/[15px]",
                                                children: accountQuery.data?.players.length
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-12 h-[31px] bg-custom-gray7 flex text-custom-gray5 rounded-lg p-2 gap-1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: gameitemsclock,
                                                width: 12,
                                                height: 12,
                                                alt: "gameitemsimg"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "w-4 h-[15px] font-WorkSans-Medium font-medium text-xs/[15px]",
                                                children: "2H"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-[113px] h-[34px] bg-[#8621FF] flex justify-center items-center rounded-3xl border px-6 py-2 gap-2.5",
                        children: hasJoinedGame ? /*#__PURE__*/ jsx_runtime_.jsx(FormBtn/* default */.Z, {
                            label: "Joined",
                            className: "font-Coiny-Regular font-normal text-white text-sm/[17.5px]",
                            disabled: true
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(FormBtn/* default */.Z, {
                            label: isLoading ? "Joining..." : "Join",
                            onClick: ()=>handleJoinGame(account),
                            className: "font-Coiny-Regular font-normal text-white text-sm/[17.5px]",
                            disabled: isLoading
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const shared_GameCard = (GameCard);

;// CONCATENATED MODULE: ./components/shared/LatestGames.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const LatestGames = ()=>{
    const { accounts , getProgramAccount  } = (0,useGameProgram/* useGameProgram */.x)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "bg-custom-gray7 flex flex-col w-full rounded-3xl text-white p-6 gap-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-[38px]",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "w-[167px] h-[26px] font-Coiny-Regular font-normal text-2xl/[26.4px]",
                    children: "Latest games"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: accounts.data?.map((account)=>/*#__PURE__*/ jsx_runtime_.jsx(shared_GameCard, {
                        account: account.publicKey
                    }, account.publicKey.toString()))
            })
        ]
    });
};
/* harmony default export */ const shared_LatestGames = (LatestGames);


/***/ }),

/***/ 9626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4626);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/justin/Code/solana/CRUD-dApp/web/components/shared/LatestGames.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;