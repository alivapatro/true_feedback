"use strict";
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
exports.id = "app/api/get-messages/route";
exports.ids = ["app/api/get-messages/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget-messages%2Froute&page=%2Fapi%2Fget-messages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-messages%2Froute.ts&appDir=c%3A%5CUsers%5Caliva%5COneDrive%5CDesktop%5Canonymous%20mssg%5Cama-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=c%3A%5CUsers%5Caliva%5COneDrive%5CDesktop%5Canonymous%20mssg%5Cama-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget-messages%2Froute&page=%2Fapi%2Fget-messages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-messages%2Froute.ts&appDir=c%3A%5CUsers%5Caliva%5COneDrive%5CDesktop%5Canonymous%20mssg%5Cama-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=c%3A%5CUsers%5Caliva%5COneDrive%5CDesktop%5Canonymous%20mssg%5Cama-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var c_Users_aliva_OneDrive_Desktop_anonymous_mssg_ama_app_src_app_api_get_messages_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/get-messages/route.ts */ \"(rsc)/./src/app/api/get-messages/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/get-messages/route\",\n        pathname: \"/api/get-messages\",\n        filename: \"route\",\n        bundlePath: \"app/api/get-messages/route\"\n    },\n    resolvedPagePath: \"c:\\\\Users\\\\aliva\\\\OneDrive\\\\Desktop\\\\anonymous mssg\\\\ama-app\\\\src\\\\app\\\\api\\\\get-messages\\\\route.ts\",\n    nextConfigOutput,\n    userland: c_Users_aliva_OneDrive_Desktop_anonymous_mssg_ama_app_src_app_api_get_messages_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/get-messages/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZnZXQtbWVzc2FnZXMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmdldC1tZXNzYWdlcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmdldC1tZXNzYWdlcyUyRnJvdXRlLnRzJmFwcERpcj1jJTNBJTVDVXNlcnMlNUNhbGl2YSU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q2Fub255bW91cyUyMG1zc2clNUNhbWEtYXBwJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1jJTNBJTVDVXNlcnMlNUNhbGl2YSU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q2Fub255bW91cyUyMG1zc2clNUNhbWEtYXBwJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ21EO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlzdGVyeS1tZXNzYWdlLz82M2I4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcImM6XFxcXFVzZXJzXFxcXGFsaXZhXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcYW5vbnltb3VzIG1zc2dcXFxcYW1hLWFwcFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxnZXQtbWVzc2FnZXNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2dldC1tZXNzYWdlcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2dldC1tZXNzYWdlc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvZ2V0LW1lc3NhZ2VzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiYzpcXFxcVXNlcnNcXFxcYWxpdmFcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxhbm9ueW1vdXMgbXNzZ1xcXFxhbWEtYXBwXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGdldC1tZXNzYWdlc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9nZXQtbWVzc2FnZXMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget-messages%2Froute&page=%2Fapi%2Fget-messages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-messages%2Froute.ts&appDir=c%3A%5CUsers%5Caliva%5COneDrive%5CDesktop%5Canonymous%20mssg%5Cama-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=c%3A%5CUsers%5Caliva%5COneDrive%5CDesktop%5Canonymous%20mssg%5Cama-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/options.ts":
/*!***************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/options.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/dbConnect */ \"(rsc)/./src/lib/dbConnect.ts\");\n/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/model/User */ \"(rsc)/./src/model/User.ts\");\n\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n                try {\n                    const user = await _model_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                        $or: [\n                            {\n                                email: credentials.identifier\n                            },\n                            {\n                                username: credentials.identifier\n                            }\n                        ]\n                    });\n                    if (!user) {\n                        throw new Error(\"No user found with this email\");\n                    }\n                    if (!user.isVerified) {\n                        throw new Error(\"Please verify your account before logging in\");\n                    }\n                    const isPasswordCorrect = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(credentials.password, user.password);\n                    if (isPasswordCorrect) {\n                        return user;\n                    } else {\n                        throw new Error(\"Incorrect password\");\n                    }\n                } catch (err) {\n                    throw new Error(err);\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token._id = user._id?.toString(); // Convert ObjectId to string\n                token.isVerified = user.isVerified;\n                token.isAcceptingMessages = user.isAcceptingMessages;\n                token.username = user.username;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user._id = token._id;\n                session.user.isVerified = token.isVerified;\n                session.user.isAcceptingMessages = token.isAcceptingMessages;\n                session.user.username = token.username;\n            }\n            return session;\n        }\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    secret: process.env.NEXTAUTH_SECRET,\n    pages: {\n        signIn: \"/sign-in\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vb3B0aW9ucy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDa0U7QUFDcEM7QUFDVTtBQUNIO0FBRTlCLE1BQU1JLGNBQStCO0lBQzFDQyxXQUFXO1FBQ1RMLDJFQUFtQkEsQ0FBQztZQUNsQk0sSUFBSTtZQUNKQyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQU87Z0JBQ3RDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBZ0I7Z0JBQzlCLE1BQU1OLDBEQUFTQTtnQkFDZixJQUFJO29CQUNGLE1BQU1ZLE9BQU8sTUFBTVgsbURBQVNBLENBQUNZLE9BQU8sQ0FBQzt3QkFDbkNDLEtBQUs7NEJBQ0g7Z0NBQUVQLE9BQU9ELFlBQVlTLFVBQVU7NEJBQUM7NEJBQ2hDO2dDQUFFQyxVQUFVVixZQUFZUyxVQUFVOzRCQUFDO3lCQUNwQztvQkFDSDtvQkFDQSxJQUFJLENBQUNILE1BQU07d0JBQ1QsTUFBTSxJQUFJSyxNQUFNO29CQUNsQjtvQkFDQSxJQUFJLENBQUNMLEtBQUtNLFVBQVUsRUFBRTt3QkFDcEIsTUFBTSxJQUFJRCxNQUFNO29CQUNsQjtvQkFDQSxNQUFNRSxvQkFBb0IsTUFBTXBCLHVEQUFjLENBQzVDTyxZQUFZSSxRQUFRLEVBQ3BCRSxLQUFLRixRQUFRO29CQUVmLElBQUlTLG1CQUFtQjt3QkFDckIsT0FBT1A7b0JBQ1QsT0FBTzt3QkFDTCxNQUFNLElBQUlLLE1BQU07b0JBQ2xCO2dCQUNGLEVBQUUsT0FBT0ksS0FBVTtvQkFDakIsTUFBTSxJQUFJSixNQUFNSTtnQkFDbEI7WUFDRjtRQUNGO0tBQ0Q7SUFDREMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFWixJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUlksTUFBTUMsR0FBRyxHQUFHYixLQUFLYSxHQUFHLEVBQUVDLFlBQVksNkJBQTZCO2dCQUMvREYsTUFBTU4sVUFBVSxHQUFHTixLQUFLTSxVQUFVO2dCQUNsQ00sTUFBTUcsbUJBQW1CLEdBQUdmLEtBQUtlLG1CQUFtQjtnQkFDcERILE1BQU1SLFFBQVEsR0FBR0osS0FBS0ksUUFBUTtZQUNoQztZQUNBLE9BQU9RO1FBQ1Q7UUFDQSxNQUFNSSxTQUFRLEVBQUVBLE9BQU8sRUFBRUosS0FBSyxFQUFFO1lBQzlCLElBQUlBLE9BQU87Z0JBQ1RJLFFBQVFoQixJQUFJLENBQUNhLEdBQUcsR0FBR0QsTUFBTUMsR0FBRztnQkFDNUJHLFFBQVFoQixJQUFJLENBQUNNLFVBQVUsR0FBR00sTUFBTU4sVUFBVTtnQkFDMUNVLFFBQVFoQixJQUFJLENBQUNlLG1CQUFtQixHQUFHSCxNQUFNRyxtQkFBbUI7Z0JBQzVEQyxRQUFRaEIsSUFBSSxDQUFDSSxRQUFRLEdBQUdRLE1BQU1SLFFBQVE7WUFDeEM7WUFDQSxPQUFPWTtRQUNUO0lBQ0Y7SUFDQUEsU0FBUztRQUNQQyxVQUFVO0lBQ1o7SUFDQUMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0lBQ25DQyxPQUFPO1FBQ0xDLFFBQVE7SUFDVjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXN0ZXJ5LW1lc3NhZ2UvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vb3B0aW9ucy50cz9hMmM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gJ25leHQtYXV0aCc7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcclxuaW1wb3J0IGRiQ29ubmVjdCBmcm9tICdAL2xpYi9kYkNvbm5lY3QnO1xyXG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJ0AvbW9kZWwvVXNlcic7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBpZDogJ2NyZWRlbnRpYWxzJyxcclxuICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcclxuICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICBlbWFpbDogeyBsYWJlbDogJ0VtYWlsJywgdHlwZTogJ3RleHQnIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6ICdQYXNzd29yZCcsIHR5cGU6ICdwYXNzd29yZCcgfSxcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlck1vZGVsLmZpbmRPbmUoe1xyXG4gICAgICAgICAgICAkb3I6IFtcclxuICAgICAgICAgICAgICB7IGVtYWlsOiBjcmVkZW50aWFscy5pZGVudGlmaWVyIH0sXHJcbiAgICAgICAgICAgICAgeyB1c2VybmFtZTogY3JlZGVudGlhbHMuaWRlbnRpZmllciB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyB1c2VyIGZvdW5kIHdpdGggdGhpcyBlbWFpbCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKCF1c2VyLmlzVmVyaWZpZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgdmVyaWZ5IHlvdXIgYWNjb3VudCBiZWZvcmUgbG9nZ2luZyBpbicpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgaXNQYXNzd29yZENvcnJlY3QgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShcclxuICAgICAgICAgICAgY3JlZGVudGlhbHMucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIHVzZXIucGFzc3dvcmRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAoaXNQYXNzd29yZENvcnJlY3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luY29ycmVjdCBwYXNzd29yZCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHRva2VuLl9pZCA9IHVzZXIuX2lkPy50b1N0cmluZygpOyAvLyBDb252ZXJ0IE9iamVjdElkIHRvIHN0cmluZ1xyXG4gICAgICAgIHRva2VuLmlzVmVyaWZpZWQgPSB1c2VyLmlzVmVyaWZpZWQ7XHJcbiAgICAgICAgdG9rZW4uaXNBY2NlcHRpbmdNZXNzYWdlcyA9IHVzZXIuaXNBY2NlcHRpbmdNZXNzYWdlcztcclxuICAgICAgICB0b2tlbi51c2VybmFtZSA9IHVzZXIudXNlcm5hbWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XHJcbiAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIHNlc3Npb24udXNlci5faWQgPSB0b2tlbi5faWQ7XHJcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlzVmVyaWZpZWQgPSB0b2tlbi5pc1ZlcmlmaWVkO1xyXG4gICAgICAgIHNlc3Npb24udXNlci5pc0FjY2VwdGluZ01lc3NhZ2VzID0gdG9rZW4uaXNBY2NlcHRpbmdNZXNzYWdlcztcclxuICAgICAgICBzZXNzaW9uLnVzZXIudXNlcm5hbWUgPSB0b2tlbi51c2VybmFtZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgIH0sXHJcbiAgfSxcclxuICBzZXNzaW9uOiB7XHJcbiAgICBzdHJhdGVneTogJ2p3dCcsXHJcbiAgfSxcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxuICBwYWdlczoge1xyXG4gICAgc2lnbkluOiAnL3NpZ24taW4nLFxyXG4gIH0sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYmNyeXB0IiwiZGJDb25uZWN0IiwiVXNlck1vZGVsIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJpZCIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZE9uZSIsIiRvciIsImlkZW50aWZpZXIiLCJ1c2VybmFtZSIsIkVycm9yIiwiaXNWZXJpZmllZCIsImlzUGFzc3dvcmRDb3JyZWN0IiwiY29tcGFyZSIsImVyciIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwiX2lkIiwidG9TdHJpbmciLCJpc0FjY2VwdGluZ01lc3NhZ2VzIiwic2Vzc2lvbiIsInN0cmF0ZWd5Iiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsInBhZ2VzIiwic2lnbkluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/options.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/get-messages/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/get-messages/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/dbConnect */ \"(rsc)/./src/lib/dbConnect.ts\");\n/* harmony import */ var _model_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/model/User */ \"(rsc)/./src/model/User.ts\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _auth_nextauth_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/[...nextauth]/options */ \"(rsc)/./src/app/api/auth/[...nextauth]/options.ts\");\n\n\n\n\n\nasync function GET(request) {\n    await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(_auth_nextauth_options__WEBPACK_IMPORTED_MODULE_4__.authOptions);\n    const _user = session?.user;\n    if (!session || !_user) {\n        return Response.json({\n            success: false,\n            message: \"Not authenticated\"\n        }, {\n            status: 401\n        });\n    }\n    const userId = new (mongoose__WEBPACK_IMPORTED_MODULE_2___default().Types).ObjectId(_user._id);\n    try {\n        const user = await _model_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aggregate([\n            {\n                $match: {\n                    _id: userId\n                }\n            },\n            {\n                $unwind: \"$messages\"\n            },\n            {\n                $sort: {\n                    \"messages.createdAt\": -1\n                }\n            },\n            {\n                $group: {\n                    _id: \"$_id\",\n                    messages: {\n                        $push: \"$messages\"\n                    }\n                }\n            }\n        ]).exec();\n        if (!user || user.length === 0) {\n            return Response.json({\n                message: \"User not found\",\n                success: false\n            }, {\n                status: 404\n            });\n        }\n        return Response.json({\n            messages: user[0].messages\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"An unexpected error occurred:\", error);\n        return Response.json({\n            message: \"Internal server error\",\n            success: false\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9nZXQtbWVzc2FnZXMvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUNIO0FBQ0w7QUFFa0I7QUFDVTtBQUVyRCxlQUFlSyxJQUFJQyxPQUFnQjtJQUN4QyxNQUFNTiwwREFBU0E7SUFDZixNQUFNTyxVQUFVLE1BQU1KLGdFQUFnQkEsQ0FBQ0MsK0RBQVdBO0lBQ2xELE1BQU1JLFFBQWNELFNBQVNFO0lBRTdCLElBQUksQ0FBQ0YsV0FBVyxDQUFDQyxPQUFPO1FBQ3RCLE9BQU9FLFNBQVNDLElBQUksQ0FDbEI7WUFBRUMsU0FBUztZQUFPQyxTQUFTO1FBQW9CLEdBQy9DO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtJQUNBLE1BQU1DLFNBQVMsSUFBSWIsdURBQWMsQ0FBQ2UsUUFBUSxDQUFDVCxNQUFNVSxHQUFHO0lBQ3BELElBQUk7UUFDRixNQUFNVCxPQUFPLE1BQU1SLG1EQUFTQSxDQUFDa0IsU0FBUyxDQUFDO1lBQ3JDO2dCQUFFQyxRQUFRO29CQUFFRixLQUFLSDtnQkFBTztZQUFFO1lBQzFCO2dCQUFFTSxTQUFTO1lBQVk7WUFDdkI7Z0JBQUVDLE9BQU87b0JBQUUsc0JBQXNCLENBQUM7Z0JBQUU7WUFBRTtZQUN0QztnQkFBRUMsUUFBUTtvQkFBRUwsS0FBSztvQkFBUU0sVUFBVTt3QkFBRUMsT0FBTztvQkFBWTtnQkFBRTtZQUFFO1NBQzdELEVBQUVDLElBQUk7UUFFUCxJQUFJLENBQUNqQixRQUFRQSxLQUFLa0IsTUFBTSxLQUFLLEdBQUc7WUFDOUIsT0FBT2pCLFNBQVNDLElBQUksQ0FDbEI7Z0JBQUVFLFNBQVM7Z0JBQWtCRCxTQUFTO1lBQU0sR0FDNUM7Z0JBQUVFLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE9BQU9KLFNBQVNDLElBQUksQ0FDbEI7WUFBRWEsVUFBVWYsSUFBSSxDQUFDLEVBQUUsQ0FBQ2UsUUFBUTtRQUFDLEdBQzdCO1lBQ0VWLFFBQVE7UUFDVjtJQUVKLEVBQUUsT0FBT2MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsaUNBQWlDQTtRQUMvQyxPQUFPbEIsU0FBU0MsSUFBSSxDQUNsQjtZQUFFRSxTQUFTO1lBQXlCRCxTQUFTO1FBQU0sR0FDbkQ7WUFBRUUsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXN0ZXJ5LW1lc3NhZ2UvLi9zcmMvYXBwL2FwaS9nZXQtbWVzc2FnZXMvcm91dGUudHM/MzkzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gJ0AvbGliL2RiQ29ubmVjdCc7XHJcbmltcG9ydCBVc2VyTW9kZWwgZnJvbSAnQC9tb2RlbC9Vc2VyJztcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJ25leHQtYXV0aCc7XHJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvbmV4dCc7XHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnLi4vYXV0aC9bLi4ubmV4dGF1dGhdL29wdGlvbnMnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XHJcbiAgYXdhaXQgZGJDb25uZWN0KCk7XHJcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4gIGNvbnN0IF91c2VyOiBVc2VyID0gc2Vzc2lvbj8udXNlcjtcclxuXHJcbiAgaWYgKCFzZXNzaW9uIHx8ICFfdXNlcikge1xyXG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdOb3QgYXV0aGVudGljYXRlZCcgfSxcclxuICAgICAgeyBzdGF0dXM6IDQwMSB9XHJcbiAgICApO1xyXG4gIH1cclxuICBjb25zdCB1c2VySWQgPSBuZXcgbW9uZ29vc2UuVHlwZXMuT2JqZWN0SWQoX3VzZXIuX2lkKTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5hZ2dyZWdhdGUoW1xyXG4gICAgICB7ICRtYXRjaDogeyBfaWQ6IHVzZXJJZCB9IH0sXHJcbiAgICAgIHsgJHVud2luZDogJyRtZXNzYWdlcycgfSxcclxuICAgICAgeyAkc29ydDogeyAnbWVzc2FnZXMuY3JlYXRlZEF0JzogLTEgfSB9LFxyXG4gICAgICB7ICRncm91cDogeyBfaWQ6ICckX2lkJywgbWVzc2FnZXM6IHsgJHB1c2g6ICckbWVzc2FnZXMnIH0gfSB9LFxyXG4gICAgXSkuZXhlYygpO1xyXG5cclxuICAgIGlmICghdXNlciB8fCB1c2VyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gUmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IG1lc3NhZ2U6ICdVc2VyIG5vdCBmb3VuZCcsIHN1Y2Nlc3M6IGZhbHNlIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwNCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oXHJcbiAgICAgIHsgbWVzc2FnZXM6IHVzZXJbMF0ubWVzc2FnZXMgfSxcclxuICAgICAge1xyXG4gICAgICAgIHN0YXR1czogMjAwLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkOicsIGVycm9yKTtcclxuICAgIHJldHVybiBSZXNwb25zZS5qc29uKFxyXG4gICAgICB7IG1lc3NhZ2U6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InLCBzdWNjZXNzOiBmYWxzZSB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJVc2VyTW9kZWwiLCJtb25nb29zZSIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsIkdFVCIsInJlcXVlc3QiLCJzZXNzaW9uIiwiX3VzZXIiLCJ1c2VyIiwiUmVzcG9uc2UiLCJqc29uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJ1c2VySWQiLCJUeXBlcyIsIk9iamVjdElkIiwiX2lkIiwiYWdncmVnYXRlIiwiJG1hdGNoIiwiJHVud2luZCIsIiRzb3J0IiwiJGdyb3VwIiwibWVzc2FnZXMiLCIkcHVzaCIsImV4ZWMiLCJsZW5ndGgiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/get-messages/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/dbConnect.ts":
/*!******************************!*\
  !*** ./src/lib/dbConnect.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function dbConnect() {\n    // Check if we have a connection to the database or if it's currently connecting\n    if (connection.isConnected) {\n        console.log(\"Already connected to the database\");\n        return;\n    }\n    try {\n        // Attempt to connect to the database\n        const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI || \"\", {});\n        connection.isConnected = db.connections[0].readyState;\n        console.log(\"Database connected successfully\");\n    } catch (error) {\n        console.error(\"Database connection failed:\", error);\n        // Graceful exit in case of a connection error\n        process.exit(1);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiQ29ubmVjdC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFNaEMsTUFBTUMsYUFBK0IsQ0FBQztBQUV0QyxlQUFlQztJQUNiLGdGQUFnRjtJQUNoRixJQUFJRCxXQUFXRSxXQUFXLEVBQUU7UUFDMUJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaO0lBQ0Y7SUFFQSxJQUFJO1FBQ0YscUNBQXFDO1FBQ3JDLE1BQU1DLEtBQUssTUFBTU4sdURBQWdCLENBQUNRLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxJQUFJLElBQUksQ0FBQztRQUVsRVQsV0FBV0UsV0FBVyxHQUFHRyxHQUFHSyxXQUFXLENBQUMsRUFBRSxDQUFDQyxVQUFVO1FBRXJEUixRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9RLE9BQU87UUFDZFQsUUFBUVMsS0FBSyxDQUFDLCtCQUErQkE7UUFFN0MsOENBQThDO1FBQzlDTCxRQUFRTSxJQUFJLENBQUM7SUFDZjtBQUNGO0FBRUEsaUVBQWVaLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teXN0ZXJ5LW1lc3NhZ2UvLi9zcmMvbGliL2RiQ29ubmVjdC50cz82MGE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG50eXBlIENvbm5lY3Rpb25PYmplY3QgPSB7XHJcbiAgaXNDb25uZWN0ZWQ/OiBudW1iZXI7XHJcbn07XHJcblxyXG5jb25zdCBjb25uZWN0aW9uOiBDb25uZWN0aW9uT2JqZWN0ID0ge307XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBhIGNvbm5lY3Rpb24gdG8gdGhlIGRhdGFiYXNlIG9yIGlmIGl0J3MgY3VycmVudGx5IGNvbm5lY3RpbmdcclxuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgY29uc29sZS5sb2coJ0FscmVhZHkgY29ubmVjdGVkIHRvIHRoZSBkYXRhYmFzZScpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIC8vIEF0dGVtcHQgdG8gY29ubmVjdCB0byB0aGUgZGF0YWJhc2VcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSB8fCAnJywge30pO1xyXG5cclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdEYXRhYmFzZSBjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0RhdGFiYXNlIGNvbm5lY3Rpb24gZmFpbGVkOicsIGVycm9yKTtcclxuXHJcbiAgICAvLyBHcmFjZWZ1bCBleGl0IGluIGNhc2Ugb2YgYSBjb25uZWN0aW9uIGVycm9yXHJcbiAgICBwcm9jZXNzLmV4aXQoMSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJkYkNvbm5lY3QiLCJpc0Nvbm5lY3RlZCIsImNvbnNvbGUiLCJsb2ciLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJlcnJvciIsImV4aXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/dbConnect.ts\n");

/***/ }),

/***/ "(rsc)/./src/model/User.ts":
/*!***************************!*\
  !*** ./src/model/User.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MessageSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    content: {\n        type: String,\n        required: true\n    },\n    createdAt: {\n        type: Date,\n        required: true,\n        default: Date.now\n    }\n});\n// Updated User schema\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Username is required\"\n        ],\n        trim: true,\n        unique: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Email is required\"\n        ],\n        unique: true,\n        match: [\n            /.+\\@.+\\..+/,\n            \"Please use a valid email address\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Password is required\"\n        ]\n    },\n    verifyCode: {\n        type: String,\n        required: [\n            true,\n            \"Verify Code is required\"\n        ]\n    },\n    verifyCodeExpiry: {\n        type: Date,\n        required: [\n            true,\n            \"Verify Code Expiry is required\"\n        ]\n    },\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    isAcceptingMessages: {\n        type: Boolean,\n        default: true\n    },\n    messages: [\n        MessageSchema\n    ]\n});\nconst UserModel = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserModel);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWwvVXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7QUFRdEQsTUFBTUMsZ0JBQWlDLElBQUlELHdEQUFlLENBQUM7SUFDekRHLFNBQVM7UUFDUEMsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FDLFdBQVc7UUFDVEgsTUFBTUk7UUFDTkYsVUFBVTtRQUNWRyxTQUFTRCxLQUFLRSxHQUFHO0lBQ25CO0FBQ0Y7QUFhQSxzQkFBc0I7QUFDdEIsTUFBTUMsYUFBMkIsSUFBSVgsd0RBQWUsQ0FBQztJQUNuRFksVUFBVTtRQUNSUixNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUF1QjtRQUN4Q08sTUFBTTtRQUNOQyxRQUFRO0lBQ1Y7SUFDQUMsT0FBTztRQUNMWCxNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUFvQjtRQUNyQ1EsUUFBUTtRQUNSRSxPQUFPO1lBQUM7WUFBYztTQUFtQztJQUMzRDtJQUNBQyxVQUFVO1FBQ1JiLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXVCO0lBQzFDO0lBQ0FZLFlBQVk7UUFDVmQsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBMEI7SUFDN0M7SUFDQWEsa0JBQWtCO1FBQ2hCZixNQUFNSTtRQUNORixVQUFVO1lBQUM7WUFBTTtTQUFpQztJQUNwRDtJQUNBYyxZQUFZO1FBQ1ZoQixNQUFNaUI7UUFDTlosU0FBUztJQUNYO0lBQ0FhLHFCQUFxQjtRQUNuQmxCLE1BQU1pQjtRQUNOWixTQUFTO0lBQ1g7SUFDQWMsVUFBVTtRQUFDdEI7S0FBYztBQUMzQjtBQUVBLE1BQU11QixZQUNKLHdEQUFnQixDQUFDRSxJQUFJLElBQ3JCMUIscURBQWMsQ0FBTyxRQUFRVztBQUUvQixpRUFBZWEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215c3RlcnktbWVzc2FnZS8uL3NyYy9tb2RlbC9Vc2VyLnRzP2E2Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLCB7IFNjaGVtYSwgRG9jdW1lbnQgfSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lc3NhZ2UgZXh0ZW5kcyBEb2N1bWVudCB7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgY29udGVudDogc3RyaW5nO1xyXG4gIGNyZWF0ZWRBdDogRGF0ZTtcclxufVxyXG5cclxuY29uc3QgTWVzc2FnZVNjaGVtYTogU2NoZW1hPE1lc3NhZ2U+ID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgY29udGVudDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBjcmVhdGVkQXQ6IHtcclxuICAgIHR5cGU6IERhdGUsXHJcbiAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIGRlZmF1bHQ6IERhdGUubm93LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyIGV4dGVuZHMgRG9jdW1lbnQge1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIHZlcmlmeUNvZGU6IHN0cmluZztcclxuICB2ZXJpZnlDb2RlRXhwaXJ5OiBEYXRlOyBcclxuICBpc1ZlcmlmaWVkOiBib29sZWFuO1xyXG4gIGlzQWNjZXB0aW5nTWVzc2FnZXM6IGJvb2xlYW47XHJcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcclxufVxyXG5cclxuLy8gVXBkYXRlZCBVc2VyIHNjaGVtYVxyXG5jb25zdCBVc2VyU2NoZW1hOiBTY2hlbWE8VXNlcj4gPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICB1c2VybmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnVXNlcm5hbWUgaXMgcmVxdWlyZWQnXSxcclxuICAgIHRyaW06IHRydWUsXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgfSxcclxuICBlbWFpbDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnRW1haWwgaXMgcmVxdWlyZWQnXSxcclxuICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgIG1hdGNoOiBbLy4rXFxALitcXC4uKy8sICdQbGVhc2UgdXNlIGEgdmFsaWQgZW1haWwgYWRkcmVzcyddLFxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1Bhc3N3b3JkIGlzIHJlcXVpcmVkJ10sXHJcbiAgfSxcclxuICB2ZXJpZnlDb2RlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogW3RydWUsICdWZXJpZnkgQ29kZSBpcyByZXF1aXJlZCddLFxyXG4gIH0sXHJcbiAgdmVyaWZ5Q29kZUV4cGlyeToge1xyXG4gICAgdHlwZTogRGF0ZSxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1ZlcmlmeSBDb2RlIEV4cGlyeSBpcyByZXF1aXJlZCddLFxyXG4gIH0sXHJcbiAgaXNWZXJpZmllZDoge1xyXG4gICAgdHlwZTogQm9vbGVhbixcclxuICAgIGRlZmF1bHQ6IGZhbHNlLFxyXG4gIH0sXHJcbiAgaXNBY2NlcHRpbmdNZXNzYWdlczoge1xyXG4gICAgdHlwZTogQm9vbGVhbixcclxuICAgIGRlZmF1bHQ6IHRydWUsXHJcbiAgfSxcclxuICBtZXNzYWdlczogW01lc3NhZ2VTY2hlbWFdLFxyXG59KTtcclxuXHJcbmNvbnN0IFVzZXJNb2RlbCA9XHJcbiAgKG1vbmdvb3NlLm1vZGVscy5Vc2VyIGFzIG1vbmdvb3NlLk1vZGVsPFVzZXI+KSB8fFxyXG4gIG1vbmdvb3NlLm1vZGVsPFVzZXI+KCdVc2VyJywgVXNlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTW9kZWw7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1lc3NhZ2VTY2hlbWEiLCJTY2hlbWEiLCJjb250ZW50IiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiY3JlYXRlZEF0IiwiRGF0ZSIsImRlZmF1bHQiLCJub3ciLCJVc2VyU2NoZW1hIiwidXNlcm5hbWUiLCJ0cmltIiwidW5pcXVlIiwiZW1haWwiLCJtYXRjaCIsInBhc3N3b3JkIiwidmVyaWZ5Q29kZSIsInZlcmlmeUNvZGVFeHBpcnkiLCJpc1ZlcmlmaWVkIiwiQm9vbGVhbiIsImlzQWNjZXB0aW5nTWVzc2FnZXMiLCJtZXNzYWdlcyIsIlVzZXJNb2RlbCIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/model/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@babel","vendor-chunks/next-auth","vendor-chunks/bcryptjs","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget-messages%2Froute&page=%2Fapi%2Fget-messages%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget-messages%2Froute.ts&appDir=c%3A%5CUsers%5Caliva%5COneDrive%5CDesktop%5Canonymous%20mssg%5Cama-app%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=c%3A%5CUsers%5Caliva%5COneDrive%5CDesktop%5Canonymous%20mssg%5Cama-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();