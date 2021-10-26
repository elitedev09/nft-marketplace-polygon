"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var E_Smart_Contract_digital_marketplace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var E_Smart_Contract_digital_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_Smart_Contract_digital_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(E_Smart_Contract_digital_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/lib.esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3modal */ "./node_modules/web3modal/dist/index.js");
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../artifacts/contracts/NFT.sol/NFT.json */ "./artifacts/contracts/NFT.sol/NFT.json");
/* harmony import */ var _artifacts_contracts_NFTMarket_sol_NFTMarket_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../artifacts/contracts/NFTMarket.sol/NFTMarket.json */ "./artifacts/contracts/NFTMarket.sol/NFTMarket.json");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\Smart Contract\\digital-marketplace\\pages\\index.js",
    _s = $RefreshSig$();


// import { ethers } from "ethers";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Web3Modal from "web3modal";
// import { nftaddress, nftmarketaddress } from "../config";
// import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
// import Market from "../artifacts/contracts/NFTMarket.sol/NFTMarket.json";
// export default function Home() {
//   const [nfts, setNfts] = useState([]);
//   const [loadingState, setLoadingState] = useState("not-loaded");
//   useEffect(() => {
//     loadNFTs();
//   }, []);
//   async function loadNFTs() {
//     const provider = new ethers.providers.JsonRpcProvider();
//     const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);
//     const marketContract = new ethers.Contract(
//       nftmarketaddress,
//       Market.abi,
//       provider
//     );
//     const data = await marketContract.fetchMarketItems();
//     const items = await Promise.all(
//       data.map(async (i) => {
//         const tokenUri = await tokenContract.tokenURI(i.tokenId);
//         console.log("tokenUri", tokenUri);
//         const meta = await axios.get(tokenUri);
//         let price = ethers.utils.formatUnits(i.price.toString(), "ether");
//         let item = {
//           price,
//           tokenId: i.tokenId.toNumber(),
//           seller: i.seller,
//           owner: i.owner,
//           image: meta.data.image,
//           name: meta.name,
//           description: meta.data.description,
//         };
//         return item;
//       })
//     );
//     setNfts(items);
//     setLoadingState("loaded");
//   }
//   async function buyNFT(nft) {
//     const web3Modal = new Web3Modal();
//     const connection = await web3Modal.connect();
//     const provider = new ethers.providers.Web3Provider(connection);
//     const signer = provider.getSigner();
//     const contract = new ethers.Contract(nftmarketaddress, Market.abi, signer);
//     const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
//     const transaction = await contract.createMarketSale(
//       nftaddress,
//       nft.tokenId,
//       {
//         value: price,
//       }
//     );
//     await transaction.wait();
//     loadNFTs();
//   }
//   if (loadingState === "loaded" && !nfts.length)
//     return <h1 className="px-20 py-10 text-3xl">No items in marketplace</h1>;
//   return (
//     <div className="flex justify-center">
//       <div className="px-4" style={{ maxWidth: "1600px" }}>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
//           {nfts.map((nft, index) => (
//             <div
//               key={index}
//               className="border shadow rounded-xl overflow-hidden"
//             >
//               <img src={nft.image} />
//               <div className="p-4">
//                 <p style={{ heigh: "64px" }} className="text-2xl font-semibold">
//                   {nft.name}
//                 </p>
//                 <div style={{ heigh: "70px", overflow: "hidden" }}>
//                   <p className="text-gray-400">{nft.description}</p>
//                 </div>
//               </div>
//               <div className="p-4 bg-black">
//                 <p className="text-2xl mb-4 font-bold text-white">
//                   {nft.price} Matic
//                 </p>
//                 <button
//                   className="w-full bg-pink-500 text-white font-bold py-2 px-12 rounded"
//                   onClick={() => buyNft(nft)}
//                 >
//                   Buy
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }








function Home() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      nfts = _useState[0],
      setNfts = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('not-loaded'),
      loadingState = _useState2[0],
      setLoadingState = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    loadNFTs();
  }, []);

  function loadNFTs() {
    return _loadNFTs.apply(this, arguments);
  }

  function _loadNFTs() {
    _loadNFTs = (0,E_Smart_Contract_digital_marketplace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/E_Smart_Contract_digital_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
      var provider, tokenContract, marketContract, data, items;
      return E_Smart_Contract_digital_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.JsonRpcProvider();
              tokenContract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.nftaddress, _artifacts_contracts_NFT_sol_NFT_json__WEBPACK_IMPORTED_MODULE_6__.abi, provider);
              marketContract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.nftmarketaddress, _artifacts_contracts_NFTMarket_sol_NFTMarket_json__WEBPACK_IMPORTED_MODULE_7__.abi, provider);
              _context2.next = 5;
              return marketContract.fetchMarketItems();

            case 5:
              data = _context2.sent;
              _context2.next = 8;
              return Promise.all(data.map( /*#__PURE__*/function () {
                var _ref = (0,E_Smart_Contract_digital_marketplace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/E_Smart_Contract_digital_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(i) {
                  var tokenUri, meta, price, item;
                  return E_Smart_Contract_digital_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return tokenContract.tokenURI(i.tokenId);

                        case 2:
                          tokenUri = _context.sent;
                          _context.next = 5;
                          return axios__WEBPACK_IMPORTED_MODULE_3___default().get(tokenUri);

                        case 5:
                          meta = _context.sent;
                          price = ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.utils.formatUnits(i.price.toString(), 'ether');
                          item = {
                            price: price,
                            tokenId: i.tokenId.toNumber(),
                            seller: i.seller,
                            owner: i.owner,
                            image: meta.data.image,
                            name: meta.data.name,
                            description: meta.data.description
                          };
                          return _context.abrupt("return", item);

                        case 9:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function (_x2) {
                  return _ref.apply(this, arguments);
                };
              }()));

            case 8:
              items = _context2.sent;
              setNfts(items);
              setLoadingState('loaded');

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _loadNFTs.apply(this, arguments);
  }

  function buyNft(_x) {
    return _buyNft.apply(this, arguments);
  }

  function _buyNft() {
    _buyNft = (0,E_Smart_Contract_digital_marketplace_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/E_Smart_Contract_digital_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(nft) {
      var web3Modal, connection, provider, signer, contract, price, transaction;
      return E_Smart_Contract_digital_marketplace_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_4___default())();
              _context3.next = 3;
              return web3Modal.connect();

            case 3:
              connection = _context3.sent;
              provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.Web3Provider(connection);
              signer = provider.getSigner();
              contract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.nftmarketaddress, _artifacts_contracts_NFTMarket_sol_NFTMarket_json__WEBPACK_IMPORTED_MODULE_7__.abi, signer);
              price = ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.utils.parseUnits(nft.price.toString(), 'ether');
              _context3.next = 10;
              return contract.createMarketSale(_config__WEBPACK_IMPORTED_MODULE_5__.nftaddress, nft.tokenId, {
                value: price
              });

            case 10:
              transaction = _context3.sent;
              _context3.next = 13;
              return transaction.wait();

            case 13:
              loadNFTs();

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _buyNft.apply(this, arguments);
  }

  if (loadingState === 'loaded' && !nfts.length) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("h1", {
    className: "px-20 py-10 text-3xl",
    children: "No items in marketplace"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 168,
    columnNumber: 58
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    className: "flex justify-center",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
      className: "px-4",
      style: {
        maxWidth: '1600px'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",
        children: nfts.map(function (nft, i) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
            className: "border shadow rounded-xl overflow-hidden",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("img", {
              src: nft.image
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "p-4",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                style: {
                  height: '64px'
                },
                className: "text-2xl font-semibold",
                children: nft.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
                style: {
                  height: '70px',
                  overflow: 'hidden'
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                  className: "text-gray-400",
                  children: nft.description
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
              className: "p-4 bg-black",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("p", {
                className: "text-2xl mb-4 font-bold text-white",
                children: [nft.price, " ETH"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("button", {
                className: "w-full bg-pink-500 text-white font-bold py-2 px-12 rounded",
                onClick: function onClick() {
                  return buyNft(nft);
                },
                children: "Buy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 17
            }, _this)]
          }, i, true, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 170,
    columnNumber: 5
  }, this);
}

_s(Home, "DL6OJ8B7YCUHYFOUoPi2JI8l+/o=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmI1NGVlZGRhMDIwN2VjYWY5MTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTs7QUFJZSxTQUFTUyxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCLGtCQUF3QlAsK0NBQVEsQ0FBQyxFQUFELENBQWhDO0FBQUEsTUFBT1EsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBQ0EsbUJBQXdDVCwrQ0FBUSxDQUFDLFlBQUQsQ0FBaEQ7QUFBQSxNQUFPVSxZQUFQO0FBQUEsTUFBcUJDLGVBQXJCOztBQUNBWixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZGEsSUFBQUEsUUFBUTtBQUNULEdBRlEsRUFFTixFQUZNLENBQVQ7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QSxRQUFRLEVBQUU7QUFBNUIsaUJBQVo7QUFBQSx1Q0FDRTtBQUFHLDJCQUFTLEVBQUMsZUFBYjtBQUFBLDRCQUE4QmhCLEdBQUcsQ0FBQ0g7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGLGVBUUU7QUFBSyx1QkFBUyxFQUFDLGNBQWY7QUFBQSxzQ0FDRTtBQUFHLHlCQUFTLEVBQUMsb0NBQWI7QUFBQSwyQkFBbURHLEdBQUcsQ0FBQ2IsS0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBUSx5QkFBUyxFQUFDLDREQUFsQjtBQUErRSx1QkFBTyxFQUFFO0FBQUEseUJBQU1ZLE1BQU0sQ0FBQ0MsR0FBRCxDQUFaO0FBQUEsaUJBQXhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRjtBQUFBLGFBQVVuQixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRE87QUFBQSxTQUFUO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5QkQ7O0dBdEV1QmxCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG4vLyBpbXBvcnQgV2ViM01vZGFsIGZyb20gXCJ3ZWIzbW9kYWxcIjtcblxuLy8gaW1wb3J0IHsgbmZ0YWRkcmVzcywgbmZ0bWFya2V0YWRkcmVzcyB9IGZyb20gXCIuLi9jb25maWdcIjtcblxuLy8gaW1wb3J0IE5GVCBmcm9tIFwiLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9ORlQuc29sL05GVC5qc29uXCI7XG4vLyBpbXBvcnQgTWFya2V0IGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL05GVE1hcmtldC5zb2wvTkZUTWFya2V0Lmpzb25cIjtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbi8vICAgY29uc3QgW25mdHMsIHNldE5mdHNdID0gdXNlU3RhdGUoW10pO1xuLy8gICBjb25zdCBbbG9hZGluZ1N0YXRlLCBzZXRMb2FkaW5nU3RhdGVdID0gdXNlU3RhdGUoXCJub3QtbG9hZGVkXCIpO1xuXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgbG9hZE5GVHMoKTtcbi8vICAgfSwgW10pO1xuXG4vLyAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRORlRzKCkge1xuLy8gICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuSnNvblJwY1Byb3ZpZGVyKCk7XG4vLyAgICAgY29uc3QgdG9rZW5Db250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QobmZ0YWRkcmVzcywgTkZULmFiaSwgcHJvdmlkZXIpO1xuLy8gICAgIGNvbnN0IG1hcmtldENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChcbi8vICAgICAgIG5mdG1hcmtldGFkZHJlc3MsXG4vLyAgICAgICBNYXJrZXQuYWJpLFxuLy8gICAgICAgcHJvdmlkZXJcbi8vICAgICApO1xuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBtYXJrZXRDb250cmFjdC5mZXRjaE1hcmtldEl0ZW1zKCk7XG5cbi8vICAgICBjb25zdCBpdGVtcyA9IGF3YWl0IFByb21pc2UuYWxsKFxuLy8gICAgICAgZGF0YS5tYXAoYXN5bmMgKGkpID0+IHtcbi8vICAgICAgICAgY29uc3QgdG9rZW5VcmkgPSBhd2FpdCB0b2tlbkNvbnRyYWN0LnRva2VuVVJJKGkudG9rZW5JZCk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW5VcmlcIiwgdG9rZW5VcmkpO1xuLy8gICAgICAgICBjb25zdCBtZXRhID0gYXdhaXQgYXhpb3MuZ2V0KHRva2VuVXJpKTtcbi8vICAgICAgICAgbGV0IHByaWNlID0gZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKGkucHJpY2UudG9TdHJpbmcoKSwgXCJldGhlclwiKTtcbi8vICAgICAgICAgbGV0IGl0ZW0gPSB7XG4vLyAgICAgICAgICAgcHJpY2UsXG4vLyAgICAgICAgICAgdG9rZW5JZDogaS50b2tlbklkLnRvTnVtYmVyKCksXG4vLyAgICAgICAgICAgc2VsbGVyOiBpLnNlbGxlcixcbi8vICAgICAgICAgICBvd25lcjogaS5vd25lcixcbi8vICAgICAgICAgICBpbWFnZTogbWV0YS5kYXRhLmltYWdlLFxuLy8gICAgICAgICAgIG5hbWU6IG1ldGEubmFtZSxcbi8vICAgICAgICAgICBkZXNjcmlwdGlvbjogbWV0YS5kYXRhLmRlc2NyaXB0aW9uLFxuLy8gICAgICAgICB9O1xuLy8gICAgICAgICByZXR1cm4gaXRlbTtcbi8vICAgICAgIH0pXG4vLyAgICAgKTtcblxuLy8gICAgIHNldE5mdHMoaXRlbXMpO1xuLy8gICAgIHNldExvYWRpbmdTdGF0ZShcImxvYWRlZFwiKTtcbi8vICAgfVxuXG4vLyAgIGFzeW5jIGZ1bmN0aW9uIGJ1eU5GVChuZnQpIHtcbi8vICAgICBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKCk7XG4vLyAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KCk7XG4vLyAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbik7XG5cbi8vICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKTtcbi8vICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QobmZ0bWFya2V0YWRkcmVzcywgTWFya2V0LmFiaSwgc2lnbmVyKTtcblxuLy8gICAgIGNvbnN0IHByaWNlID0gZXRoZXJzLnV0aWxzLnBhcnNlVW5pdHMobmZ0LnByaWNlLnRvU3RyaW5nKCksIFwiZXRoZXJcIik7XG5cbi8vICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZU1hcmtldFNhbGUoXG4vLyAgICAgICBuZnRhZGRyZXNzLFxuLy8gICAgICAgbmZ0LnRva2VuSWQsXG4vLyAgICAgICB7XG4vLyAgICAgICAgIHZhbHVlOiBwcmljZSxcbi8vICAgICAgIH1cbi8vICAgICApO1xuLy8gICAgIGF3YWl0IHRyYW5zYWN0aW9uLndhaXQoKTtcbi8vICAgICBsb2FkTkZUcygpO1xuLy8gICB9XG4vLyAgIGlmIChsb2FkaW5nU3RhdGUgPT09IFwibG9hZGVkXCIgJiYgIW5mdHMubGVuZ3RoKVxuLy8gICAgIHJldHVybiA8aDEgY2xhc3NOYW1lPVwicHgtMjAgcHktMTAgdGV4dC0zeGxcIj5ObyBpdGVtcyBpbiBtYXJrZXRwbGFjZTwvaDE+O1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00XCIgc3R5bGU9e3sgbWF4V2lkdGg6IFwiMTYwMHB4XCIgfX0+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtNCBnYXAtNCBwdC00XCI+XG4vLyAgICAgICAgICAge25mdHMubWFwKChuZnQsIGluZGV4KSA9PiAoXG4vLyAgICAgICAgICAgICA8ZGl2XG4vLyAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4vLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBzaGFkb3cgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW5cIlxuLy8gICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICA8aW1nIHNyYz17bmZ0LmltYWdlfSAvPlxuLy8gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuLy8gICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IGhlaWdoOiBcIjY0cHhcIiB9fSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+XG4vLyAgICAgICAgICAgICAgICAgICB7bmZ0Lm5hbWV9XG4vLyAgICAgICAgICAgICAgICAgPC9wPlxuLy8gICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2g6IFwiNzBweFwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fT5cbi8vICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDBcIj57bmZ0LmRlc2NyaXB0aW9ufTwvcD5cbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IGJnLWJsYWNrXCI+XG4vLyAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItNCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPlxuLy8gICAgICAgICAgICAgICAgICAge25mdC5wcmljZX0gTWF0aWNcbi8vICAgICAgICAgICAgICAgICA8L3A+XG4vLyAgICAgICAgICAgICAgICAgPGJ1dHRvblxuLy8gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXBpbmstNTAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtMTIgcm91bmRlZFwiXG4vLyAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBidXlOZnQobmZ0KX1cbi8vICAgICAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgICAgICBCdXlcbi8vICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICApKX1cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH1cbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiXG5cbmltcG9ydCB7XG4gIG5mdGFkZHJlc3MsIG5mdG1hcmtldGFkZHJlc3Ncbn0gZnJvbSAnLi4vY29uZmlnJ1xuXG5pbXBvcnQgTkZUIGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvTkZULnNvbC9ORlQuanNvbicgIFxuaW1wb3J0IE1hcmtldCBmcm9tIFwiLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9ORlRNYXJrZXQuc29sL05GVE1hcmtldC5qc29uXCI7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbmZ0cywgc2V0TmZ0c10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2xvYWRpbmdTdGF0ZSwgc2V0TG9hZGluZ1N0YXRlXSA9IHVzZVN0YXRlKCdub3QtbG9hZGVkJylcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkTkZUcygpXG4gIH0sIFtdKVxuICBhc3luYyBmdW5jdGlvbiBsb2FkTkZUcygpIHsgICAgXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIoKVxuICAgIGNvbnN0IHRva2VuQ29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KG5mdGFkZHJlc3MsIE5GVC5hYmksIHByb3ZpZGVyKVxuICAgIGNvbnN0IG1hcmtldENvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChuZnRtYXJrZXRhZGRyZXNzLCBNYXJrZXQuYWJpLCBwcm92aWRlcilcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgbWFya2V0Q29udHJhY3QuZmV0Y2hNYXJrZXRJdGVtcygpXG4gICAgXG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCBQcm9taXNlLmFsbChkYXRhLm1hcChhc3luYyBpID0+IHtcbiAgICAgIGNvbnN0IHRva2VuVXJpID0gYXdhaXQgdG9rZW5Db250cmFjdC50b2tlblVSSShpLnRva2VuSWQpXG4gICAgICBjb25zdCBtZXRhID0gYXdhaXQgYXhpb3MuZ2V0KHRva2VuVXJpKVxuICAgICAgbGV0IHByaWNlID0gZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKGkucHJpY2UudG9TdHJpbmcoKSwgJ2V0aGVyJylcbiAgICAgIGxldCBpdGVtID0ge1xuICAgICAgICBwcmljZSxcbiAgICAgICAgdG9rZW5JZDogaS50b2tlbklkLnRvTnVtYmVyKCksXG4gICAgICAgIHNlbGxlcjogaS5zZWxsZXIsXG4gICAgICAgIG93bmVyOiBpLm93bmVyLFxuICAgICAgICBpbWFnZTogbWV0YS5kYXRhLmltYWdlLFxuICAgICAgICBuYW1lOiBtZXRhLmRhdGEubmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb246IG1ldGEuZGF0YS5kZXNjcmlwdGlvbixcbiAgICAgIH1cbiAgICAgIHJldHVybiBpdGVtXG4gICAgfSkpXG4gICAgc2V0TmZ0cyhpdGVtcylcbiAgICBzZXRMb2FkaW5nU3RhdGUoJ2xvYWRlZCcpIFxuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGJ1eU5mdChuZnQpIHtcbiAgICBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKClcbiAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKVxuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pXG4gICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcbiAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QobmZ0bWFya2V0YWRkcmVzcywgTWFya2V0LmFiaSwgc2lnbmVyKVxuXG4gICAgY29uc3QgcHJpY2UgPSBldGhlcnMudXRpbHMucGFyc2VVbml0cyhuZnQucHJpY2UudG9TdHJpbmcoKSwgJ2V0aGVyJylcbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LmNyZWF0ZU1hcmtldFNhbGUobmZ0YWRkcmVzcywgbmZ0LnRva2VuSWQsIHtcbiAgICAgIHZhbHVlOiBwcmljZVxuICAgIH0pXG4gICAgYXdhaXQgdHJhbnNhY3Rpb24ud2FpdCgpXG4gICAgbG9hZE5GVHMoKVxuICB9XG4gIGlmIChsb2FkaW5nU3RhdGUgPT09ICdsb2FkZWQnICYmICFuZnRzLmxlbmd0aCkgcmV0dXJuICg8aDEgY2xhc3NOYW1lPVwicHgtMjAgcHktMTAgdGV4dC0zeGxcIj5ObyBpdGVtcyBpbiBtYXJrZXRwbGFjZTwvaDE+KVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00XCIgc3R5bGU9e3sgbWF4V2lkdGg6ICcxNjAwcHgnIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgZ2FwLTQgcHQtNFwiPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5mdHMubWFwKChuZnQsIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cImJvcmRlciBzaGFkb3cgcm91bmRlZC14bCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17bmZ0LmltYWdlfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBoZWlnaHQ6ICc2NHB4JyB9fSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+e25mdC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnNzBweCcsIG92ZXJmbG93OiAnaGlkZGVuJyB9fT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPntuZnQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYmctYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtMnhsIG1iLTQgZm9udC1ib2xkIHRleHQtd2hpdGVcIj57bmZ0LnByaWNlfSBFVEg8L3A+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInctZnVsbCBiZy1waW5rLTUwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTEyIHJvdW5kZWRcIiBvbkNsaWNrPXsoKSA9PiBidXlOZnQobmZ0KX0+QnV5PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiZXRoZXJzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIldlYjNNb2RhbCIsIm5mdGFkZHJlc3MiLCJuZnRtYXJrZXRhZGRyZXNzIiwiTkZUIiwiTWFya2V0IiwiSG9tZSIsIm5mdHMiLCJzZXROZnRzIiwibG9hZGluZ1N0YXRlIiwic2V0TG9hZGluZ1N0YXRlIiwibG9hZE5GVHMiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkpzb25ScGNQcm92aWRlciIsInRva2VuQ29udHJhY3QiLCJDb250cmFjdCIsImFiaSIsIm1hcmtldENvbnRyYWN0IiwiZmV0Y2hNYXJrZXRJdGVtcyIsImRhdGEiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaSIsInRva2VuVVJJIiwidG9rZW5JZCIsInRva2VuVXJpIiwiZ2V0IiwibWV0YSIsInByaWNlIiwidXRpbHMiLCJmb3JtYXRVbml0cyIsInRvU3RyaW5nIiwiaXRlbSIsInRvTnVtYmVyIiwic2VsbGVyIiwib3duZXIiLCJpbWFnZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIml0ZW1zIiwiYnV5TmZ0IiwibmZ0Iiwid2ViM01vZGFsIiwiY29ubmVjdCIsImNvbm5lY3Rpb24iLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjb250cmFjdCIsInBhcnNlVW5pdHMiLCJjcmVhdGVNYXJrZXRTYWxlIiwidmFsdWUiLCJ0cmFuc2FjdGlvbiIsIndhaXQiLCJsZW5ndGgiLCJtYXhXaWR0aCIsImhlaWdodCIsIm92ZXJmbG93Il0sInNvdXJjZVJvb3QiOiIifQ==