"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "server";
exports.ids = null;
exports.modules = {

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"graphqlSettingsPerReq\": () => (/* binding */ graphqlSettingsPerReq)\n/* harmony export */ });\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-logger */ \"koa-logger\");\n/* harmony import */ var koa_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_logger__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var kcors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kcors */ \"kcors\");\n/* harmony import */ var kcors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(kcors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var koa_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! koa-graphql */ \"koa-graphql\");\n/* harmony import */ var koa_graphql__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(koa_graphql__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! koa-bodyparser */ \"koa-bodyparser\");\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var graphql_playground_middleware_koa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-playground-middleware-koa */ \"graphql-playground-middleware-koa\");\n/* harmony import */ var graphql_playground_middleware_koa__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_playground_middleware_koa__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _src_modules_schema_schema__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/modules/schema/schema */ \"./src/modules/schema/schema.ts\");\n/* harmony import */ var _getContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./getContext */ \"./src/getContext.ts\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth */ \"./src/auth.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config */ \"./src/config.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst router = new (koa_router__WEBPACK_IMPORTED_MODULE_2___default())();\nconst app = new (koa__WEBPACK_IMPORTED_MODULE_1___default())();\napp.use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_6___default()());\napp.on('error', (err, ctx) => {\n  // eslint-disable-next-line\n  console.log(\"app error: \", err);\n});\napp.use(koa_logger__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(kcors__WEBPACK_IMPORTED_MODULE_4___default()());\nrouter.get('/', /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (ctx) {\n    ctx.body = 'OK API';\n  });\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}());\nconst graphqlSettingsPerReq = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator(function* (req) {\n    const user = yield (0,_auth__WEBPACK_IMPORTED_MODULE_10__.getUser)(req.header.authorization);\n    return {\n      graphiql: _config__WEBPACK_IMPORTED_MODULE_11__.config.NODE_ENV !== 'production' ? {\n        headerEditorEnabled: true,\n        shouldPersistHeaders: true\n      } : false,\n      schema: _src_modules_schema_schema__WEBPACK_IMPORTED_MODULE_8__.schema,\n      pretty: true,\n      context: yield (0,_getContext__WEBPACK_IMPORTED_MODULE_9__.getContext)({\n        user\n      }),\n      customFormatErrorFn: ({\n        message,\n        locations,\n        stack\n      }) => {\n        /* eslint-disable no-console */\n        console.log(message);\n        console.log(locations);\n        console.log(stack);\n        /* eslint-enable no-console */\n\n        return {\n          message,\n          locations,\n          stack\n        };\n      }\n    };\n  });\n\n  return function graphqlSettingsPerReq(_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nconst graphqlServer = (0,koa_graphql__WEBPACK_IMPORTED_MODULE_5__.graphqlHTTP)(graphqlSettingsPerReq);\nrouter.all('/graphql', graphqlServer);\nrouter.all('/graphql', graphql_playground_middleware_koa__WEBPACK_IMPORTED_MODULE_7___default()({\n  endpoint: '/graphql' // subscriptionsEndpoint: `ws://localhost:${port}/subscriptions`\n\n}));\napp.use(router.routes()).use(router.allowedMethods());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlci8uL3NyYy9hcHAudHM/YWVlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTsgfSB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50czsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpOyBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7IH0gZnVuY3Rpb24gX3Rocm93KGVycikgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTsgfSBfbmV4dCh1bmRlZmluZWQpOyB9KTsgfTsgfVxuXG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IEtvYSBmcm9tICdrb2EnO1xuaW1wb3J0IFJvdXRlciBmcm9tICdrb2Etcm91dGVyJztcbmltcG9ydCBsb2dnZXIgZnJvbSAna29hLWxvZ2dlcic7XG5pbXBvcnQgY29ycyBmcm9tICdrY29ycyc7XG5pbXBvcnQgeyBncmFwaHFsSFRUUCB9IGZyb20gJ2tvYS1ncmFwaHFsJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2tvYS1ib2R5cGFyc2VyJztcbmltcG9ydCBrb2FQbGF5Z3JvdW5kIGZyb20gJ2dyYXBocWwtcGxheWdyb3VuZC1taWRkbGV3YXJlLWtvYSc7XG5pbXBvcnQgeyBzY2hlbWEgfSBmcm9tICcuLi9zcmMvbW9kdWxlcy9zY2hlbWEvc2NoZW1hJztcbmltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tICcuL2dldENvbnRleHQnO1xuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJy4vYXV0aCc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZpZyc7XG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5jb25zdCBhcHAgPSBuZXcgS29hKCk7XG5hcHAudXNlKGJvZHlQYXJzZXIoKSk7XG5hcHAub24oJ2Vycm9yJywgKGVyciwgY3R4KSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBjb25zb2xlLmxvZyhcImFwcCBlcnJvcjogXCIsIGVycik7XG59KTtcbmFwcC51c2UobG9nZ2VyKCkpO1xuYXBwLnVzZShjb3JzKCkpO1xucm91dGVyLmdldCgnLycsIC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qIChjdHgpIHtcbiAgICBjdHguYm9keSA9ICdPSyBBUEknO1xuICB9KTtcblxuICByZXR1cm4gZnVuY3Rpb24gKF94KSB7XG4gICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKSk7XG5leHBvcnQgY29uc3QgZ3JhcGhxbFNldHRpbmdzUGVyUmVxID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYyID0gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qIChyZXEpIHtcbiAgICBjb25zdCB1c2VyID0geWllbGQgZ2V0VXNlcihyZXEuaGVhZGVyLmF1dGhvcml6YXRpb24pO1xuICAgIHJldHVybiB7XG4gICAgICBncmFwaGlxbDogY29uZmlnLk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB7XG4gICAgICAgIGhlYWRlckVkaXRvckVuYWJsZWQ6IHRydWUsXG4gICAgICAgIHNob3VsZFBlcnNpc3RIZWFkZXJzOiB0cnVlXG4gICAgICB9IDogZmFsc2UsXG4gICAgICBzY2hlbWEsXG4gICAgICBwcmV0dHk6IHRydWUsXG4gICAgICBjb250ZXh0OiB5aWVsZCBnZXRDb250ZXh0KHtcbiAgICAgICAgdXNlclxuICAgICAgfSksXG4gICAgICBjdXN0b21Gb3JtYXRFcnJvckZuOiAoe1xuICAgICAgICBtZXNzYWdlLFxuICAgICAgICBsb2NhdGlvbnMsXG4gICAgICAgIHN0YWNrXG4gICAgICB9KSA9PiB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9ucyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0YWNrKTtcbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgIGxvY2F0aW9ucyxcbiAgICAgICAgICBzdGFja1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiBmdW5jdGlvbiBncmFwaHFsU2V0dGluZ3NQZXJSZXEoX3gyKSB7XG4gICAgcmV0dXJuIF9yZWYyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCk7XG5jb25zdCBncmFwaHFsU2VydmVyID0gZ3JhcGhxbEhUVFAoZ3JhcGhxbFNldHRpbmdzUGVyUmVxKTtcbnJvdXRlci5hbGwoJy9ncmFwaHFsJywgZ3JhcGhxbFNlcnZlcik7XG5yb3V0ZXIuYWxsKCcvZ3JhcGhxbCcsIGtvYVBsYXlncm91bmQoe1xuICBlbmRwb2ludDogJy9ncmFwaHFsJyAvLyBzdWJzY3JpcHRpb25zRW5kcG9pbnQ6IGB3czovL2xvY2FsaG9zdDoke3BvcnR9L3N1YnNjcmlwdGlvbnNgXG5cbn0pKTtcbmFwcC51c2Uocm91dGVyLnJvdXRlcygpKS51c2Uocm91dGVyLmFsbG93ZWRNZXRob2RzKCkpO1xuZXhwb3J0IGRlZmF1bHQgYXBwOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("dd540adb9529cf2b894b")
/******/ })();
/******/ 
/******/ }
;