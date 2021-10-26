self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDdmZGViN2JmY2QxY2I1ODU2ZmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbi8vIGltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbi8vIGltcG9ydCBXZWIzTW9kYWwgZnJvbSBcIndlYjNtb2RhbFwiO1xuXG4vLyBpbXBvcnQgeyBuZnRhZGRyZXNzLCBuZnRtYXJrZXRhZGRyZXNzIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuXG4vLyBpbXBvcnQgTkZUIGZyb20gXCIuLi9hcnRpZmFjdHMvY29udHJhY3RzL05GVC5zb2wvTkZULmpzb25cIjtcbi8vIGltcG9ydCBNYXJrZXQgZnJvbSBcIi4uL2FydGlmYWN0cy9jb250cmFjdHMvTkZUTWFya2V0LnNvbC9ORlRNYXJrZXQuanNvblwiO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuLy8gICBjb25zdCBbbmZ0cywgc2V0TmZ0c10gPSB1c2VTdGF0ZShbXSk7XG4vLyAgIGNvbnN0IFtsb2FkaW5nU3RhdGUsIHNldExvYWRpbmdTdGF0ZV0gPSB1c2VTdGF0ZShcIm5vdC1sb2FkZWRcIik7XG5cbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgICBsb2FkTkZUcygpO1xuLy8gICB9LCBbXSk7XG5cbi8vICAgYXN5bmMgZnVuY3Rpb24gbG9hZE5GVHMoKSB7XG4vLyAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5Kc29uUnBjUHJvdmlkZXIoKTtcbi8vICAgICBjb25zdCB0b2tlbkNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChuZnRhZGRyZXNzLCBORlQuYWJpLCBwcm92aWRlcik7XG4vLyAgICAgY29uc3QgbWFya2V0Q29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KFxuLy8gICAgICAgbmZ0bWFya2V0YWRkcmVzcyxcbi8vICAgICAgIE1hcmtldC5hYmksXG4vLyAgICAgICBwcm92aWRlclxuLy8gICAgICk7XG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IG1hcmtldENvbnRyYWN0LmZldGNoTWFya2V0SXRlbXMoKTtcblxuLy8gICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4vLyAgICAgICBkYXRhLm1hcChhc3luYyAoaSkgPT4ge1xuLy8gICAgICAgICBjb25zdCB0b2tlblVyaSA9IGF3YWl0IHRva2VuQ29udHJhY3QudG9rZW5VUkkoaS50b2tlbklkKTtcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlblVyaVwiLCB0b2tlblVyaSk7XG4vLyAgICAgICAgIGNvbnN0IG1ldGEgPSBhd2FpdCBheGlvcy5nZXQodG9rZW5VcmkpO1xuLy8gICAgICAgICBsZXQgcHJpY2UgPSBldGhlcnMudXRpbHMuZm9ybWF0VW5pdHMoaS5wcmljZS50b1N0cmluZygpLCBcImV0aGVyXCIpO1xuLy8gICAgICAgICBsZXQgaXRlbSA9IHtcbi8vICAgICAgICAgICBwcmljZSxcbi8vICAgICAgICAgICB0b2tlbklkOiBpLnRva2VuSWQudG9OdW1iZXIoKSxcbi8vICAgICAgICAgICBzZWxsZXI6IGkuc2VsbGVyLFxuLy8gICAgICAgICAgIG93bmVyOiBpLm93bmVyLFxuLy8gICAgICAgICAgIGltYWdlOiBtZXRhLmRhdGEuaW1hZ2UsXG4vLyAgICAgICAgICAgbmFtZTogbWV0YS5uYW1lLFxuLy8gICAgICAgICAgIGRlc2NyaXB0aW9uOiBtZXRhLmRhdGEuZGVzY3JpcHRpb24sXG4vLyAgICAgICAgIH07XG4vLyAgICAgICAgIHJldHVybiBpdGVtO1xuLy8gICAgICAgfSlcbi8vICAgICApO1xuXG4vLyAgICAgc2V0TmZ0cyhpdGVtcyk7XG4vLyAgICAgc2V0TG9hZGluZ1N0YXRlKFwibG9hZGVkXCIpO1xuLy8gICB9XG5cbi8vICAgYXN5bmMgZnVuY3Rpb24gYnV5TkZUKG5mdCkge1xuLy8gICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKTtcbi8vICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKTtcbi8vICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKTtcblxuLy8gICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuLy8gICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChuZnRtYXJrZXRhZGRyZXNzLCBNYXJrZXQuYWJpLCBzaWduZXIpO1xuXG4vLyAgICAgY29uc3QgcHJpY2UgPSBldGhlcnMudXRpbHMucGFyc2VVbml0cyhuZnQucHJpY2UudG9TdHJpbmcoKSwgXCJldGhlclwiKTtcblxuLy8gICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gYXdhaXQgY29udHJhY3QuY3JlYXRlTWFya2V0U2FsZShcbi8vICAgICAgIG5mdGFkZHJlc3MsXG4vLyAgICAgICBuZnQudG9rZW5JZCxcbi8vICAgICAgIHtcbi8vICAgICAgICAgdmFsdWU6IHByaWNlLFxuLy8gICAgICAgfVxuLy8gICAgICk7XG4vLyAgICAgYXdhaXQgdHJhbnNhY3Rpb24ud2FpdCgpO1xuLy8gICAgIGxvYWRORlRzKCk7XG4vLyAgIH1cbi8vICAgaWYgKGxvYWRpbmdTdGF0ZSA9PT0gXCJsb2FkZWRcIiAmJiAhbmZ0cy5sZW5ndGgpXG4vLyAgICAgcmV0dXJuIDxoMSBjbGFzc05hbWU9XCJweC0yMCBweS0xMCB0ZXh0LTN4bFwiPk5vIGl0ZW1zIGluIG1hcmtldHBsYWNlPC9oMT47XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTRcIiBzdHlsZT17eyBtYXhXaWR0aDogXCIxNjAwcHhcIiB9fT5cbi8vICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC00IHB0LTRcIj5cbi8vICAgICAgICAgICB7bmZ0cy5tYXAoKG5mdCwgaW5kZXgpID0+IChcbi8vICAgICAgICAgICAgIDxkaXZcbi8vICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbi8vICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIHNoYWRvdyByb3VuZGVkLXhsIG92ZXJmbG93LWhpZGRlblwiXG4vLyAgICAgICAgICAgICA+XG4vLyAgICAgICAgICAgICAgIDxpbWcgc3JjPXtuZnQuaW1hZ2V9IC8+XG4vLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4vLyAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3sgaGVpZ2g6IFwiNjRweFwiIH19IGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj5cbi8vICAgICAgICAgICAgICAgICAgIHtuZnQubmFtZX1cbi8vICAgICAgICAgICAgICAgICA8L3A+XG4vLyAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaDogXCI3MHB4XCIsIG92ZXJmbG93OiBcImhpZGRlblwiIH19PlxuLy8gICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiPntuZnQuZGVzY3JpcHRpb259PC9wPlxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYmctYmxhY2tcIj5cbi8vICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi00IGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+XG4vLyAgICAgICAgICAgICAgICAgICB7bmZ0LnByaWNlfSBNYXRpY1xuLy8gICAgICAgICAgICAgICAgIDwvcD5cbi8vICAgICAgICAgICAgICAgICA8YnV0dG9uXG4vLyAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctcGluay01MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC0xMiByb3VuZGVkXCJcbi8vICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGJ1eU5mdChuZnQpfVxuLy8gICAgICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAgICAgIEJ1eVxuLy8gICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuLy8gICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICkpfVxuLy8gICAgICAgICA8L2Rpdj5cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9