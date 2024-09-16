"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(marketing)/page",{

/***/ "(app-pages-browser)/./components/hero.tsx":
/*!*****************************!*\
  !*** ./components/hero.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Card: function() { return /* binding */ Card; },\n/* harmony export */   Hero: function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-scroll.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ \"(app-pages-browser)/./components/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_HiArrowRight_react_icons_hi2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=HiArrowRight!=!react-icons/hi2 */ \"(app-pages-browser)/./node_modules/react-icons/hi2/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./container */ \"(app-pages-browser)/./components/container.tsx\");\n/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./heading */ \"(app-pages-browser)/./components/heading.tsx\");\n/* harmony import */ var _subheading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subheading */ \"(app-pages-browser)/./components/subheading.tsx\");\n/* harmony import */ var _video_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./video-modal */ \"(app-pages-browser)/./components/video-modal.tsx\");\n/* harmony import */ var _beam__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./beam */ \"(app-pages-browser)/./components/beam/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ Hero,Card auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst Hero = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { scrollYProgress } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_10__.useScroll)({\n        target: containerRef\n    });\n    const [isMobile, setIsMobile] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{\n        const checkMobile = ()=>{\n            setIsMobile(window.innerWidth <= 768);\n        };\n        checkMobile();\n        window.addEventListener(\"resize\", checkMobile);\n        return ()=>{\n            window.removeEventListener(\"resize\", checkMobile);\n        };\n    }, []);\n    const scaleDimensions = ()=>{\n        return isMobile ? [\n            0.7,\n            0.9\n        ] : [\n            1.05,\n            1.2\n        ];\n    };\n    const rotate = (0,framer_motion__WEBPACK_IMPORTED_MODULE_11__.useTransform)(scrollYProgress, [\n        0,\n        0.5\n    ], [\n        20,\n        0\n    ]);\n    const scale = (0,framer_motion__WEBPACK_IMPORTED_MODULE_11__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], scaleDimensions());\n    const translate = (0,framer_motion__WEBPACK_IMPORTED_MODULE_11__.useTransform)(scrollYProgress, [\n        0,\n        1\n    ], [\n        0,\n        100\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        className: \"flex flex-col min-h-[70rem] md:min-h-[100rem] pt-20 md:pt-40 relative overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container__WEBPACK_IMPORTED_MODULE_5__.Container, {\n                className: \"flex  flex-col items-center justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heading__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                        as: \"h1\",\n                        className: \"text-4xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10  py-6\",\n                        children: \"Your Future, Our Focus: Innovative IT Solutions\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shree/projects/RenocrewSolutionsWebsite/components/hero.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_subheading__WEBPACK_IMPORTED_MODULE_7__.Subheading, {\n                        className: \"text-center mt-2 md:mt-6 text-base md:text-xl text-muted dark:text-muted-dark max-w-3xl mx-auto relative z-10\",\n                        children: \"Experience the power of a dedicated technology partner. Collaborate with our team to drive your business forward.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shree/projects/RenocrewSolutionsWebsite/components/hero.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-4 justify-center my-10 relative z-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            className: \"flex space-x-2 items-center group !text-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Book a demo\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shree/projects/RenocrewSolutionsWebsite/components/hero.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_HiArrowRight_react_icons_hi2__WEBPACK_IMPORTED_MODULE_12__.HiArrowRight, {\n                                    className: \"text-black group-hover:translate-x-1 stroke-[1px] h-3 w-3 mt-0.5 transition-transform duration-200\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/shree/projects/RenocrewSolutionsWebsite/components/hero.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/shree/projects/RenocrewSolutionsWebsite/components/hero.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shree/projects/RenocrewSolutionsWebsite/components/hero.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shree/projects/RenocrewSolutionsWebsite/components/hero.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex  items-center justify-center relative p-2 md:p-20 cursor-pointer md:-mt-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full relative\",\n                    style: {\n                        perspective: \"1000px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Card, {\n                        rotate: rotate,\n                        translate: translate,\n                        scale: scale,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            src: \"/dashboard.png\",\n                            alt: \"hero\",\n                            height: 720,\n                            width: 1400,\n                            className: \"mx-auto rounded-md grayscale group-hover:grayscale-0 transition duration-200 object-cover object-left-top h-full  md:object-left-top\",\n                            draggable: false\n                        }, void 0, false, {\n                            fileName: \"/Users/shree/projects/RenocrewSolutionsWebsite/components/hero.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/shree/projects/RenocrewSolutionsWebsite/components/hero.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/shree/projects/RenocrewSolutionsWebsite/components/hero.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/shree/projects/RenocrewSolutionsWebsite/components/hero.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shree/projects/RenocrewSolutionsWebsite/components/hero.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Hero, \"LQGIZEXCEYLoTWb6vcdFmPThGJg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        framer_motion__WEBPACK_IMPORTED_MODULE_10__.useScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_11__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_11__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_11__.useTransform\n    ];\n});\n_c = Hero;\nconst Card = (param)=>{\n    let { rotate, scale, translate, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_13__.motion.div, {\n        style: {\n            rotateX: rotate,\n            translateY: translate,\n            // scale,\n            boxShadow: \"0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003\"\n        },\n        className: \"max-w-6xl z-40 group -mt-12 mx-auto isolate group h-[20rem] md:h-[50rem] w-full border-4 border-neutral-900 p-2 md:p-2 bg-charcoal rounded-[30px] shadow-2xl relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_beam__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                showBeam: true,\n                className: \"-top-1 block\"\n            }, void 0, false, {\n                fileName: \"/Users/shree/projects/RenocrewSolutionsWebsite/components/hero.tsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute h-40 w-full bottom-0 md:-bottom-10 inset-x-0 scale-[1.2] z-20 pointer-events-none bg-charcoal [mask-image:linear-gradient(to_top,white_30%,transparent)]\"\n            }, void 0, false, {\n                fileName: \"/Users/shree/projects/RenocrewSolutionsWebsite/components/hero.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 z-20  bg-transparent group-hover:bg-black/0 transition-all duration-200 flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_video_modal__WEBPACK_IMPORTED_MODULE_8__.VideoModal, {}, void 0, false, {\n                    fileName: \"/Users/shree/projects/RenocrewSolutionsWebsite/components/hero.tsx\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/shree/projects/RenocrewSolutionsWebsite/components/hero.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" h-full w-full  overflow-hidden rounded-2xl bg-transparent md:rounded-2xl md:p-4 \",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/shree/projects/RenocrewSolutionsWebsite/components/hero.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shree/projects/RenocrewSolutionsWebsite/components/hero.tsx\",\n        lineNumber: 104,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Card;\nvar _c, _c1;\n$RefreshReg$(_c, \"Hero\");\n$RefreshReg$(_c1, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaGVyby50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNzQztBQUN1QztBQUNqQztBQUNWO0FBQ2E7QUFDaEI7QUFDUztBQUNKO0FBQ007QUFDQztBQUVqQjtBQUNuQixNQUFNYyxPQUFPOztJQUNsQixNQUFNQyxTQUFTViwwREFBU0E7SUFFeEIsTUFBTVcsZUFBZWYsNkNBQU1BLENBQU07SUFDakMsTUFBTSxFQUFFZ0IsZUFBZSxFQUFFLEdBQUdkLHlEQUFTQSxDQUFDO1FBQ3BDZSxRQUFRRjtJQUNWO0lBQ0EsTUFBTSxDQUFDRyxVQUFVQyxZQUFZLEdBQUdwQixxREFBYyxDQUFDO0lBRS9DQSxzREFBZSxDQUFDO1FBQ2QsTUFBTXVCLGNBQWM7WUFDbEJILFlBQVlJLE9BQU9DLFVBQVUsSUFBSTtRQUNuQztRQUNBRjtRQUNBQyxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUNsQyxPQUFPO1lBQ0xDLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUssa0JBQWtCO1FBQ3RCLE9BQU9ULFdBQVc7WUFBQztZQUFLO1NBQUksR0FBRztZQUFDO1lBQU07U0FBSTtJQUM1QztJQUVBLE1BQU1VLFNBQVN6Qiw0REFBWUEsQ0FBQ2EsaUJBQWlCO1FBQUM7UUFBRztLQUFJLEVBQUU7UUFBQztRQUFJO0tBQUU7SUFDOUQsTUFBTWEsUUFBUTFCLDREQUFZQSxDQUFDYSxpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRVc7SUFDcEQsTUFBTUcsWUFBWTNCLDREQUFZQSxDQUFDYSxpQkFBaUI7UUFBQztRQUFHO0tBQUUsRUFBRTtRQUFDO1FBQUc7S0FBSTtJQUNoRSxxQkFDRSw4REFBQ2U7UUFDQ0MsS0FBS2pCO1FBQ0xrQixXQUFVOzswQkFFViw4REFBQ3pCLGlEQUFTQTtnQkFBQ3lCLFdBQVU7O2tDQUNuQiw4REFBQ3hCLDZDQUFPQTt3QkFDTnlCLElBQUc7d0JBQ0hELFdBQVU7a0NBQ1g7Ozs7OztrQ0FHRCw4REFBQ3ZCLG1EQUFVQTt3QkFBQ3VCLFdBQVU7a0NBQWdIOzs7Ozs7a0NBU3RJLDhEQUFDRjt3QkFBSUUsV0FBVTtrQ0FDYiw0RUFBQzVCLDJDQUFNQTs0QkFBQzRCLFdBQVU7OzhDQUNoQiw4REFBQ0U7OENBQUs7Ozs7OztnQ0FBbUI7OENBQ3pCLDhEQUFDN0IsOEZBQVlBO29DQUFDMkIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSTlCLDhEQUFDRjtnQkFBSUUsV0FBVTswQkFDYiw0RUFBQ0Y7b0JBQ0NFLFdBQVU7b0JBQ1ZHLE9BQU87d0JBQ0xDLGFBQWE7b0JBQ2Y7OEJBRUEsNEVBQUNDO3dCQUFLVixRQUFRQTt3QkFBUUUsV0FBV0E7d0JBQVdELE9BQU9BO2tDQUNqRCw0RUFBQ3RCLGtEQUFLQTs0QkFDSmdDLEtBQU07NEJBQ05DLEtBQUk7NEJBQ0pDLFFBQVE7NEJBQ1JDLE9BQU87NEJBQ1BULFdBQVU7NEJBQ1ZVLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96QixFQUFFO0dBNUVXOUI7O1FBQ0lULHNEQUFTQTtRQUdJRixxREFBU0E7UUFvQnRCQyx3REFBWUE7UUFDYkEsd0RBQVlBO1FBQ1JBLHdEQUFZQTs7O0tBMUJuQlU7QUE4RU4sTUFBTXlCLE9BQU87UUFBQyxFQUNuQlYsTUFBTSxFQUNOQyxLQUFLLEVBQ0xDLFNBQVMsRUFDVGMsUUFBUSxFQU1UO0lBQ0MscUJBQ0UsOERBQUMzQyxrREFBTUEsQ0FBQzhCLEdBQUc7UUFDVEssT0FBTztZQUNMUyxTQUFTakI7WUFDVGtCLFlBQVloQjtZQUNaLFNBQVM7WUFDVGlCLFdBQ0U7UUFDSjtRQUNBZCxXQUFVOzswQkFFViw4REFBQ3JCLDZDQUFJQTtnQkFBQ29DLFFBQVE7Z0JBQUNmLFdBQVU7Ozs7OzswQkFDekIsOERBQUNGO2dCQUFJRSxXQUFVOzs7Ozs7MEJBQ2YsOERBQUNGO2dCQUFJRSxXQUFVOzBCQUNiLDRFQUFDdEIsb0RBQVVBOzs7Ozs7Ozs7OzBCQUViLDhEQUFDb0I7Z0JBQUlFLFdBQVU7MEJBQ1pXOzs7Ozs7Ozs7Ozs7QUFJVCxFQUFFO01BaENXTiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlcm8udHN4PzI1ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb3Rpb25WYWx1ZSwgbW90aW9uLCB1c2VTY3JvbGwsIHVzZVRyYW5zZm9ybSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9idXR0b25cIjtcbmltcG9ydCB7IEhpQXJyb3dSaWdodCB9IGZyb20gXCJyZWFjdC1pY29ucy9oaTJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4vY29udGFpbmVyXCI7XG5pbXBvcnQgeyBIZWFkaW5nIH0gZnJvbSBcIi4vaGVhZGluZ1wiO1xuaW1wb3J0IHsgU3ViaGVhZGluZyB9IGZyb20gXCIuL3N1YmhlYWRpbmdcIjtcbmltcG9ydCB7IFZpZGVvTW9kYWwgfSBmcm9tIFwiLi92aWRlby1tb2RhbFwiO1xuaW1wb3J0IHsgRmVhdHVyZWRJbWFnZXMgfSBmcm9tIFwiLi9mZWF0dXJlZC1pbWFnZXNcIjtcbmltcG9ydCBCZWFtIGZyb20gXCIuL2JlYW1cIjtcbmV4cG9ydCBjb25zdCBIZXJvID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWY8YW55PihudWxsKTtcbiAgY29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVNjcm9sbCh7XG4gICAgdGFyZ2V0OiBjb250YWluZXJSZWYsXG4gIH0pO1xuICBjb25zdCBbaXNNb2JpbGUsIHNldElzTW9iaWxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNoZWNrTW9iaWxlID0gKCkgPT4ge1xuICAgICAgc2V0SXNNb2JpbGUod2luZG93LmlubmVyV2lkdGggPD0gNzY4KTtcbiAgICB9O1xuICAgIGNoZWNrTW9iaWxlKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgY2hlY2tNb2JpbGUpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBjaGVja01vYmlsZSk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNjYWxlRGltZW5zaW9ucyA9ICgpID0+IHtcbiAgICByZXR1cm4gaXNNb2JpbGUgPyBbMC43LCAwLjldIDogWzEuMDUsIDEuMl07XG4gIH07XG5cbiAgY29uc3Qgcm90YXRlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuNV0sIFsyMCwgMF0pO1xuICBjb25zdCBzY2FsZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgc2NhbGVEaW1lbnNpb25zKCkpO1xuICBjb25zdCB0cmFuc2xhdGUgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFswLCAxMDBdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICByZWY9e2NvbnRhaW5lclJlZn1cbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWluLWgtWzcwcmVtXSBtZDptaW4taC1bMTAwcmVtXSBwdC0yMCBtZDpwdC00MCByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIlxuICAgID5cbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiZmxleCAgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgYXM9XCJoMVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC00eGwgbWQ6dGV4dC00eGwgbGc6dGV4dC04eGwgZm9udC1zZW1pYm9sZCBtYXgtdy02eGwgbXgtYXV0byB0ZXh0LWNlbnRlciBtdC02IHJlbGF0aXZlIHotMTAgIHB5LTZcIlxuICAgICAgICA+XG4gICAgICAgICAgWW91ciBGdXR1cmUsIE91ciBGb2N1czogSW5ub3ZhdGl2ZSBJVCBTb2x1dGlvbnNcbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8U3ViaGVhZGluZyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0yIG1kOm10LTYgdGV4dC1iYXNlIG1kOnRleHQteGwgdGV4dC1tdXRlZCBkYXJrOnRleHQtbXV0ZWQtZGFyayBtYXgtdy0zeGwgbXgtYXV0byByZWxhdGl2ZSB6LTEwXCI+XG4gICAgICAgIEV4cGVyaWVuY2UgdGhlIHBvd2VyIG9mIGEgZGVkaWNhdGVkIHRlY2hub2xvZ3kgcGFydG5lci4gXG4gICAgICAgIENvbGxhYm9yYXRlIHdpdGggb3VyIHRlYW0gdG8gZHJpdmUgeW91ciBidXNpbmVzcyBmb3J3YXJkLlxuICAgICAgICA8L1N1YmhlYWRpbmc+XG4gICAgICAgIHsvKiA8RmVhdHVyZWRJbWFnZXNcbiAgICAgICAgICB0ZXh0Q2xhc3NOYW1lPVwibGc6dGV4dC1sZWZ0IHRleHQtY2VudGVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJsZzpqdXN0aWZ5LXN0YXJ0IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgc2hvd1N0YXJzXG4gICAgICAgIC8+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IGp1c3RpZnktY2VudGVyIG15LTEwIHJlbGF0aXZlIHotMTBcIj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yIGl0ZW1zLWNlbnRlciBncm91cCAhdGV4dC1sZ1wiPlxuICAgICAgICAgICAgPHNwYW4+Qm9vayBhIGRlbW88L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgPEhpQXJyb3dSaWdodCBjbGFzc05hbWU9XCJ0ZXh0LWJsYWNrIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTEgc3Ryb2tlLVsxcHhdIGgtMyB3LTMgbXQtMC41IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTIwMFwiIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZSBwLTIgbWQ6cC0yMCBjdXJzb3ItcG9pbnRlciBtZDotbXQtMjBcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCByZWxhdGl2ZVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBlcnNwZWN0aXZlOiBcIjEwMDBweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q2FyZCByb3RhdGU9e3JvdGF0ZX0gdHJhbnNsYXRlPXt0cmFuc2xhdGV9IHNjYWxlPXtzY2FsZX0+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtgL2Rhc2hib2FyZC5wbmdgfVxuICAgICAgICAgICAgICBhbHQ9XCJoZXJvXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PXs3MjB9XG4gICAgICAgICAgICAgIHdpZHRoPXsxNDAwfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIHJvdW5kZWQtbWQgZ3JheXNjYWxlIGdyb3VwLWhvdmVyOmdyYXlzY2FsZS0wIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIG9iamVjdC1jb3ZlciBvYmplY3QtbGVmdC10b3AgaC1mdWxsICBtZDpvYmplY3QtbGVmdC10b3BcIlxuICAgICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgQ2FyZCA9ICh7XG4gIHJvdGF0ZSxcbiAgc2NhbGUsXG4gIHRyYW5zbGF0ZSxcbiAgY2hpbGRyZW4sXG59OiB7XG4gIHJvdGF0ZTogTW90aW9uVmFsdWU8bnVtYmVyPjtcbiAgc2NhbGU6IE1vdGlvblZhbHVlPG51bWJlcj47XG4gIHRyYW5zbGF0ZTogTW90aW9uVmFsdWU8bnVtYmVyPjtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcm90YXRlWDogcm90YXRlLFxuICAgICAgICB0cmFuc2xhdGVZOiB0cmFuc2xhdGUsXG4gICAgICAgIC8vIHNjYWxlLFxuICAgICAgICBib3hTaGFkb3c6XG4gICAgICAgICAgXCIwIDAgIzAwMDAwMDRkLCAwIDlweCAyMHB4ICMwMDAwMDA0YSwgMCAzN3B4IDM3cHggIzAwMDAwMDQyLCAwIDg0cHggNTBweCAjMDAwMDAwMjYsIDAgMTQ5cHggNjBweCAjMDAwMDAwMGEsIDAgMjMzcHggNjVweCAjMDAwMDAwMDNcIixcbiAgICAgIH19XG4gICAgICBjbGFzc05hbWU9XCJtYXgtdy02eGwgei00MCBncm91cCAtbXQtMTIgbXgtYXV0byBpc29sYXRlIGdyb3VwIGgtWzIwcmVtXSBtZDpoLVs1MHJlbV0gdy1mdWxsIGJvcmRlci00IGJvcmRlci1uZXV0cmFsLTkwMCBwLTIgbWQ6cC0yIGJnLWNoYXJjb2FsIHJvdW5kZWQtWzMwcHhdIHNoYWRvdy0yeGwgcmVsYXRpdmVcIlxuICAgID5cbiAgICAgIDxCZWFtIHNob3dCZWFtIGNsYXNzTmFtZT1cIi10b3AtMSBibG9ja1wiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGgtNDAgdy1mdWxsIGJvdHRvbS0wIG1kOi1ib3R0b20tMTAgaW5zZXQteC0wIHNjYWxlLVsxLjJdIHotMjAgcG9pbnRlci1ldmVudHMtbm9uZSBiZy1jaGFyY29hbCBbbWFzay1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG9fdG9wLHdoaXRlXzMwJSx0cmFuc3BhcmVudCldXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCB6LTIwICBiZy10cmFuc3BhcmVudCBncm91cC1ob3ZlcjpiZy1ibGFjay8wIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8VmlkZW9Nb2RhbCAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoLWZ1bGwgdy1mdWxsICBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC0yeGwgYmctdHJhbnNwYXJlbnQgbWQ6cm91bmRlZC0yeGwgbWQ6cC00IFwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwibW90aW9uIiwidXNlU2Nyb2xsIiwidXNlVHJhbnNmb3JtIiwidXNlUm91dGVyIiwiQnV0dG9uIiwiSGlBcnJvd1JpZ2h0IiwiSW1hZ2UiLCJDb250YWluZXIiLCJIZWFkaW5nIiwiU3ViaGVhZGluZyIsIlZpZGVvTW9kYWwiLCJCZWFtIiwiSGVybyIsInJvdXRlciIsImNvbnRhaW5lclJlZiIsInNjcm9sbFlQcm9ncmVzcyIsInRhcmdldCIsImlzTW9iaWxlIiwic2V0SXNNb2JpbGUiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNoZWNrTW9iaWxlIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2NhbGVEaW1lbnNpb25zIiwicm90YXRlIiwic2NhbGUiLCJ0cmFuc2xhdGUiLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJhcyIsInNwYW4iLCJzdHlsZSIsInBlcnNwZWN0aXZlIiwiQ2FyZCIsInNyYyIsImFsdCIsImhlaWdodCIsIndpZHRoIiwiZHJhZ2dhYmxlIiwiY2hpbGRyZW4iLCJyb3RhdGVYIiwidHJhbnNsYXRlWSIsImJveFNoYWRvdyIsInNob3dCZWFtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/hero.tsx\n"));

/***/ })

});