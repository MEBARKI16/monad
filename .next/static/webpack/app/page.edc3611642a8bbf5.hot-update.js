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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _card_ChatBotCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/ChatBotCard */ \"(app-pages-browser)/./src/components/card/ChatBotCard.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst HeroSection = ()=>{\n    _s();\n    const [style, setStyle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const handleMouseMove = (e)=>{\n        const { left, top, width, height } = e.target.getBoundingClientRect();\n        const x = (e.pageX - left) / width * 100;\n        const y = (e.pageY - top) / height * 100;\n        setStyle({\n            transformOrigin: \"\".concat(x, \"% \").concat(y, \"%\"),\n            transform: \"scale(1.5)\" // Effet de mise à l'échelle lors du survol\n        });\n    };\n    const fadeInMotion = {\n        initial: {\n            opacity: 1\n        },\n        animate: {\n            opacity: 1\n        },\n        transition: {\n            duration: 1,\n            ease: \"easeOut\"\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-hidden relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onMouseMove: handleMouseMove,\n                onMouseLeave: ()=>setStyle({}),\n                style: style,\n                className: \"bg-hero-pattern-3 hover:opacity-100 active:scale-300 cursor-pointer transition duration-700 ease-in-out z-10 lg:h-128 sm:h-screen w-full object-cover bg-cover bg-no-repeat relative\"\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 w-full text-center p-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    ...fadeInMotion,\n                    className: \"mx-auto max-w-6xl\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_ChatBotCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-4xl font-semibold mt-20\",\n                            children: [\n                                \"Expertise locale, technologie globale\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 50\n                                }, undefined),\n                                \"Renforcer les industries alg\\xe9riennes avec\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 54\n                                }, undefined),\n                                \"des solutions IA sur mesure\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeroSection, \"rZjudz3f2RTWkpe3ONQ41V2xJBQ=\");\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9TZWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUU4QztBQUNQO0FBQ0M7QUFFeEMsTUFBTUksY0FBYzs7SUFDbEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDLENBQUM7SUFFcEMsTUFBTUksa0JBQWtCLENBQUNDO1FBQ3ZCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxHQUFHLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFLEdBQUdKLEVBQUVLLE1BQU0sQ0FBQ0MscUJBQXFCO1FBQ25FLE1BQU1DLElBQUksQ0FBRVAsRUFBRVEsS0FBSyxHQUFHUCxJQUFHLElBQUtFLFFBQVM7UUFDdkMsTUFBTU0sSUFBSSxDQUFFVCxFQUFFVSxLQUFLLEdBQUdSLEdBQUUsSUFBS0UsU0FBVTtRQUN2Q04sU0FBUztZQUNQYSxpQkFBaUIsR0FBU0YsT0FBTkYsR0FBRSxNQUFNLE9BQUZFLEdBQUU7WUFDNUJHLFdBQVcsYUFBYywyQ0FBMkM7UUFDdEU7SUFDRjtJQUVBLE1BQU1DLGVBQWU7UUFDbkJDLFNBQVM7WUFBRUMsU0FBUztRQUFFO1FBQ3RCQyxTQUFTO1lBQUVELFNBQVM7UUFBRTtRQUN0QkUsWUFBWTtZQUFFQyxVQUFVO1lBQUdDLE1BQU07UUFBVTtJQUM3QztJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQ0NFLGFBQWF2QjtnQkFDYndCLGNBQWMsSUFBTXpCLFNBQVMsQ0FBQztnQkFDOUJELE9BQU9BO2dCQUNQd0IsV0FBVTs7Ozs7OzBCQUdaLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQzVCLGlEQUFNQSxDQUFDMkIsR0FBRztvQkFBRSxHQUFHUCxZQUFZO29CQUFFUSxXQUFVOztzQ0FDdEMsOERBQUM3Qix5REFBV0E7Ozs7O3NDQUNaLDhEQUFDZ0M7NEJBQUdILFdBQVU7O2dDQUErQjs4Q0FDTiw4REFBQ0k7Ozs7O2dDQUFLOzhDQUNGLDhEQUFDQTs7Ozs7Z0NBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8zRDtHQXhDTTdCO0tBQUFBO0FBMENOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9TZWN0aW9uLnRzeD9jNGFhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgQ2hhdEJvdENhcmQgZnJvbSBcIi4uL2NhcmQvQ2hhdEJvdENhcmRcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEhlcm9TZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBbc3R5bGUsIHNldFN0eWxlXSA9IHVzZVN0YXRlKHt9KTtcblxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0IH0gPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCB4ID0gKChlLnBhZ2VYIC0gbGVmdCkgLyB3aWR0aCkgKiAxMDA7XG4gICAgY29uc3QgeSA9ICgoZS5wYWdlWSAtIHRvcCkgLyBoZWlnaHQpICogMTAwO1xuICAgIHNldFN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogYCR7eH0lICR7eX0lYCxcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuNSknICAvLyBFZmZldCBkZSBtaXNlIMOgIGwnw6ljaGVsbGUgbG9ycyBkdSBzdXJ2b2xcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBmYWRlSW5Nb3Rpb24gPSB7XG4gICAgaW5pdGlhbDogeyBvcGFjaXR5OiAxIH0sICAvLyBNYWludGVuaXIgbCdvcGFjaXTDqSBpbml0aWFsZSDDoCAxXG4gICAgYW5pbWF0ZTogeyBvcGFjaXR5OiAxIH0sICAvLyDDiXZpdGVyIGRlIGNoYW5nZXIgbCdvcGFjaXTDqVxuICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEsIGVhc2U6IFwiZWFzZU91dFwiIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZU1vdmV9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0U3R5bGUoe30pfVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIGNsYXNzTmFtZT1cImJnLWhlcm8tcGF0dGVybi0zIGhvdmVyOm9wYWNpdHktMTAwIGFjdGl2ZTpzY2FsZS0zMDAgY3Vyc29yLXBvaW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi03MDAgZWFzZS1pbi1vdXQgei0xMCBsZzpoLTEyOCBzbTpoLXNjcmVlbiB3LWZ1bGwgb2JqZWN0LWNvdmVyIGJnLWNvdmVyIGJnLW5vLXJlcGVhdCByZWxhdGl2ZVwiXG4gICAgICAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHctZnVsbCB0ZXh0LWNlbnRlciBwLTEyXCI+XG4gICAgICAgIDxtb3Rpb24uZGl2IHsuLi5mYWRlSW5Nb3Rpb259IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctNnhsXCI+XG4gICAgICAgICAgPENoYXRCb3RDYXJkIC8+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgbXQtMjBcIj5cbiAgICAgICAgICAgIEV4cGVydGlzZSBsb2NhbGUsIHRlY2hub2xvZ2llIGdsb2JhbGU8YnIgLz5cbiAgICAgICAgICAgIFJlbmZvcmNlciBsZXMgaW5kdXN0cmllcyBhbGfDqXJpZW5uZXMgYXZlYzxiciAvPlxuICAgICAgICAgICAgZGVzIHNvbHV0aW9ucyBJQSBzdXIgbWVzdXJlXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvU2VjdGlvbjtcbiJdLCJuYW1lcyI6WyJDaGF0Qm90Q2FyZCIsIm1vdGlvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJIZXJvU2VjdGlvbiIsInN0eWxlIiwic2V0U3R5bGUiLCJoYW5kbGVNb3VzZU1vdmUiLCJlIiwibGVmdCIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwidGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtIiwiZmFkZUluTW90aW9uIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsImRpdiIsImNsYXNzTmFtZSIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZUxlYXZlIiwiaDIiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/sections/HeroSection.tsx\n"));

/***/ })

});