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

/***/ "./components/SearchInput/SearchInput.tsx":
/*!************************************************!*\
  !*** ./components/SearchInput/SearchInput.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst TIME = 300; // ms\nconst SearchInput = (param)=>{\n    let { setQuery  } = param;\n    _s();\n    const [text, setText] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const timer = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();\n    const handleInput = (e)=>{\n        const value = e.currentTarget.value;\n        clearTimeout(timer.current);\n        setText(value);\n        timer.current = setTimeout(()=>{\n            setQuery(value);\n        }, TIME);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: \"h-10 pr-14 md:w-96 rounded-full p-4 text-md bg-zinc-700 text-white focus:outline-none focus:border focus:border-solid focus:border-cyan-200\",\n                type: \"text\",\n                placeholder: \"Search Movie\",\n                value: text,\n                onChange: handleInput\n            }, void 0, false, {\n                fileName: \"/Users/weibenfalk/stuff/3. Own Courses/React-RMDB-v4/rmdb-v5-nextjs13/components/SearchInput/SearchInput.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute right-4 top-9\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: \"relative z-10 w-auto\",\n                    width: 30,\n                    height: 32,\n                    src: \"/tmdb-logo.svg\",\n                    alt: \"tmdb-logo\"\n                }, void 0, false, {\n                    fileName: \"/Users/weibenfalk/stuff/3. Own Courses/React-RMDB-v4/rmdb-v5-nextjs13/components/SearchInput/SearchInput.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/weibenfalk/stuff/3. Own Courses/React-RMDB-v4/rmdb-v5-nextjs13/components/SearchInput/SearchInput.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(SearchInput, \"O8EYcJy7EvyDIEPzDLtgr1IvlDE=\");\n_c = SearchInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchInput);\nvar _c;\n$RefreshReg$(_c, \"SearchInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlYXJjaElucHV0L1NlYXJjaElucHV0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFMEI7QUFDSztBQU0vQixNQUFNRSxPQUFPLEtBQUssS0FBSztBQUV2QixNQUFNQyxjQUFjLFNBQXlCO1FBQXhCLEVBQUVDLFNBQVEsRUFBUzs7SUFDdEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdOLHFEQUFjLENBQUM7SUFDdkMsTUFBTVEsUUFBUVIsbURBQVk7SUFFMUIsTUFBTVUsY0FBYyxDQUFDQyxJQUEyQztRQUM5RCxNQUFNQyxRQUFRRCxFQUFFRSxhQUFhLENBQUNELEtBQUs7UUFFbkNFLGFBQWFOLE1BQU1PLE9BQU87UUFFMUJULFFBQVFNO1FBRVJKLE1BQU1PLE9BQU8sR0FBR0MsV0FBVyxJQUFNO1lBQy9CWixTQUFTUTtRQUNYLEdBQUdWO0lBQ0w7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNlO2dCQUNDQyxXQUFVO2dCQUNWQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaUixPQUFPUDtnQkFDUGdCLFVBQVVYOzs7Ozs7MEJBRVosOERBQUNZO2dCQUFJSixXQUFVOzBCQUNiLDRFQUFDakIsbURBQUtBO29CQUFDaUIsV0FBVTtvQkFBdUJLLE9BQU87b0JBQUlDLFFBQVE7b0JBQUlDLEtBQUk7b0JBQWlCQyxLQUFJOzs7Ozs7Ozs7Ozs7O0FBSWhHO0dBOUJNdkI7S0FBQUE7QUFnQ04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2hJbnB1dC9TZWFyY2hJbnB1dC50c3g/N2JkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNldFF1ZXJ5OiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxzdHJpbmc+Pjtcbn07XG5cbmNvbnN0IFRJTUUgPSAzMDA7IC8vIG1zXG5cbmNvbnN0IFNlYXJjaElucHV0ID0gKHsgc2V0UXVlcnkgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gUmVhY3QudXNlU3RhdGUoJycpO1xuICBjb25zdCB0aW1lciA9IFJlYWN0LnVzZVJlZjxOb2RlSlMuVGltZW91dD4oKTtcblxuICBjb25zdCBoYW5kbGVJbnB1dCA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyLmN1cnJlbnQpO1xuXG4gICAgc2V0VGV4dCh2YWx1ZSk7XG5cbiAgICB0aW1lci5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRRdWVyeSh2YWx1ZSk7XG4gICAgfSwgVElNRSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT0naC0xMCBwci0xNCBtZDp3LTk2IHJvdW5kZWQtZnVsbCBwLTQgdGV4dC1tZCBiZy16aW5jLTcwMCB0ZXh0LXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXIgZm9jdXM6Ym9yZGVyLXNvbGlkIGZvY3VzOmJvcmRlci1jeWFuLTIwMCdcbiAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgcGxhY2Vob2xkZXI9J1NlYXJjaCBNb3ZpZSdcbiAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dH1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgcmlnaHQtNCB0b3AtOSc+XG4gICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIHctYXV0b1wiIHdpZHRoPXszMH0gaGVpZ2h0PXszMn0gc3JjPScvdG1kYi1sb2dvLnN2ZycgYWx0PSd0bWRiLWxvZ28nIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaElucHV0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJUSU1FIiwiU2VhcmNoSW5wdXQiLCJzZXRRdWVyeSIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJ0aW1lciIsInVzZVJlZiIsImhhbmRsZUlucHV0IiwiZSIsInZhbHVlIiwiY3VycmVudFRhcmdldCIsImNsZWFyVGltZW91dCIsImN1cnJlbnQiLCJzZXRUaW1lb3V0IiwiaW5wdXQiLCJjbGFzc05hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImRpdiIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SearchInput/SearchInput.tsx\n"));

/***/ })

});