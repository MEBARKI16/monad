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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _card_ChatBotCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card/ChatBotCard */ \"(app-pages-browser)/./src/components/card/ChatBotCard.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst HeroSection = ()=>{\n    _s();\n    const [style, setStyle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const handleMouseMove = (e)=>{\n        const { left, top, width, height } = e.target.getBoundingClientRect();\n        const x = (e.pageX - left) / width * 100;\n        const y = (e.pageY - top) / height * 100;\n        setStyle({\n            transformOrigin: \"\".concat(x, \"% \").concat(y, \"%\"),\n            transform: \"scale(2)\" // Ajustez le niveau de zoom selon vos besoins\n        });\n    };\n    const handleMouseLeave = ()=>{\n        setStyle({});\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-hidden relative h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onMouseMove: handleMouseMove,\n                onMouseLeave: handleMouseLeave,\n                style: style,\n                className: \"opacity-65 hover:opacity-100 active:scale-300 cursor-pointer transition duration-700 ease-in-out active:cursor-all-scroll z-10 lg:h-128 sm:h-screen w-full object-cover bg-cover bg-no-repeat bg-hero-pattern-3 relative\"\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-0 w-full text-center px-6 pt-8 lg:px-8 p-12 z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto max-w-6xl pt-20 pb-20 sm:py-40 lg:py-48 lg:pb-24\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-4xl font-semibold\",\n                        children: [\n                            \"Local expertise, global technology\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 47\n                            }, undefined),\n                            \"Empower Algerian industries with\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 45\n                            }, undefined),\n                            \"tailored AI solutions\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-0 left-0 p-12 z-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_card_ChatBotCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\wamp64\\\\www\\\\html4\\\\src\\\\components\\\\sections\\\\HeroSection.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeroSection, \"rZjudz3f2RTWkpe3ONQ41V2xJBQ=\");\n_c = HeroSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeroSection);\nvar _c;\n$RefreshReg$(_c, \"HeroSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm9TZWN0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRThDO0FBQ047QUFFeEMsTUFBTUcsY0FBYzs7SUFDbEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFDLENBQUM7SUFFcEMsTUFBTUksa0JBQWtCLENBQUNDO1FBQ3ZCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxHQUFHLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFLEdBQUdKLEVBQUVLLE1BQU0sQ0FBQ0MscUJBQXFCO1FBQ25FLE1BQU1DLElBQUksQ0FBRVAsRUFBRVEsS0FBSyxHQUFHUCxJQUFHLElBQUtFLFFBQVM7UUFDdkMsTUFBTU0sSUFBSSxDQUFFVCxFQUFFVSxLQUFLLEdBQUdSLEdBQUUsSUFBS0UsU0FBVTtRQUN2Q04sU0FBUztZQUNQYSxpQkFBaUIsR0FBU0YsT0FBTkYsR0FBRSxNQUFNLE9BQUZFLEdBQUU7WUFDNUJHLFdBQVcsV0FBVyw4Q0FBOEM7UUFDdEU7SUFDRjtJQUVBLE1BQU1DLG1CQUFtQjtRQUN2QmYsU0FBUyxDQUFDO0lBQ1o7SUFFQSxxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVU7OzBCQUViLDhEQUFDRDtnQkFDQ0UsYUFBYWpCO2dCQUNia0IsY0FBY0o7Z0JBQ2RoQixPQUFPQTtnQkFDUGtCLFdBQVU7Ozs7OzswQkFJWiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRzt3QkFBR0gsV0FBVTs7NEJBQXlCOzBDQUNILDhEQUFDSTs7Ozs7NEJBQUs7MENBQ1IsOERBQUNBOzs7Ozs0QkFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTzVDLDhEQUFDTDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ3RCLHlEQUFXQTs7Ozs7Ozs7Ozs7Ozs7OztBQUlwQjtHQTVDTUc7S0FBQUE7QUE4Q04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvc2VjdGlvbnMvSGVyb1NlY3Rpb24udHN4P2M0YWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBDaGF0Qm90Q2FyZCBmcm9tIFwiLi4vY2FyZC9DaGF0Qm90Q2FyZFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBIZXJvU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW3N0eWxlLCBzZXRTdHlsZV0gPSB1c2VTdGF0ZSh7fSk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGUpID0+IHtcbiAgICBjb25zdCB7IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCB9ID0gZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgeCA9ICgoZS5wYWdlWCAtIGxlZnQpIC8gd2lkdGgpICogMTAwO1xuICAgIGNvbnN0IHkgPSAoKGUucGFnZVkgLSB0b3ApIC8gaGVpZ2h0KSAqIDEwMDtcbiAgICBzZXRTdHlsZSh7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IGAke3h9JSAke3l9JWAsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZSgyKScgLy8gQWp1c3RleiBsZSBuaXZlYXUgZGUgem9vbSBzZWxvbiB2b3MgYmVzb2luc1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0U3R5bGUoe30pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcmVsYXRpdmUgaC1zY3JlZW5cIj5cbiAgICAgIHsvKiBCYWNrZ3JvdW5kIGltYWdlIGNvbnRhaW5lciAqL31cbiAgICAgIDxkaXYgXG4gICAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZU1vdmV9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cbiAgICAgICAgc3R5bGU9e3N0eWxlfSBcbiAgICAgICAgY2xhc3NOYW1lPVwib3BhY2l0eS02NSBob3ZlcjpvcGFjaXR5LTEwMCBhY3RpdmU6c2NhbGUtMzAwIGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24gZHVyYXRpb24tNzAwIGVhc2UtaW4tb3V0IGFjdGl2ZTpjdXJzb3ItYWxsLXNjcm9sbCB6LTEwIGxnOmgtMTI4IHNtOmgtc2NyZWVuIHctZnVsbCBvYmplY3QtY292ZXIgYmctY292ZXIgYmctbm8tcmVwZWF0IGJnLWhlcm8tcGF0dGVybi0zIHJlbGF0aXZlXCJcbiAgICAgID48L2Rpdj5cblxuICAgICAgey8qIFRpdGxlIGFuZCBjb250ZW50IGNvbnRhaW5lciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgdy1mdWxsIHRleHQtY2VudGVyIHB4LTYgcHQtOCBsZzpweC04IHAtMTIgei01MFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctNnhsIHB0LTIwIHBiLTIwIHNtOnB5LTQwIGxnOnB5LTQ4IGxnOnBiLTI0XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIExvY2FsIGV4cGVydGlzZSwgZ2xvYmFsIHRlY2hub2xvZ3k8YnIgLz5cbiAgICAgICAgICAgIEVtcG93ZXIgQWxnZXJpYW4gaW5kdXN0cmllcyB3aXRoPGJyIC8+XG4gICAgICAgICAgICB0YWlsb3JlZCBBSSBzb2x1dGlvbnNcbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogQ2hhdEJvdCBjYXJkICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgcC0xMiB6LTUwXCI+XG4gICAgICAgIDxDaGF0Qm90Q2FyZCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvU2VjdGlvbjtcbiJdLCJuYW1lcyI6WyJDaGF0Qm90Q2FyZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJIZXJvU2VjdGlvbiIsInN0eWxlIiwic2V0U3R5bGUiLCJoYW5kbGVNb3VzZU1vdmUiLCJlIiwibGVmdCIsInRvcCIsIndpZHRoIiwiaGVpZ2h0IiwidGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwidHJhbnNmb3JtT3JpZ2luIiwidHJhbnNmb3JtIiwiaGFuZGxlTW91c2VMZWF2ZSIsImRpdiIsImNsYXNzTmFtZSIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZUxlYXZlIiwiaDIiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/sections/HeroSection.tsx\n"));

/***/ })

});