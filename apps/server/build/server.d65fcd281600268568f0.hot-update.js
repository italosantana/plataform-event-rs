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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @koa/router */ \"@koa/router\");\n/* harmony import */ var _koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_koa_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-bodyparser */ \"koa-bodyparser\");\n/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-graphql */ \"koa-graphql\");\n/* harmony import */ var koa_graphql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_graphql__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_koa_cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_modules_schema_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/modules/schema/schema */ \"./src/modules/schema/schema.ts\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ \"./src/config.ts\");\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth */ \"./src/auth.ts\");\n/* harmony import */ var _getContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./getContext */ \"./src/getContext.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\nconst app = new (koa__WEBPACK_IMPORTED_MODULE_0___default())();\nconst router = new (_koa_router__WEBPACK_IMPORTED_MODULE_1___default())();\n\nconst graphQlSettingsPerReq = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (req) {\n    const user = yield (0,_auth__WEBPACK_IMPORTED_MODULE_7__.getUser)(req.header.authorization);\n    return {\n      graphiql: _config__WEBPACK_IMPORTED_MODULE_6__.config.NODE_ENV !== 'production' ? {\n        headerEditorEnabled: true,\n        shouldPersistHeaders: true\n      } : false,\n      schema: _src_modules_schema_schema__WEBPACK_IMPORTED_MODULE_5__.schema,\n      pretty: true,\n      context: (0,_getContext__WEBPACK_IMPORTED_MODULE_8__.getContext)({\n        user\n      }),\n      customFormatErrorFn: ({\n        message,\n        locations,\n        stack\n      }) => {\n        /* eslint-disable no-console */\n        console.log(message);\n        console.log(locations);\n        console.log(stack);\n        /* eslint-enable no-console */\n\n        return {\n          message,\n          locations,\n          stack\n        };\n      }\n    };\n  });\n\n  return function graphQlSettingsPerReq(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nconst graphQlServer = (0,koa_graphql__WEBPACK_IMPORTED_MODULE_3__.graphqlHTTP)(graphQlSettingsPerReq);\nrouter.all('/graphql', graphQlServer);\napp.use(_koa_cors__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(router.routes()).use(router.allowedMethods());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlci8uL3NyYy9hcHAudHM/YWVlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTsgfSB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50czsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpOyBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7IH0gZnVuY3Rpb24gX3Rocm93KGVycikgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTsgfSBfbmV4dCh1bmRlZmluZWQpOyB9KTsgfTsgfVxuXG5pbXBvcnQgS29hIGZyb20gJ2tvYSc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ0Brb2Evcm91dGVyJztcbmltcG9ydCBib2R5cGFyc2VyIGZyb20gJ2tvYS1ib2R5cGFyc2VyJztcbmltcG9ydCB7IGdyYXBocWxIVFRQIH0gZnJvbSAna29hLWdyYXBocWwnO1xuaW1wb3J0IGNvcnMgZnJvbSAnQGtvYS9jb3JzJztcbmltcG9ydCB7IHNjaGVtYSB9IGZyb20gJy4uL3NyYy9tb2R1bGVzL3NjaGVtYS9zY2hlbWEnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgZ2V0VXNlciB9IGZyb20gJy4vYXV0aCc7XG5pbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAnLi9nZXRDb250ZXh0JztcbmNvbnN0IGFwcCA9IG5ldyBLb2EoKTtcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcblxuY29uc3QgZ3JhcGhRbFNldHRpbmdzUGVyUmVxID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvcihmdW5jdGlvbiogKHJlcSkge1xuICAgIGNvbnN0IHVzZXIgPSB5aWVsZCBnZXRVc2VyKHJlcS5oZWFkZXIuYXV0aG9yaXphdGlvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgIGdyYXBoaXFsOiBjb25maWcuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHtcbiAgICAgICAgaGVhZGVyRWRpdG9yRW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgc2hvdWxkUGVyc2lzdEhlYWRlcnM6IHRydWVcbiAgICAgIH0gOiBmYWxzZSxcbiAgICAgIHNjaGVtYSxcbiAgICAgIHByZXR0eTogdHJ1ZSxcbiAgICAgIGNvbnRleHQ6IGdldENvbnRleHQoe1xuICAgICAgICB1c2VyXG4gICAgICB9KSxcbiAgICAgIGN1c3RvbUZvcm1hdEVycm9yRm46ICh7XG4gICAgICAgIG1lc3NhZ2UsXG4gICAgICAgIGxvY2F0aW9ucyxcbiAgICAgICAgc3RhY2tcbiAgICAgIH0pID0+IHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbiAgICAgICAgY29uc29sZS5sb2cobG9jYXRpb25zKTtcbiAgICAgICAgY29uc29sZS5sb2coc3RhY2spO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgbG9jYXRpb25zLFxuICAgICAgICAgIHN0YWNrXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGdyYXBoUWxTZXR0aW5nc1BlclJlcShfeCkge1xuICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCk7XG5cbmNvbnN0IGdyYXBoUWxTZXJ2ZXIgPSBncmFwaHFsSFRUUChncmFwaFFsU2V0dGluZ3NQZXJSZXEpO1xucm91dGVyLmFsbCgnL2dyYXBocWwnLCBncmFwaFFsU2VydmVyKTtcbmFwcC51c2UoY29ycygpKTtcbmFwcC51c2UoYm9keXBhcnNlcigpKTtcbmFwcC51c2Uocm91dGVyLnJvdXRlcygpKS51c2Uocm91dGVyLmFsbG93ZWRNZXRob2RzKCkpO1xuZXhwb3J0IGRlZmF1bHQgYXBwOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/getContext.ts":
/*!***************************!*\
  !*** ./src/getContext.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getContext\": () => (/* binding */ getContext)\n/* harmony export */ });\n/* harmony import */ var _modules_loader_loaderRegister__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/loader/loaderRegister */ \"./src/modules/loader/loaderRegister.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nconst getContext = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator(function* (ctx) {\n    const dataloaders = (0,_modules_loader_loaderRegister__WEBPACK_IMPORTED_MODULE_0__.getDataloaders)();\n    return {\n      req: ctx.req,\n      dataloaders,\n      website: ctx.website\n    };\n  });\n\n  return function getContext(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ2V0Q29udGV4dC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVyLy4vc3JjL2dldENvbnRleHQudHM/ZWNiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTsgfSB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50czsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpOyBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7IH0gZnVuY3Rpb24gX3Rocm93KGVycikgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTsgfSBfbmV4dCh1bmRlZmluZWQpOyB9KTsgfTsgfVxuXG5pbXBvcnQgeyBnZXREYXRhbG9hZGVycyB9IGZyb20gXCIuL21vZHVsZXMvbG9hZGVyL2xvYWRlclJlZ2lzdGVyXCI7XG5leHBvcnQgY29uc3QgZ2V0Q29udGV4dCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IoZnVuY3Rpb24qIChjdHgpIHtcbiAgICBjb25zdCBkYXRhbG9hZGVycyA9IGdldERhdGFsb2FkZXJzKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcTogY3R4LnJlcSxcbiAgICAgIGRhdGFsb2FkZXJzLFxuICAgICAgd2Vic2l0ZTogY3R4LndlYnNpdGVcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4gZnVuY3Rpb24gZ2V0Q29udGV4dChfeCkge1xuICAgIHJldHVybiBfcmVmLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/getContext.ts\n");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0da7cba2fe2f70e4fd5d")
/******/ })();
/******/ 
/******/ }
;