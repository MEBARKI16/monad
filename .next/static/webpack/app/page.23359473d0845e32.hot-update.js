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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _card_ChatBotCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/ChatBotCard */ \"(app-pages-browser)/./src/components/card/ChatBotCard.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst HeroSection = ()=>{\n    _s();\n    const [style, setStyle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    // This function updates the transform origin based on mouse position\n    const handleMouseMove = (e)=>{\n        const { left, top, width, height } = e.target.getBoundingClientRect();\n        const x = (e.pageX - left) / width * 100;\n        const y = (e.pageY - top) / height * 100;\n        setStyle({\n            transformOrigin: \"\".concat(x, \"% \").concat(y, \"%\"),\n            transform: \"scale(2.5)\" // Scaling effect when hovering\n        });\n    };\n    const fadeInMotion = {\n        initial: {\n            opacity: 0,\n            y: -200\n        },\n        animate: {\n            opacity: 1,\n            y: 0\n        },\n        transition: {\n            duration: 1,\n            ease: \"easeOut\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-hidden relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onMouseMove: handleMouseMove,\n                onMouseLeave: ()=>setStyle({}),\n                style: style,\n                className: \"text-center px-6 pt-8 lg:px-8  p-12  bg-hero-pattern-3 opacity-65 hover:opacity-100 active:scale-300 cursor-pointer transition duration-700 ease-in-out z-10 lg:h-128 sm:h-screen w-full object-cover bg-cover bg-no-repeat relative\"\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" absolute top-0 w-full text-center px-6 pt-8 lg:px-8  p-12  \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"  flex flex-col-reverse sm:flex-row sm:justify-start gap-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"z-40 mt-20 relative justify-start gap-x-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                                ...fadeInMotion,\n                                delay: 1,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_ChatBotCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto max-w-6xl pb-20 sm:py-40 lg:py-48 lg:pb-24\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"relative z-40 ext-dark mb-10 text-4xl font-semibold\",\n                            style: {\n                                display: \"inline-block\",\n                                marginTop: \"-200px\"\n                            },\n                            children: [\n                                \" Local expertise, global technology \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 171\n                                }, undefined),\n                                \"Empower Algerian industries with \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 46\n                                }, undefined),\n                                \"tailored AI solutions\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                lineNumber: 36,\n                columnNumber: 10\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeroSection, \"rZjudz3f2RTWkpe3ONQ41V2xJBQ=\");\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9TZWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUU4QztBQUVQO0FBQ0M7QUFFeEMsTUFBTUksY0FBYzs7SUFDbEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDLENBQUM7SUFFcEMscUVBQXFFO0lBQ3JFLE1BQU1JLGtCQUFrQixDQUFDQztRQUN2QixNQUFNLEVBQUVDLElBQUksRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRSxHQUFHSixFQUFFSyxNQUFNLENBQUNDLHFCQUFxQjtRQUNuRSxNQUFNQyxJQUFJLENBQUVQLEVBQUVRLEtBQUssR0FBR1AsSUFBRyxJQUFLRSxRQUFTO1FBQ3ZDLE1BQU1NLElBQUksQ0FBRVQsRUFBRVUsS0FBSyxHQUFHUixHQUFFLElBQUtFLFNBQVU7UUFDdkNOLFNBQVM7WUFDUGEsaUJBQWlCLEdBQVNGLE9BQU5GLEdBQUUsTUFBTSxPQUFGRSxHQUFFO1lBQzVCRyxXQUFXLGFBQWEsK0JBQStCO1FBQ3pEO0lBQ0Y7SUFFQSxNQUFNQyxlQUFlO1FBQ25CQyxTQUFTO1lBQUVDLFNBQVM7WUFBR04sR0FBRyxDQUFDO1FBQUk7UUFDL0JPLFNBQVM7WUFBRUQsU0FBUztZQUFHTixHQUFHO1FBQUU7UUFDNUJRLFlBQVk7WUFBRUMsVUFBVTtZQUFHQyxNQUFNO1FBQVU7SUFDN0M7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUNDRSxhQUFhdkI7Z0JBQ2J3QixjQUFjLElBQU16QixTQUFTLENBQUM7Z0JBQzlCRCxPQUFPQTtnQkFDUHdCLFdBQVU7Ozs7OzswQkFFVCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNoQiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBR2IsNEVBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDNUIsaURBQU1BLENBQUMyQixHQUFHO2dDQUFFLEdBQUdQLFlBQVk7Z0NBQVFXLE9BQU87MENBQ3pDLDRFQUFDaEMseURBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FLbEIsOERBQUM0Qjt3QkFBSUMsV0FBVTtrQ0FHYiw0RUFBQ0k7NEJBQUdKLFdBQVU7NEJBQXNEeEIsT0FBTztnQ0FBRTZCLFNBQVM7Z0NBQWdCQyxXQUFVOzRCQUFTOztnQ0FBRzs4Q0FBb0MsOERBQUNDOzs7OztnQ0FBSzs4Q0FDbkksOERBQUNBOzs7OztnQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU25EO0dBcERNaEM7S0FBQUE7QUFzRE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyb1NlY3Rpb24udHN4P2M0YWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBDaGF0Qm90Q2FyZCBmcm9tIFwiLi4vY2FyZC9DaGF0Qm90Q2FyZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIZXJvU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW3N0eWxlLCBzZXRTdHlsZV0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiB1cGRhdGVzIHRoZSB0cmFuc2Zvcm0gb3JpZ2luIGJhc2VkIG9uIG1vdXNlIHBvc2l0aW9uXG4gIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQgfSA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHggPSAoKGUucGFnZVggLSBsZWZ0KSAvIHdpZHRoKSAqIDEwMDtcbiAgICBjb25zdCB5ID0gKChlLnBhZ2VZIC0gdG9wKSAvIGhlaWdodCkgKiAxMDA7XG4gICAgc2V0U3R5bGUoe1xuICAgICAgdHJhbnNmb3JtT3JpZ2luOiBgJHt4fSUgJHt5fSVgLFxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMi41KScgLy8gU2NhbGluZyBlZmZlY3Qgd2hlbiBob3ZlcmluZ1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGZhZGVJbk1vdGlvbiA9IHtcbiAgICBpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHk6IC0yMDAgfSxcbiAgICBhbmltYXRlOiB7IG9wYWNpdHk6IDEsIHk6IDAgfSxcbiAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAxLCBlYXNlOiBcImVhc2VPdXRcIiB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiByZWxhdGl2ZVwiPlxuICAgICAgPGRpdlxuICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfVxuICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldFN0eWxlKHt9KX1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweC02IHB0LTggbGc6cHgtOCAgcC0xMiAgYmctaGVyby1wYXR0ZXJuLTMgb3BhY2l0eS02NSBob3ZlcjpvcGFjaXR5LTEwMCBhY3RpdmU6c2NhbGUtMzAwIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24gZHVyYXRpb24tNzAwIGVhc2UtaW4tb3V0IHotMTAgbGc6aC0xMjggc206aC1zY3JlZW4gdy1mdWxsIG9iamVjdC1jb3ZlciBiZy1jb3ZlciBiZy1uby1yZXBlYXQgcmVsYXRpdmVcIlxuICAgICAgLz5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGFic29sdXRlIHRvcC0wIHctZnVsbCB0ZXh0LWNlbnRlciBweC02IHB0LTggbGc6cHgtOCAgcC0xMiAgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiICBmbGV4IGZsZXgtY29sLXJldmVyc2Ugc206ZmxleC1yb3cgc206anVzdGlmeS1zdGFydCBnYXAtOFwiPlxuXG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInotNDAgbXQtMjAgcmVsYXRpdmUganVzdGlmeS1zdGFydCBnYXAteC02XCI+XG4gICAgICAgICAgICA8bW90aW9uLmRpdiB7Li4uZmFkZUluTW90aW9ufSB7Li4ueyBkZWxheTogMSB9fT5cbiAgICAgICAgICAgICAgPENoYXRCb3RDYXJkIC8+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy02eGwgcGItMjAgc206cHktNDAgbGc6cHktNDggbGc6cGItMjRcIj5cblxuXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotNDAgZXh0LWRhcmsgbWItMTAgdGV4dC00eGwgZm9udC1zZW1pYm9sZFwiIHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCBtYXJnaW5Ub3A6Jy0yMDBweCcgfX0+IExvY2FsIGV4cGVydGlzZSwgZ2xvYmFsIHRlY2hub2xvZ3kgPGJyIC8+XG4gICAgICAgICAgICBFbXBvd2VyIEFsZ2VyaWFuIGluZHVzdHJpZXMgd2l0aCA8YnIgLz5cbiAgICAgICAgICAgIHRhaWxvcmVkIEFJIHNvbHV0aW9uczwvaDI+XG5cblxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvU2VjdGlvbjtcbiJdLCJuYW1lcyI6WyJDaGF0Qm90Q2FyZCIsIm1vdGlvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJIZXJvU2VjdGlvbiIsInN0eWxlIiwic2V0U3R5bGUiLCJoYW5kbGVNb3VzZU1vdmUiLCJlIiwibGVmdCIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwidGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtIiwiZmFkZUluTW90aW9uIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImRpdiIsImNsYXNzTmFtZSIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZUxlYXZlIiwiZGVsYXkiLCJoMiIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/sections/HeroSection.tsx\n"));

/***/ })

});