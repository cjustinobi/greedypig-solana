exports.id = 981;
exports.ids = [981];
exports.modules = {

/***/ 9426:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6441, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 153, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2094, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 746, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8375, 23))

/***/ }),

/***/ 7374:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1460));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6247));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1410));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3221))

/***/ }),

/***/ 1460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReactQueryProvider": () => (/* binding */ ReactQueryProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query_next_experimental__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6084);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6833);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4328);
/* __next_internal_client_entry_do_not_use__ ReactQueryProvider auto */ 



function ReactQueryProvider({ children  }) {
    const [client] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__/* .QueryClient */ .S());
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__/* .QueryClientProvider */ .aH, {
        client: client,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query_next_experimental__WEBPACK_IMPORTED_MODULE_4__/* .ReactQueryStreamedHydration */ .V, {
            children: children
        })
    });
}


/***/ }),

/***/ 5948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "r2": () => (/* binding */ AccountBalance),
  "Ce": () => (/* binding */ AccountButtons),
  "e5": () => (/* binding */ AccountChecker),
  "GT": () => (/* binding */ AccountTokens),
  "zo": () => (/* binding */ AccountTransactions)
});

// UNUSED EXPORTS: AccountBalanceCheck

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ../node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js
var useWallet = __webpack_require__(180);
// EXTERNAL MODULE: ../node_modules/@solana/web3.js/lib/index.cjs.js
var index_cjs = __webpack_require__(9962);
// EXTERNAL MODULE: ../node_modules/@tabler/icons-react/dist/cjs/tabler-icons-react.js
var tabler_icons_react = __webpack_require__(6424);
// EXTERNAL MODULE: ../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js
var QueryClientProvider = __webpack_require__(4328);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./components/ui/ui-layout.tsx + 1 modules
var ui_layout = __webpack_require__(6247);
// EXTERNAL MODULE: ./components/cluster/cluster-data-access.tsx
var cluster_data_access = __webpack_require__(1410);
// EXTERNAL MODULE: ./components/cluster/cluster-ui.tsx
var cluster_ui = __webpack_require__(1427);
// EXTERNAL MODULE: ../node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js
var useConnection = __webpack_require__(1158);
// EXTERNAL MODULE: ../node_modules/@solana/spl-token/lib/esm/constants.js
var constants = __webpack_require__(703);
// EXTERNAL MODULE: ../node_modules/@tanstack/react-query/build/modern/useQuery.js + 6 modules
var useQuery = __webpack_require__(8193);
// EXTERNAL MODULE: ../node_modules/@tanstack/react-query/build/modern/useMutation.js + 1 modules
var useMutation = __webpack_require__(3618);
// EXTERNAL MODULE: ../node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(1425);
;// CONCATENATED MODULE: ./components/account/account-data-access.tsx
/* __next_internal_client_entry_do_not_use__ useGetBalance,useGetSignatures,useGetTokenAccounts,useTransferSol,useRequestAirdrop auto */ 





function useGetBalance({ address  }) {
    const { connection  } = (0,useConnection/* useConnection */.R)();
    return (0,useQuery/* useQuery */.a)({
        queryKey: [
            "get-balance",
            {
                endpoint: connection.rpcEndpoint,
                address
            }
        ],
        queryFn: ()=>connection.getBalance(address)
    });
}
function useGetSignatures({ address  }) {
    const { connection  } = (0,useConnection/* useConnection */.R)();
    return (0,useQuery/* useQuery */.a)({
        queryKey: [
            "get-signatures",
            {
                endpoint: connection.rpcEndpoint,
                address
            }
        ],
        queryFn: ()=>connection.getConfirmedSignaturesForAddress2(address)
    });
}
function useGetTokenAccounts({ address  }) {
    const { connection  } = (0,useConnection/* useConnection */.R)();
    return (0,useQuery/* useQuery */.a)({
        queryKey: [
            "get-token-accounts",
            {
                endpoint: connection.rpcEndpoint,
                address
            }
        ],
        queryFn: async ()=>{
            const [tokenAccounts, token2022Accounts] = await Promise.all([
                connection.getParsedTokenAccountsByOwner(address, {
                    programId: constants/* TOKEN_PROGRAM_ID */.H_
                }),
                connection.getParsedTokenAccountsByOwner(address, {
                    programId: constants/* TOKEN_2022_PROGRAM_ID */.nA
                })
            ]);
            return [
                ...tokenAccounts.value,
                ...token2022Accounts.value
            ];
        }
    });
}
function useTransferSol({ address  }) {
    const { connection  } = (0,useConnection/* useConnection */.R)();
    const transactionToast = (0,ui_layout.useTransactionToast)();
    const wallet = (0,useWallet/* useWallet */.O)();
    const client = (0,QueryClientProvider/* useQueryClient */.NL)();
    return (0,useMutation/* useMutation */.D)({
        mutationKey: [
            "transfer-sol",
            {
                endpoint: connection.rpcEndpoint,
                address
            }
        ],
        mutationFn: async (input)=>{
            let signature = "";
            try {
                const { transaction , latestBlockhash  } = await createTransaction({
                    publicKey: address,
                    destination: input.destination,
                    amount: input.amount,
                    connection
                });
                // Send transaction and await for signature
                signature = await wallet.sendTransaction(transaction, connection);
                // Send transaction and await for signature
                await connection.confirmTransaction({
                    signature,
                    ...latestBlockhash
                }, "confirmed");
                console.log(signature);
                return signature;
            } catch (error) {
                console.log("error", `Transaction failed! ${error}`, signature);
                return;
            }
        },
        onSuccess: (signature)=>{
            if (signature) {
                transactionToast(signature);
            }
            return Promise.all([
                client.invalidateQueries({
                    queryKey: [
                        "get-balance",
                        {
                            endpoint: connection.rpcEndpoint,
                            address
                        }
                    ]
                }),
                client.invalidateQueries({
                    queryKey: [
                        "get-signatures",
                        {
                            endpoint: connection.rpcEndpoint,
                            address
                        }
                    ]
                })
            ]);
        },
        onError: (error)=>{
            dist/* default.error */.ZP.error(`Transaction failed! ${error}`);
        }
    });
}
function useRequestAirdrop({ address  }) {
    const { connection  } = (0,useConnection/* useConnection */.R)();
    const transactionToast = (0,ui_layout.useTransactionToast)();
    const client = (0,QueryClientProvider/* useQueryClient */.NL)();
    return (0,useMutation/* useMutation */.D)({
        mutationKey: [
            "airdrop",
            {
                endpoint: connection.rpcEndpoint,
                address
            }
        ],
        mutationFn: async (amount = 1)=>{
            const [latestBlockhash, signature] = await Promise.all([
                connection.getLatestBlockhash(),
                connection.requestAirdrop(address, amount * index_cjs.LAMPORTS_PER_SOL)
            ]);
            await connection.confirmTransaction({
                signature,
                ...latestBlockhash
            }, "confirmed");
            return signature;
        },
        onSuccess: (signature)=>{
            transactionToast(signature);
            return Promise.all([
                client.invalidateQueries({
                    queryKey: [
                        "get-balance",
                        {
                            endpoint: connection.rpcEndpoint,
                            address
                        }
                    ]
                }),
                client.invalidateQueries({
                    queryKey: [
                        "get-signatures",
                        {
                            endpoint: connection.rpcEndpoint,
                            address
                        }
                    ]
                })
            ]);
        }
    });
}
async function createTransaction({ publicKey , destination , amount , connection  }) {
    // Get the latest blockhash to use in our transaction
    const latestBlockhash = await connection.getLatestBlockhash();
    // Create instructions to send, in this case a simple transfer
    const instructions = [
        index_cjs.SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey: destination,
            lamports: amount * index_cjs.LAMPORTS_PER_SOL
        })
    ];
    // Create a new TransactionMessage with version and compile it to legacy
    const messageLegacy = new index_cjs.TransactionMessage({
        payerKey: publicKey,
        recentBlockhash: latestBlockhash.blockhash,
        instructions
    }).compileToLegacyMessage();
    // Create a new VersionedTransaction which supports legacy and v0
    const transaction = new index_cjs.VersionedTransaction(messageLegacy);
    return {
        transaction,
        latestBlockhash
    };
}

;// CONCATENATED MODULE: ./components/account/account-ui.tsx
/* __next_internal_client_entry_do_not_use__ AccountBalance,AccountChecker,AccountBalanceCheck,AccountButtons,AccountTokens,AccountTransactions auto */ 









function AccountBalance({ address  }) {
    const query = useGetBalance({
        address
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
            className: "text-5xl font-bold cursor-pointer",
            onClick: ()=>query.refetch(),
            children: [
                query.data ? /*#__PURE__*/ jsx_runtime_.jsx(BalanceSol, {
                    balance: query.data
                }) : "...",
                " SOL"
            ]
        })
    });
}
function AccountChecker() {
    const { publicKey  } = (0,useWallet/* useWallet */.O)();
    if (!publicKey) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(AccountBalanceCheck, {
        address: publicKey
    });
}
function AccountBalanceCheck({ address  }) {
    const { cluster  } = (0,cluster_data_access.useCluster)();
    const mutation = useRequestAirdrop({
        address
    });
    const query = useGetBalance({
        address
    });
    if (query.isLoading) {
        return null;
    }
    if (query.isError || !query.data) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "alert alert-warning text-warning-content/80 rounded-none flex justify-center",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    children: [
                        "You are connected to ",
                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                            children: cluster.name
                        }),
                        " but your account is not found on this cluster."
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "btn btn-xs btn-neutral",
                    onClick: ()=>mutation.mutateAsync(1).catch((err)=>console.log(err)),
                    children: "Request Airdrop"
                })
            ]
        });
    }
    return null;
}
function AccountButtons({ address  }) {
    const wallet = (0,useWallet/* useWallet */.O)();
    const { cluster  } = (0,cluster_data_access.useCluster)();
    const [showAirdropModal, setShowAirdropModal] = (0,react_.useState)(false);
    const [showReceiveModal, setShowReceiveModal] = (0,react_.useState)(false);
    const [showSendModal, setShowSendModal] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ModalAirdrop, {
                hide: ()=>setShowAirdropModal(false),
                address: address,
                show: showAirdropModal
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ModalReceive, {
                address: address,
                show: showReceiveModal,
                hide: ()=>setShowReceiveModal(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ModalSend, {
                address: address,
                show: showSendModal,
                hide: ()=>setShowSendModal(false)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-x-2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        disabled: cluster.network?.includes("mainnet"),
                        className: "btn btn-xs lg:btn-md btn-outline",
                        onClick: ()=>setShowAirdropModal(true),
                        children: "Airdrop"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        disabled: wallet.publicKey?.toString() !== address.toString(),
                        className: "btn btn-xs lg:btn-md btn-outline",
                        onClick: ()=>setShowSendModal(true),
                        children: "Send"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn btn-xs lg:btn-md btn-outline",
                        onClick: ()=>setShowReceiveModal(true),
                        children: "Receive"
                    })
                ]
            })
        ]
    });
}
function AccountTokens({ address  }) {
    const [showAll, setShowAll] = (0,react_.useState)(false);
    const query = useGetTokenAccounts({
        address
    });
    const client = (0,QueryClientProvider/* useQueryClient */.NL)();
    const items = (0,react_.useMemo)(()=>{
        if (showAll) return query.data;
        return query.data?.slice(0, 5);
    }, [
        query.data,
        showAll
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "justify-between",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-2xl font-bold",
                            children: "Token Accounts"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "space-x-2",
                            children: query.isLoading ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "loading loading-spinner"
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn btn-sm btn-outline",
                                onClick: async ()=>{
                                    await query.refetch();
                                    await client.invalidateQueries({
                                        queryKey: [
                                            "getTokenAccountBalance"
                                        ]
                                    });
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconRefresh */.tr8, {
                                    size: 16
                                })
                            })
                        })
                    ]
                })
            }),
            query.isError && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("pre", {
                className: "alert alert-error",
                children: [
                    "Error: ",
                    query.error?.message.toString()
                ]
            }),
            query.isSuccess && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: query.data.length === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: "No token accounts found."
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                    className: "table border-4 rounded-lg border-separate border-base-300",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        children: "Public Key"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        children: "Mint"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        className: "text-right",
                                        children: "Balance"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                            children: [
                                items?.map(({ account , pubkey  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex space-x-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "font-mono",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(cluster_ui/* ExplorerLink */.Q1, {
                                                            label: (0,ui_layout.ellipsify)(pubkey.toString()),
                                                            path: `account/${pubkey.toString()}`
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex space-x-2",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "font-mono",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(cluster_ui/* ExplorerLink */.Q1, {
                                                            label: (0,ui_layout.ellipsify)(account.data.parsed.info.mint),
                                                            path: `account/${account.data.parsed.info.mint.toString()}`
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "text-right",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "font-mono",
                                                    children: account.data.parsed.info.tokenAmount.uiAmount
                                                })
                                            })
                                        ]
                                    }, pubkey.toString())),
                                (query.data?.length ?? 0) > 5 && /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        colSpan: 4,
                                        className: "text-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "btn btn-xs btn-outline",
                                            onClick: ()=>setShowAll(!showAll),
                                            children: showAll ? "Show Less" : "Show All"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function AccountTransactions({ address  }) {
    const query = useGetSignatures({
        address
    });
    const [showAll, setShowAll] = (0,react_.useState)(false);
    const items = (0,react_.useMemo)(()=>{
        if (showAll) return query.data;
        return query.data?.slice(0, 5);
    }, [
        query.data,
        showAll
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-2xl font-bold",
                        children: "Transaction History"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "space-x-2",
                        children: query.isLoading ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "loading loading-spinner"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "btn btn-sm btn-outline",
                            onClick: ()=>query.refetch(),
                            children: /*#__PURE__*/ jsx_runtime_.jsx(tabler_icons_react/* IconRefresh */.tr8, {
                                size: 16
                            })
                        })
                    })
                ]
            }),
            query.isError && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("pre", {
                className: "alert alert-error",
                children: [
                    "Error: ",
                    query.error?.message.toString()
                ]
            }),
            query.isSuccess && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: query.data.length === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: "No transactions found."
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                    className: "table border-4 rounded-lg border-separate border-base-300",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        children: "Signature"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        className: "text-right",
                                        children: "Slot"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        children: "Block Time"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                        className: "text-right",
                                        children: "Status"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                            children: [
                                items?.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                                className: "font-mono",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(cluster_ui/* ExplorerLink */.Q1, {
                                                    path: `tx/${item.signature}`,
                                                    label: (0,ui_layout.ellipsify)(item.signature, 8)
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "font-mono text-right",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(cluster_ui/* ExplorerLink */.Q1, {
                                                    path: `block/${item.slot}`,
                                                    label: item.slot.toString()
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                children: new Date((item.blockTime ?? 0) * 1000).toISOString()
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                className: "text-right",
                                                children: item.err ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "badge badge-error",
                                                    title: JSON.stringify(item.err),
                                                    children: "Failed"
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "badge badge-success",
                                                    children: "Success"
                                                })
                                            })
                                        ]
                                    }, item.signature)),
                                (query.data?.length ?? 0) > 5 && /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        colSpan: 4,
                                        className: "text-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "btn btn-xs btn-outline",
                                            onClick: ()=>setShowAll(!showAll),
                                            children: showAll ? "Show Less" : "Show All"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function BalanceSol({ balance  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        children: Math.round(balance / index_cjs.LAMPORTS_PER_SOL * 100000) / 100000
    });
}
function ModalReceive({ hide , show , address  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_layout.AppModal, {
        title: "Receive",
        hide: hide,
        show: show,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Receive assets by sending them to your public key:"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("code", {
                children: address.toString()
            })
        ]
    });
}
function ModalAirdrop({ hide , show , address  }) {
    const mutation = useRequestAirdrop({
        address
    });
    const [amount, setAmount] = (0,react_.useState)("2");
    return /*#__PURE__*/ jsx_runtime_.jsx(ui_layout.AppModal, {
        hide: hide,
        show: show,
        title: "Airdrop",
        submitDisabled: !amount || mutation.isPending,
        submitLabel: "Request Airdrop",
        submit: ()=>mutation.mutateAsync(parseFloat(amount)).then(()=>hide()),
        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
            disabled: mutation.isPending,
            type: "number",
            step: "any",
            min: "1",
            placeholder: "Amount",
            className: "input input-bordered w-full",
            value: amount,
            onChange: (e)=>setAmount(e.target.value)
        })
    });
}
function ModalSend({ hide , show , address  }) {
    const wallet = (0,useWallet/* useWallet */.O)();
    const mutation = useTransferSol({
        address
    });
    const [destination, setDestination] = (0,react_.useState)("");
    const [amount, setAmount] = (0,react_.useState)("1");
    if (!address || !wallet.sendTransaction) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "Wallet not connected"
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ui_layout.AppModal, {
        hide: hide,
        show: show,
        title: "Send",
        submitDisabled: !destination || !amount || mutation.isPending,
        submitLabel: "Send",
        submit: ()=>{
            mutation.mutateAsync({
                destination: new index_cjs.PublicKey(destination),
                amount: parseFloat(amount)
            }).then(()=>hide());
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                disabled: mutation.isPending,
                type: "text",
                placeholder: "Destination",
                className: "input input-bordered w-full",
                value: destination,
                onChange: (e)=>setDestination(e.target.value)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                disabled: mutation.isPending,
                type: "number",
                step: "any",
                min: "1",
                placeholder: "Amount",
                className: "input input-bordered w-full",
                value: amount,
                onChange: (e)=>setAmount(e.target.value)
            })
        ]
    });
}


/***/ }),

/***/ 1410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClusterNetwork": () => (/* binding */ ClusterNetwork),
/* harmony export */   "ClusterProvider": () => (/* binding */ ClusterProvider),
/* harmony export */   "defaultClusters": () => (/* binding */ defaultClusters),
/* harmony export */   "useCluster": () => (/* binding */ useCluster)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9962);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1638);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8573);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5268);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1425);
/* __next_internal_client_entry_do_not_use__ ClusterNetwork,defaultClusters,ClusterProvider,useCluster auto */ 





var ClusterNetwork;
(function(ClusterNetwork) {
    ClusterNetwork["Mainnet"] = "mainnet-beta";
    ClusterNetwork["Testnet"] = "testnet";
    ClusterNetwork["Devnet"] = "devnet";
    ClusterNetwork["Custom"] = "custom";
})(ClusterNetwork || (ClusterNetwork = {}));
// By default, we don't configure the mainnet-beta cluster
// The endpoint provided by clusterApiUrl('mainnet-beta') does not allow access from the browser due to CORS restrictions
// To use the mainnet-beta cluster, provide a custom endpoint
const defaultClusters = [
    {
        name: "devnet",
        endpoint: (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.clusterApiUrl)("devnet"),
        network: ClusterNetwork.Devnet
    },
    {
        name: "local",
        endpoint: "http://localhost:8899"
    },
    {
        name: "testnet",
        endpoint: (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.clusterApiUrl)("testnet"),
        network: ClusterNetwork.Testnet
    }
];
const clusterAtom = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_4__/* .atomWithStorage */ .O4)("solana-cluster", defaultClusters[0]);
const clustersAtom = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_4__/* .atomWithStorage */ .O4)("solana-clusters", defaultClusters);
const activeClustersAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_5__/* .atom */ .cn)((get)=>{
    const clusters = get(clustersAtom);
    const cluster = get(clusterAtom);
    return clusters.map((item)=>({
            ...item,
            active: item.name === cluster.name
        }));
});
const activeClusterAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_5__/* .atom */ .cn)((get)=>{
    const clusters = get(activeClustersAtom);
    return clusters.find((item)=>item.active) || clusters[0];
});
const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});
function ClusterProvider({ children  }) {
    const cluster = (0,jotai__WEBPACK_IMPORTED_MODULE_6__/* .useAtomValue */ .Dv)(activeClusterAtom);
    const clusters = (0,jotai__WEBPACK_IMPORTED_MODULE_6__/* .useAtomValue */ .Dv)(activeClustersAtom);
    const setCluster = (0,jotai__WEBPACK_IMPORTED_MODULE_6__/* .useSetAtom */ .b9)(clusterAtom);
    const setClusters = (0,jotai__WEBPACK_IMPORTED_MODULE_6__/* .useSetAtom */ .b9)(clustersAtom);
    const value = {
        cluster,
        clusters: clusters.sort((a, b)=>a.name > b.name ? 1 : -1),
        addCluster: (cluster)=>{
            try {
                new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Connection(cluster.endpoint);
                setClusters([
                    ...clusters,
                    cluster
                ]);
            } catch (err) {
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__/* ["default"].error */ .ZP.error(`${err}`);
            }
        },
        deleteCluster: (cluster)=>{
            setClusters(clusters.filter((item)=>item.name !== cluster.name));
        },
        setCluster: (cluster)=>setCluster(cluster),
        getExplorerUrl: (path)=>`https://explorer.solana.com/${path}${getClusterUrlParam(cluster)}`
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
        value: value,
        children: children
    });
}
function useCluster() {
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(Context);
}
function getClusterUrlParam(cluster) {
    let suffix = "";
    switch(cluster.network){
        case ClusterNetwork.Devnet:
            suffix = "devnet";
            break;
        case ClusterNetwork.Mainnet:
            suffix = "";
            break;
        case ClusterNetwork.Testnet:
            suffix = "testnet";
            break;
        default:
            suffix = `custom&customUrl=${encodeURIComponent(cluster.endpoint)}`;
            break;
    }
    return suffix.length ? `?cluster=${suffix}` : "";
}


/***/ }),

/***/ 1427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M0": () => (/* binding */ ClusterUiModal),
/* harmony export */   "Q1": () => (/* binding */ ExplorerLink),
/* harmony export */   "_7": () => (/* binding */ ClusterUiTable),
/* harmony export */   "us": () => (/* binding */ ClusterChecker)
/* harmony export */ });
/* unused harmony export ClusterUiSelect */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1158);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6424);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8193);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_ui_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6247);
/* harmony import */ var _cluster_data_access__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1410);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9962);
/* __next_internal_client_entry_do_not_use__ ExplorerLink,ClusterChecker,ClusterUiSelect,ClusterUiModal,ClusterUiTable auto */ 





// import { useCluster, ClusterNetwork } from '@/hooks/useCluster';


function ExplorerLink({ path , label , className  }) {
    const { getExplorerUrl  } = (0,_cluster_data_access__WEBPACK_IMPORTED_MODULE_3__.useCluster)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: getExplorerUrl(path),
        target: "_blank",
        rel: "noopener noreferrer",
        className: className ? className : `link font-mono`,
        children: label
    });
}
function ClusterChecker({ children  }) {
    const { cluster  } = (0,_cluster_data_access__WEBPACK_IMPORTED_MODULE_3__.useCluster)();
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__/* .useConnection */ .R)();
    const query = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__/* .useQuery */ .a)({
        queryKey: [
            "version",
            {
                cluster,
                endpoint: connection.rpcEndpoint
            }
        ],
        queryFn: ()=>connection.getVersion(),
        retry: 1
    });
    if (query.isLoading) {
        return null;
    }
    if (query.isError || !query.data) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "alert alert-warning text-warning-content/80 rounded-none flex justify-center",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        "Error connecting to cluster ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            children: cluster.name
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "btn btn-xs btn-neutral",
                    onClick: ()=>query.refetch(),
                    children: "Refresh"
                })
            ]
        });
    }
    return children;
}
function ClusterUiSelect() {
    const { clusters , setCluster , cluster  } = useCluster();
    return /*#__PURE__*/ _jsxs("div", {
        className: "dropdown dropdown-end",
        children: [
            /*#__PURE__*/ _jsx("label", {
                tabIndex: 0,
                className: "btn btn-primary rounded-btn",
                children: cluster.name
            }),
            /*#__PURE__*/ _jsx("ul", {
                tabIndex: 0,
                className: "menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4",
                children: clusters.map((item)=>/*#__PURE__*/ _jsx("li", {
                        children: /*#__PURE__*/ _jsx("button", {
                            className: `btn btn-sm ${item.active ? "btn-primary" : "btn-ghost"}`,
                            onClick: ()=>setCluster(item),
                            children: item.name
                        })
                    }, item.name))
            })
        ]
    });
}
function ClusterUiModal({ hideModal , show  }) {
    const { addCluster  } = (0,_cluster_data_access__WEBPACK_IMPORTED_MODULE_3__.useCluster)();
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [network, setNetwork] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const [endpoint, setEndpoint] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui_ui_layout__WEBPACK_IMPORTED_MODULE_2__.AppModal, {
        title: "Add Cluster",
        hide: hideModal,
        show: show,
        submit: ()=>{
            try {
                new _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.Connection(endpoint);
                if (name) {
                    addCluster({
                        name,
                        network,
                        endpoint
                    });
                    hideModal();
                } else {
                    console.log("Invalid cluster name");
                }
            } catch  {
                console.log("Invalid cluster endpoint");
            }
        },
        submitLabel: "Save",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                placeholder: "Name",
                className: "input input-bordered w-full",
                value: name,
                onChange: (e)=>setName(e.target.value)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                placeholder: "Endpoint",
                className: "input input-bordered w-full",
                value: endpoint,
                onChange: (e)=>setEndpoint(e.target.value)
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                className: "select select-bordered w-full",
                value: network,
                onChange: (e)=>setNetwork(e.target.value),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: undefined,
                        children: "Select a network"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: _cluster_data_access__WEBPACK_IMPORTED_MODULE_3__.ClusterNetwork.Devnet,
                        children: "Devnet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: _cluster_data_access__WEBPACK_IMPORTED_MODULE_3__.ClusterNetwork.Testnet,
                        children: "Testnet"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                        value: _cluster_data_access__WEBPACK_IMPORTED_MODULE_3__.ClusterNetwork.Mainnet,
                        children: "Mainnet"
                    })
                ]
            })
        ]
    });
}
function ClusterUiTable() {
    const { clusters , setCluster , deleteCluster  } = (0,_cluster_data_access__WEBPACK_IMPORTED_MODULE_3__.useCluster)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "overflow-x-auto",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
            className: "table border-4 border-separate border-base-300",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                children: "Name/ Network / Endpoint"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                className: "text-center",
                                children: "Actions"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                    children: clusters.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            className: item?.active ? "bg-base-200" : "",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "whitespace-nowrap space-x-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-xl",
                                                children: item?.active ? item.name : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    title: "Select cluster",
                                                    className: "link link-secondary",
                                                    onClick: ()=>setCluster(item),
                                                    children: item.name
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "text-xs",
                                            children: [
                                                "Network: ",
                                                item.network ?? "custom"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "whitespace-nowrap text-gray-500 text-xs",
                                            children: item.endpoint
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                    className: "space-x-2 whitespace-nowrap text-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        disabled: item?.active,
                                        className: "btn btn-xs btn-default btn-outline",
                                        onClick: ()=>{
                                            if (!window.confirm("Are you sure?")) return;
                                            deleteCluster(item);
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__/* .IconTrash */ .IT9, {
                                            size: 16
                                        })
                                    })
                                })
                            ]
                        }, item.name))
                })
            ]
        })
    });
}


/***/ }),

/***/ 3221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolanaProvider": () => (/* binding */ SolanaProvider),
/* harmony export */   "WalletButton": () => (/* binding */ WalletButton),
/* harmony export */   "useAnchorProvider": () => (/* binding */ useAnchorProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1041);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6883);
/* harmony import */ var _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4812);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4575);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1158);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(180);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8655);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1410);
/* __next_internal_client_entry_do_not_use__ WalletButton,SolanaProvider,useAnchorProvider auto */ 






__webpack_require__(7956);
const WalletButton = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "/Users/justin/Code/solana/CRUD-dApp/web/components/solana/solana-provider.tsx -> " + "@solana/wallet-adapter-react-ui"
        ]
    },
    ssr: false
});
function SolanaProvider({ children  }) {
    const { cluster  } = (0,_cluster_cluster_data_access__WEBPACK_IMPORTED_MODULE_4__.useCluster)();
    const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>cluster.endpoint, [
        cluster
    ]);
    const onError = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((error)=>{
        console.error(error);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_5__/* .ConnectionProvider */ .U, {
        endpoint: endpoint,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__/* .WalletProvider */ .n, {
            wallets: [],
            onError: onError,
            autoConnect: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_7__/* .WalletModalProvider */ .s, {
                children: children
            })
        })
    });
}
function useAnchorProvider() {
    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_8__/* .useConnection */ .R)();
    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__/* .useWallet */ .O)();
    return new _coral_xyz_anchor__WEBPACK_IMPORTED_MODULE_2__.AnchorProvider(connection, wallet, {
        commitment: "confirmed"
    });
}


/***/ }),

/***/ 6247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AppHero": () => (/* binding */ AppHero),
  "AppModal": () => (/* binding */ AppModal),
  "UiLayout": () => (/* binding */ UiLayout),
  "ellipsify": () => (/* binding */ ellipsify),
  "useTransactionToast": () => (/* binding */ useTransactionToast)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./components/solana/solana-provider.tsx
var solana_provider = __webpack_require__(3221);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ../node_modules/next/image.js
var next_image = __webpack_require__(4427);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ../node_modules/next/link.js
var next_link = __webpack_require__(3533);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ../node_modules/next/navigation.js
var navigation = __webpack_require__(2865);
// EXTERNAL MODULE: ./components/account/account-ui.tsx + 1 modules
var account_ui = __webpack_require__(5948);
// EXTERNAL MODULE: ./components/cluster/cluster-ui.tsx
var cluster_ui = __webpack_require__(1427);
// EXTERNAL MODULE: ../node_modules/react-hot-toast/dist/index.mjs + 1 modules
var dist = __webpack_require__(1425);
;// CONCATENATED MODULE: ./assets/img/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.661a388c.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA70lEQVR42mPIy8nVXbp0qdrFcxd4uzq6VNpa2+SPHzuu3tTYGD5j+gwVBj0d3eLw8PD/ixcvvn3w4MGvV69e/VhWVvYrOzv7//Xr1zUYAv0DjBkYGN6mpKT83759+/8tW7b8nzVr1v/p06Yd+///PxsDCHR2dIZmZWX97+/v/3vgwIFfR48e/b9n9+50BhjIyc4pBxr7v7u7+9eJEyd+Xbly5f/KlSsnMsCAu5uHCxD819bW/l9YWPh/8uTJ/9vb2wNh8owMQKAgrzBZUFDwv6mp6Xsgdw4fAwMLAwiEBYcxwlSKi4m7ASk9BgY4YAQAuVZnsUsTHJMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/ui/ui-layout.tsx
/* __next_internal_client_entry_do_not_use__ UiLayout,AppModal,AppHero,ellipsify,useTransactionToast auto */ 










function UiLayout({ children , links  }) {
    const pathname = (0,navigation.usePathname)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-full flex flex-col",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "navbar bg-base-300 text-neutral-content flex-col md:flex-row space-y-2 md:space-y-0",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: "btn btn-ghost normal-case text-xl",
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "w-14 h-14",
                                    src: logo,
                                    width: 56,
                                    height: 56,
                                    alt: "logo"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: "menu menu-horizontal px-1 space-x-2",
                                children: links.map(({ label , path  })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            className: pathname.startsWith(path) ? "active" : "",
                                            href: path,
                                            children: label
                                        })
                                    }, path))
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex-none space-x-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(solana_provider.WalletButton, {})
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(cluster_ui/* ClusterChecker */.us, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(account_ui/* AccountChecker */.e5, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex-grow mx-4 lg:mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Suspense, {
                        fallback: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-center my-32",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "loading loading-spinner loading-lg"
                            })
                        }),
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(dist/* Toaster */.x7, {
                        position: "bottom-right"
                    })
                ]
            })
        ]
    });
}
function AppModal({ children , title , hide , show , submit , submitDisabled , submitLabel  }) {
    const dialogRef = (0,react_.useRef)(null);
    (0,react_.useEffect)(()=>{
        if (!dialogRef.current) return;
        if (show) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [
        show,
        dialogRef
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("dialog", {
        className: "modal",
        ref: dialogRef,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "modal-box space-y-5",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                    className: "font-bold text-lg",
                    children: title
                }),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "modal-action",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "join space-x-2",
                        children: [
                            submit ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "btn btn-xs lg:btn-md btn-primary",
                                onClick: submit,
                                disabled: submitDisabled,
                                children: submitLabel || "Save"
                            }) : null,
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: hide,
                                className: "btn",
                                children: "Close"
                            })
                        ]
                    })
                })
            ]
        })
    });
}
function AppHero({ children , title , subtitle  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "hero py-[64px]",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "hero-content text-center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-2xl",
                children: [
                    typeof title === "string" ? /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-5xl font-bold",
                        children: title
                    }) : title,
                    typeof subtitle === "string" ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "py-6",
                        children: subtitle
                    }) : subtitle,
                    children
                ]
            })
        })
    });
}
function ellipsify(str = "", len = 4) {
    if (str.length > 30) {
        return str.substring(0, len) + ".." + str.substring(str.length - len, str.length);
    }
    return str;
}
function useTransactionToast() {
    return (signature)=>{
        dist/* default.success */.ZP.success(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-lg",
                    children: "Transaction sent"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(cluster_ui/* ExplorerLink */.Q1, {
                    path: `tx/${signature}`,
                    label: "View Transaction",
                    className: "btn btn-xs btn-primary"
                })
            ]
        }));
    };
}


/***/ }),

/***/ 6419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./app/global.css
var global = __webpack_require__(2097);
// EXTERNAL MODULE: ../node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(4626);
;// CONCATENATED MODULE: ./components/ui/ui-layout.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/justin/Code/solana/CRUD-dApp/web/components/ui/ui-layout.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["UiLayout"];

const e1 = proxy["AppModal"];

const e2 = proxy["AppHero"];

const e3 = proxy["ellipsify"];

const e4 = proxy["useTransactionToast"];

;// CONCATENATED MODULE: ./components/cluster/cluster-data-access.tsx

const cluster_data_access_proxy = (0,module_proxy.createProxy)(String.raw`/Users/justin/Code/solana/CRUD-dApp/web/components/cluster/cluster-data-access.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: cluster_data_access_esModule, $$typeof: cluster_data_access_$$typeof } = cluster_data_access_proxy;
const cluster_data_access_default_ = cluster_data_access_proxy.default;

const cluster_data_access_e0 = cluster_data_access_proxy["ClusterNetwork"];

const cluster_data_access_e1 = cluster_data_access_proxy["defaultClusters"];

const cluster_data_access_e2 = cluster_data_access_proxy["ClusterProvider"];

const cluster_data_access_e3 = cluster_data_access_proxy["useCluster"];

;// CONCATENATED MODULE: ./components/solana/solana-provider.tsx

const solana_provider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/justin/Code/solana/CRUD-dApp/web/components/solana/solana-provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: solana_provider_esModule, $$typeof: solana_provider_$$typeof } = solana_provider_proxy;
const solana_provider_default_ = solana_provider_proxy.default;

const solana_provider_e0 = solana_provider_proxy["WalletButton"];

const solana_provider_e1 = solana_provider_proxy["SolanaProvider"];

const solana_provider_e2 = solana_provider_proxy["useAnchorProvider"];

;// CONCATENATED MODULE: ./app/react-query-provider.tsx

const react_query_provider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/justin/Code/solana/CRUD-dApp/web/app/react-query-provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: react_query_provider_esModule, $$typeof: react_query_provider_$$typeof } = react_query_provider_proxy;
const react_query_provider_default_ = react_query_provider_proxy.default;

const react_query_provider_e0 = react_query_provider_proxy["ReactQueryProvider"];

;// CONCATENATED MODULE: ./app/layout.tsx



// import { ClusterProvider } from '@/hooks/useCluster';



const metadata = {
    title: "GreedyPig",
    description: ""
};
const links = [
    {
        label: "Create Game",
        path: "/create-game"
    },
    {
        label: "Games",
        path: "/games"
    }
];
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_query_provider_e0, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(cluster_data_access_e2, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(solana_provider_e1, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                            links: links,
                            children: children
                        })
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 2097:
/***/ (() => {



/***/ })

};
;