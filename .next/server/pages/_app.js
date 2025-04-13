/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./context/DashboardAuthContext.js":
/*!*****************************************!*\
  !*** ./context/DashboardAuthContext.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DashboardAuthProvider: () => (/* binding */ DashboardAuthProvider),\n/* harmony export */   useDashboardAuth: () => (/* binding */ useDashboardAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"(pages-dir-node)/./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n// context/DashboardAuthContext.js\n\n\n\nconst DashboardAuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst useDashboardAuth = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DashboardAuthContext);\n};\nfunction DashboardAuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Mbush user-in nga localStorage kur faqja rifreskohet\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"DashboardAuthProvider.useEffect\": ()=>{\n            const storedUser = localStorage.getItem('dashboardUser');\n            if (storedUser) {\n                setUser(JSON.parse(storedUser));\n            }\n        }\n    }[\"DashboardAuthProvider.useEffect\"], []);\n    // Funksioni i login\n    const login = (userData)=>{\n        setUser(userData);\n        localStorage.setItem('dashboardUser', JSON.stringify(userData));\n    };\n    // Funksioni i logout\n    const logout = ()=>{\n        setUser(null);\n        localStorage.removeItem('dashboardUser');\n        router.push('/dashboard/login');\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardAuthContext.Provider, {\n        value: {\n            user,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Graniti\\\\Desktop\\\\clubmeister\\\\context\\\\DashboardAuthContext.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbnRleHQvRGFzaGJvYXJkQXV0aENvbnRleHQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxrQ0FBa0M7O0FBRXFDO0FBQy9CO0FBRXhDLE1BQU1LLHFDQUF1Qkwsb0RBQWFBLENBQUM7QUFFcEMsTUFBTU0sbUJBQW1CO0lBQzlCLE9BQU9MLGlEQUFVQSxDQUFDSTtBQUNwQixFQUFFO0FBRUssU0FBU0Usc0JBQXNCLEVBQUVDLFFBQVEsRUFBRTtJQUNoRCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7SUFDakMsTUFBTVMsU0FBU1Asc0RBQVNBO0lBRXhCLHVEQUF1RDtJQUN2REQsZ0RBQVNBOzJDQUFDO1lBQ1IsTUFBTVMsYUFBYUMsYUFBYUMsT0FBTyxDQUFDO1lBQ3hDLElBQUlGLFlBQVk7Z0JBQ2RGLFFBQVFLLEtBQUtDLEtBQUssQ0FBQ0o7WUFDckI7UUFDRjswQ0FBRyxFQUFFO0lBRUwsb0JBQW9CO0lBQ3BCLE1BQU1LLFFBQVEsQ0FBQ0M7UUFDYlIsUUFBUVE7UUFDUkwsYUFBYU0sT0FBTyxDQUFDLGlCQUFpQkosS0FBS0ssU0FBUyxDQUFDRjtJQUN2RDtJQUVBLHFCQUFxQjtJQUNyQixNQUFNRyxTQUFTO1FBQ2JYLFFBQVE7UUFDUkcsYUFBYVMsVUFBVSxDQUFDO1FBQ3hCWCxPQUFPWSxJQUFJLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDbEIscUJBQXFCbUIsUUFBUTtRQUFDQyxPQUFPO1lBQUVoQjtZQUFNUTtZQUFPSTtRQUFPO2tCQUN6RGI7Ozs7OztBQUdQIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEdyYW5pdGlcXERlc2t0b3BcXGNsdWJtZWlzdGVyXFxjb250ZXh0XFxEYXNoYm9hcmRBdXRoQ29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb250ZXh0L0Rhc2hib2FyZEF1dGhDb250ZXh0LmpzXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBEYXNoYm9hcmRBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRGFzaGJvYXJkQXV0aCA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChEYXNoYm9hcmRBdXRoQ29udGV4dCk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGFzaGJvYXJkQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyBNYnVzaCB1c2VyLWluIG5nYSBsb2NhbFN0b3JhZ2Uga3VyIGZhcWphIHJpZnJlc2tvaGV0XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlZFVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFzaGJvYXJkVXNlcicpO1xyXG4gICAgaWYgKHN0b3JlZFVzZXIpIHtcclxuICAgICAgc2V0VXNlcihKU09OLnBhcnNlKHN0b3JlZFVzZXIpKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIEZ1bmtzaW9uaSBpIGxvZ2luXHJcbiAgY29uc3QgbG9naW4gPSAodXNlckRhdGEpID0+IHtcclxuICAgIHNldFVzZXIodXNlckRhdGEpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Rhc2hib2FyZFVzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpO1xyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmtzaW9uaSBpIGxvZ291dFxyXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZGFzaGJvYXJkVXNlcicpO1xyXG4gICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQvbG9naW4nKTsgXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEYXNoYm9hcmRBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBsb2dpbiwgbG9nb3V0IH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0Rhc2hib2FyZEF1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJEYXNoYm9hcmRBdXRoQ29udGV4dCIsInVzZURhc2hib2FyZEF1dGgiLCJEYXNoYm9hcmRBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwicm91dGVyIiwic3RvcmVkVXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJsb2dpbiIsInVzZXJEYXRhIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./context/DashboardAuthContext.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_DashboardAuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/DashboardAuthContext */ \"(pages-dir-node)/./context/DashboardAuthContext.js\");\n// pages/_app.js\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_DashboardAuthContext__WEBPACK_IMPORTED_MODULE_2__.DashboardAuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Graniti\\\\Desktop\\\\clubmeister\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Graniti\\\\Desktop\\\\clubmeister\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGdCQUFnQjs7QUFDZTtBQUM0QztBQUUzRSxTQUFTQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ3JDLHFCQUNFLDhEQUFDSCxnRkFBcUJBO2tCQUNwQiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QjtBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXEdyYW5pdGlcXERlc2t0b3BcXGNsdWJtZWlzdGVyXFxzcmNcXHBhZ2VzXFxfYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL19hcHAuanNcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi8uLi9jb250ZXh0L0Rhc2hib2FyZEF1dGhDb250ZXh0JztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RGFzaGJvYXJkQXV0aFByb3ZpZGVyPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L0Rhc2hib2FyZEF1dGhQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIkRhc2hib2FyZEF1dGhQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();