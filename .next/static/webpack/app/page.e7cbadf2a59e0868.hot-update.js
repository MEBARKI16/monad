"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/sections/HeroSection.tsx":
/*!*************************************************!*\
  !*** ./src/components/sections/HeroSection.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _card_ChatBotCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/ChatBotCard */ \"(app-pages-browser)/./src/components/card/ChatBotCard.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst HeroSection = ()=>{\n    _s();\n    const [style, setStyle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const handleMouseMove = (e)=>{\n        const { left, top, width, height } = e.target.getBoundingClientRect();\n        const x = (e.pageX - left) / width * 100;\n        const y = (e.pageY - top) / height * 100;\n        setStyle({\n            transformOrigin: \"\".concat(x, \"% \").concat(y, \"%\"),\n            transform: \"scale(1.5)\" // Scaling effect when hovering\n        });\n    };\n    const fadeInMotion = {\n        initial: {\n            opacity: 0,\n            y: -200\n        },\n        animate: {\n            opacity: 1,\n            y: 0\n        },\n        transition: {\n            duration: 1,\n            ease: \"easeOut\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onMouseMove: handleMouseMove,\n                onMouseLeave: ()=>setStyle({}),\n                style: style,\n                className: \"opacity-65 active:opacity-100 active:scale-300   cursor-vector active:transition duration-700 ease-in-out  active:cursor-all-scroll z-10 lg:h-128 sm:h-screen w-full object-cover bg-cover bg-no-repeat bg-hero-pattern-3 relative imgbg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" absolute top-0 w-full text-center px-6 pt-8 lg:px-8  p-12  \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"  flex flex-col-reverse sm:flex-row sm:justify-start gap-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"z-40 mt-20 relative justify-start gap-x-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                ...fadeInMotion,\n                                delay: 1,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_ChatBotCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"  mx-auto max-w-6xl pt-20 pb-20 sm:py-40 lg:py-48 lg:pb-24\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"relative  z-40 md:-mt-40 ext-dark mb-10 text-4xl font-semibold\",\n                            children: [\n                                \" Local expertise, global technology \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 126\n                                }, undefined),\n                                \"Empower Algerian industries with \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 46\n                                }, undefined),\n                                \"tailored AI solutions\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeroSection, \"rZjudz3f2RTWkpe3ONQ41V2xJBQ=\");\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9TZWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUU4QztBQUVQO0FBQ0M7QUFFeEMsTUFBTUksY0FBYzs7SUFDbEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDLENBQUM7SUFFcEMsTUFBTUksa0JBQWtCLENBQUNDO1FBQ3ZCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxHQUFHLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFLEdBQUdKLEVBQUVLLE1BQU0sQ0FBQ0MscUJBQXFCO1FBQ25FLE1BQU1DLElBQUksQ0FBRVAsRUFBRVEsS0FBSyxHQUFHUCxJQUFHLElBQUtFLFFBQVM7UUFDdkMsTUFBTU0sSUFBSSxDQUFFVCxFQUFFVSxLQUFLLEdBQUdSLEdBQUUsSUFBS0UsU0FBVTtRQUN2Q04sU0FBUztZQUNQYSxpQkFBaUIsR0FBU0YsT0FBTkYsR0FBRSxNQUFNLE9BQUZFLEdBQUU7WUFDNUJHLFdBQVcsYUFBYSwrQkFBK0I7UUFDekQ7SUFDRjtJQUVBLE1BQU1DLGVBQWU7UUFDbkJDLFNBQVM7WUFBRUMsU0FBUztZQUFHTixHQUFHLENBQUM7UUFBSTtRQUMvQk8sU0FBUztZQUFFRCxTQUFTO1lBQUdOLEdBQUc7UUFBRTtRQUM1QlEsWUFBWTtZQUFFQyxVQUFVO1lBQUdDLE1BQU07UUFBVTtJQUM3QztJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlFLGFBQWF2QjtnQkFDaEJ3QixjQUFjLElBQU16QixTQUFTLENBQUM7Z0JBQzlCRCxPQUFPQTtnQkFBT3dCLFdBQVU7Ozs7OzswQkFFMUIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBR2IsNEVBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDNUIsaURBQU1BLENBQUMyQixHQUFHO2dDQUFFLEdBQUdQLFlBQVk7Z0NBQVFXLE9BQU87MENBQ3pDLDRFQUFDaEMseURBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLbEIsOERBQUM0Qjt3QkFBSUMsV0FBVTtrQ0FHYiw0RUFBQ0k7NEJBQUdKLFdBQVU7O2dDQUFpRTs4Q0FBb0MsOERBQUNLOzs7OztnQ0FBSzs4Q0FDdEYsOERBQUNBOzs7OztnQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU25EO0dBakRNOUI7S0FBQUE7QUFtRE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyb1NlY3Rpb24udHN4P2M0YWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBDaGF0Qm90Q2FyZCBmcm9tIFwiLi4vY2FyZC9DaGF0Qm90Q2FyZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIZXJvU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW3N0eWxlLCBzZXRTdHlsZV0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCB9ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9ICgoZS5wYWdlWCAtIGxlZnQpIC8gd2lkdGgpICogMTAwO1xuICAgIGNvbnN0IHkgPSAoKGUucGFnZVkgLSB0b3ApIC8gaGVpZ2h0KSAqIDEwMDtcbiAgICBzZXRTdHlsZSh7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IGAke3h9JSAke3l9JWAsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLjUpJyAvLyBTY2FsaW5nIGVmZmVjdCB3aGVuIGhvdmVyaW5nXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZmFkZUluTW90aW9uID0ge1xuICAgIGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeTogLTIwMCB9LFxuICAgIGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeTogMCB9LFxuICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEsIGVhc2U6IFwiZWFzZU91dFwiIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8ZGl2IG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZU1vdmV9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U3R5bGUoe30pfVxuICAgICAgICBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT1cIm9wYWNpdHktNjUgYWN0aXZlOm9wYWNpdHktMTAwIGFjdGl2ZTpzY2FsZS0zMDAgICBjdXJzb3ItdmVjdG9yIGFjdGl2ZTp0cmFuc2l0aW9uIGR1cmF0aW9uLTcwMCBlYXNlLWluLW91dCAgYWN0aXZlOmN1cnNvci1hbGwtc2Nyb2xsIHotMTAgbGc6aC0xMjggc206aC1zY3JlZW4gdy1mdWxsIG9iamVjdC1jb3ZlciBiZy1jb3ZlciBiZy1uby1yZXBlYXQgYmctaGVyby1wYXR0ZXJuLTMgcmVsYXRpdmUgaW1nYmdcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYWJzb2x1dGUgdG9wLTAgdy1mdWxsIHRleHQtY2VudGVyIHB4LTYgcHQtOCBsZzpweC04ICBwLTEyICBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgIGZsZXggZmxleC1jb2wtcmV2ZXJzZSBzbTpmbGV4LXJvdyBzbTpqdXN0aWZ5LXN0YXJ0IGdhcC04XCI+XG5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei00MCBtdC0yMCByZWxhdGl2ZSBqdXN0aWZ5LXN0YXJ0IGdhcC14LTZcIj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IHsuLi5mYWRlSW5Nb3Rpb259IHsuLi57IGRlbGF5OiAxIH19PlxuICAgICAgICAgICAgICA8Q2hhdEJvdENhcmQgLz5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgIG14LWF1dG8gbWF4LXctNnhsIHB0LTIwIHBiLTIwIHNtOnB5LTQwIGxnOnB5LTQ4IGxnOnBiLTI0XCI+XG5cblxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJyZWxhdGl2ZSAgei00MCBtZDotbXQtNDAgZXh0LWRhcmsgbWItMTAgdGV4dC00eGwgZm9udC1zZW1pYm9sZFwiPiBMb2NhbCBleHBlcnRpc2UsIGdsb2JhbCB0ZWNobm9sb2d5IDxiciAvPlxuICAgICAgICAgICAgRW1wb3dlciBBbGdlcmlhbiBpbmR1c3RyaWVzIHdpdGggPGJyIC8+XG4gICAgICAgICAgICB0YWlsb3JlZCBBSSBzb2x1dGlvbnM8L2gyPlxuXG5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVyb1NlY3Rpb247Il0sIm5hbWVzIjpbIkNoYXRCb3RDYXJkIiwibW90aW9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhlcm9TZWN0aW9uIiwic3R5bGUiLCJzZXRTdHlsZSIsImhhbmRsZU1vdXNlTW92ZSIsImUiLCJsZWZ0IiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJ0YXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwicGFnZVgiLCJ5IiwicGFnZVkiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJ0cmFuc2Zvcm0iLCJmYWRlSW5Nb3Rpb24iLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwiZGl2IiwiY2xhc3NOYW1lIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlTGVhdmUiLCJkZWxheSIsImgyIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/sections/HeroSection.tsx\n"));

/***/ })

});