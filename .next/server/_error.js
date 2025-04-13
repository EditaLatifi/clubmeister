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
exports.id = "/_error";
exports.ids = ["/_error"];
exports.modules = {

/***/ "./context/DashboardAuthContext.js":
/*!*****************************************!*\
  !*** ./context/DashboardAuthContext.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DashboardAuthProvider: () => (/* binding */ DashboardAuthProvider),\n/* harmony export */   useDashboardAuth: () => (/* binding */ useDashboardAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n// context/DashboardAuthContext.js\n\n\n\nconst DashboardAuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nconst useDashboardAuth = ()=>{\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(DashboardAuthContext);\n};\nfunction DashboardAuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Mbush user-in nga localStorage kur faqja rifreskohet\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"DashboardAuthProvider.useEffect\": ()=>{\n            const storedUser = localStorage.getItem('dashboardUser');\n            if (storedUser) {\n                setUser(JSON.parse(storedUser));\n            }\n        }\n    }[\"DashboardAuthProvider.useEffect\"], []);\n    // Funksioni i login\n    const login = (userData)=>{\n        setUser(userData);\n        localStorage.setItem('dashboardUser', JSON.stringify(userData));\n    };\n    // Funksioni i logout\n    const logout = ()=>{\n        setUser(null);\n        localStorage.removeItem('dashboardUser');\n        router.push('/dashboard/login');\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DashboardAuthContext.Provider, {\n        value: {\n            user,\n            login,\n            logout\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Graniti\\\\Desktop\\\\clubmeister\\\\context\\\\DashboardAuthContext.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0Rhc2hib2FyZEF1dGhDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsa0NBQWtDOztBQUVxQztBQUMvQjtBQUV4QyxNQUFNSyxxQ0FBdUJMLG9EQUFhQSxDQUFDO0FBRXBDLE1BQU1NLG1CQUFtQjtJQUM5QixPQUFPTCxpREFBVUEsQ0FBQ0k7QUFDcEIsRUFBRTtBQUVLLFNBQVNFLHNCQUFzQixFQUFFQyxRQUFRLEVBQUU7SUFDaEQsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU1TLFNBQVNQLHNEQUFTQTtJQUV4Qix1REFBdUQ7SUFDdkRELGdEQUFTQTsyQ0FBQztZQUNSLE1BQU1TLGFBQWFDLGFBQWFDLE9BQU8sQ0FBQztZQUN4QyxJQUFJRixZQUFZO2dCQUNkRixRQUFRSyxLQUFLQyxLQUFLLENBQUNKO1lBQ3JCO1FBQ0Y7MENBQUcsRUFBRTtJQUVMLG9CQUFvQjtJQUNwQixNQUFNSyxRQUFRLENBQUNDO1FBQ2JSLFFBQVFRO1FBQ1JMLGFBQWFNLE9BQU8sQ0FBQyxpQkFBaUJKLEtBQUtLLFNBQVMsQ0FBQ0Y7SUFDdkQ7SUFFQSxxQkFBcUI7SUFDckIsTUFBTUcsU0FBUztRQUNiWCxRQUFRO1FBQ1JHLGFBQWFTLFVBQVUsQ0FBQztRQUN4QlgsT0FBT1ksSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ2xCLHFCQUFxQm1CLFFBQVE7UUFBQ0MsT0FBTztZQUFFaEI7WUFBTVE7WUFBT0k7UUFBTztrQkFDekRiOzs7Ozs7QUFHUCIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxHcmFuaXRpXFxEZXNrdG9wXFxjbHVibWVpc3RlclxcY29udGV4dFxcRGFzaGJvYXJkQXV0aENvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29udGV4dC9EYXNoYm9hcmRBdXRoQ29udGV4dC5qc1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgRGFzaGJvYXJkQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZURhc2hib2FyZEF1dGggPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoRGFzaGJvYXJkQXV0aENvbnRleHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERhc2hib2FyZEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gTWJ1c2ggdXNlci1pbiBuZ2EgbG9jYWxTdG9yYWdlIGt1ciBmYXFqYSByaWZyZXNrb2hldFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBzdG9yZWRVc2VyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Rhc2hib2FyZFVzZXInKTtcclxuICAgIGlmIChzdG9yZWRVc2VyKSB7XHJcbiAgICAgIHNldFVzZXIoSlNPTi5wYXJzZShzdG9yZWRVc2VyKSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBGdW5rc2lvbmkgaSBsb2dpblxyXG4gIGNvbnN0IGxvZ2luID0gKHVzZXJEYXRhKSA9PiB7XHJcbiAgICBzZXRVc2VyKHVzZXJEYXRhKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXNoYm9hcmRVc2VyJywgSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpKTtcclxuICB9O1xyXG5cclxuICAvLyBGdW5rc2lvbmkgaSBsb2dvdXRcclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2Rhc2hib2FyZFVzZXInKTtcclxuICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkL2xvZ2luJyk7IFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RGFzaGJvYXJkQXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9naW4sIGxvZ291dCB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9EYXNoYm9hcmRBdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiRGFzaGJvYXJkQXV0aENvbnRleHQiLCJ1c2VEYXNoYm9hcmRBdXRoIiwiRGFzaGJvYXJkQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInJvdXRlciIsInN0b3JlZFVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwibG9naW4iLCJ1c2VyRGF0YSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwicHVzaCIsIlByb3ZpZGVyIiwidmFsdWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/DashboardAuthContext.js\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=.%2Fnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=.%2Fnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"./src/pages/_document.js\");\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"./src/pages/_app.js\");\n/* harmony import */ var _node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules\\next\\dist\\pages\\_error.js */ \"./node_modules/next/dist/pages/_error.js\");\n/* harmony import */ var _node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/_error\",\n        pathname: \"/_error\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    },\n    userland: _node_modules_next_dist_pages_error_js__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTJnBhZ2U9JTJGX2Vycm9yJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGbm9kZV9tb2R1bGVzJTVDbmV4dCU1Q2Rpc3QlNUNwYWdlcyU1Q19lcnJvci5qcyZhYnNvbHV0ZUFwcFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2FwcCZhYnNvbHV0ZURvY3VtZW50UGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZG9jdW1lbnQmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdGO0FBQ2hDO0FBQ0U7QUFDMUQ7QUFDeUQ7QUFDVjtBQUMvQztBQUN5RTtBQUN6RTtBQUNBLGlFQUFlLHdFQUFLLENBQUMsbUVBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sdUJBQXVCLHdFQUFLLENBQUMsbUVBQVE7QUFDckMsdUJBQXVCLHdFQUFLLENBQUMsbUVBQVE7QUFDckMsMkJBQTJCLHdFQUFLLENBQUMsbUVBQVE7QUFDekMsZUFBZSx3RUFBSyxDQUFDLG1FQUFRO0FBQzdCLHdCQUF3Qix3RUFBSyxDQUFDLG1FQUFRO0FBQzdDO0FBQ08sZ0NBQWdDLHdFQUFLLENBQUMsbUVBQVE7QUFDOUMsZ0NBQWdDLHdFQUFLLENBQUMsbUVBQVE7QUFDOUMsaUNBQWlDLHdFQUFLLENBQUMsbUVBQVE7QUFDL0MsZ0NBQWdDLHdFQUFLLENBQUMsbUVBQVE7QUFDOUMsb0NBQW9DLHdFQUFLLENBQUMsbUVBQVE7QUFDekQ7QUFDTyx3QkFBd0Isa0dBQWdCO0FBQy9DO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDhEQUFXO0FBQ3hCLGtCQUFrQixtRUFBZ0I7QUFDbEMsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgYXBwIGFuZCBkb2N1bWVudCBtb2R1bGVzLlxuaW1wb3J0ICogYXMgZG9jdW1lbnQgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fZG9jdW1lbnRcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHBcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL25vZGVfbW9kdWxlc1xcXFxuZXh0XFxcXGRpc3RcXFxccGFnZXNcXFxcX2Vycm9yLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGNvbXBvbmVudCAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgJ2RlZmF1bHQnKTtcbi8vIFJlLWV4cG9ydCBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsICdnZXRTdGF0aWNQcm9wcycpO1xuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gaG9pc3QodXNlcmxhbmQsICdnZXRTdGF0aWNQYXRocycpO1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U2VydmVyU2lkZVByb3BzJyk7XG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsICdjb25maWcnKTtcbmV4cG9ydCBjb25zdCByZXBvcnRXZWJWaXRhbHMgPSBob2lzdCh1c2VybGFuZCwgJ3JlcG9ydFdlYlZpdGFscycpO1xuLy8gUmUtZXhwb3J0IGxlZ2FjeSBtZXRob2RzLlxuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1Byb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1BhdGhzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTdGF0aWNQYXRocycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFN0YXRpY1BhcmFtcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUGFyYW1zJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFNlcnZlclByb3BzJyk7XG5leHBvcnQgY29uc3QgdW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTZXJ2ZXJTaWRlUHJvcHMnKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTLFxuICAgICAgICBwYWdlOiBcIi9fZXJyb3JcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL19lcnJvclwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6ICcnLFxuICAgICAgICBmaWxlbmFtZTogJydcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgLy8gZGVmYXVsdCBleHBvcnQgbWlnaHQgbm90IGV4aXN0IHdoZW4gb3B0aW1pemVkIGZvciBkYXRhIG9ubHlcbiAgICAgICAgQXBwOiBhcHAuZGVmYXVsdCxcbiAgICAgICAgRG9jdW1lbnQ6IGRvY3VtZW50LmRlZmF1bHRcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=.%2Fnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_DashboardAuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/DashboardAuthContext */ \"./context/DashboardAuthContext.js\");\n// pages/_app.js\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_DashboardAuthContext__WEBPACK_IMPORTED_MODULE_2__.DashboardAuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Graniti\\\\Desktop\\\\clubmeister\\\\src\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Graniti\\\\Desktop\\\\clubmeister\\\\src\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxnQkFBZ0I7O0FBQ2U7QUFDNEM7QUFFM0UsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ0gsZ0ZBQXFCQTtrQkFDcEIsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUI7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxHcmFuaXRpXFxEZXNrdG9wXFxjbHVibWVpc3Rlclxcc3JjXFxwYWdlc1xcX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9fYXBwLmpzXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vY29udGV4dC9EYXNoYm9hcmRBdXRoQ29udGV4dCc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERhc2hib2FyZEF1dGhQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9EYXNoYm9hcmRBdXRoUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJEYXNoYm9hcmRBdXRoUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/pages/_document.js":
/*!********************************!*\
  !*** ./src/pages/_document.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Document() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    href: \"https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Poppins:wght@500&display=swap\",\n                    rel: \"stylesheet\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Graniti\\\\Desktop\\\\clubmeister\\\\src\\\\pages\\\\_document.js\",\n                    lineNumber: 7,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Graniti\\\\Desktop\\\\clubmeister\\\\src\\\\pages\\\\_document.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Graniti\\\\Desktop\\\\clubmeister\\\\src\\\\pages\\\\_document.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Graniti\\\\Desktop\\\\clubmeister\\\\src\\\\pages\\\\_document.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Graniti\\\\Desktop\\\\clubmeister\\\\src\\\\pages\\\\_document.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Graniti\\\\Desktop\\\\clubmeister\\\\src\\\\pages\\\\_document.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2RvY3VtZW50LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0RDtBQUU3QyxTQUFTSTtJQUN0QixxQkFDRSw4REFBQ0osK0NBQUlBOzswQkFDSCw4REFBQ0MsK0NBQUlBOzBCQUNILDRFQUFDSTtvQkFDQ0MsTUFBSztvQkFDTEMsS0FBSTs7Ozs7Ozs7Ozs7MEJBR1IsOERBQUNDOztrQ0FDQyw4REFBQ04sK0NBQUlBOzs7OztrQ0FDTCw4REFBQ0MscURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluQiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxHcmFuaXRpXFxEZXNrdG9wXFxjbHVibWVpc3Rlclxcc3JjXFxwYWdlc1xcX2RvY3VtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jdW1lbnQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIdG1sPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDUwMCZmYW1pbHk9UG9wcGluczp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Ym9keT5cclxuICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgIDxOZXh0U2NyaXB0IC8+XHJcbiAgICAgIDwvYm9keT5cclxuICAgIDwvSHRtbD5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJEb2N1bWVudCIsImxpbmsiLCJocmVmIiwicmVsIiwiYm9keSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_document.js\n");

/***/ }),

/***/ "./src/styles/globals.css":
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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
var __webpack_require__ = require("./webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F_error&preferredRegion=&absolutePagePath=.%2Fnode_modules%5Cnext%5Cdist%5Cpages%5C_error.js&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();