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

/***/ "./src/modules/node/typeRegister.ts":
/*!******************************************!*\
  !*** ./src/modules/node/typeRegister.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nodeField\": () => (/* binding */ nodeField),\n/* harmony export */   \"nodeInterface\": () => (/* binding */ nodeInterface),\n/* harmony export */   \"nodesField\": () => (/* binding */ nodesField),\n/* harmony export */   \"registerTypeLoader\": () => (/* binding */ registerTypeLoader)\n/* harmony export */ });\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-relay */ \"graphql-relay\");\n/* harmony import */ var graphql_relay__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_relay__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst getTypeRegister = () => {\n  const typesLoaders = {};\n\n  const getTypesLoaders = () => typesLoaders;\n\n  const registerTypeLoader = (type, load) => {\n    typesLoaders[type.name] = {\n      type,\n      load\n    };\n    return type;\n  };\n\n  const {\n    nodeField,\n    nodesField,\n    nodeInterface\n  } = (0,graphql_relay__WEBPACK_IMPORTED_MODULE_0__.nodeDefinitions)( // @ts-ignore\n  (globalId, context) => {\n    const {\n      type,\n      id\n    } = (0,graphql_relay__WEBPACK_IMPORTED_MODULE_0__.fromGlobalId)(globalId);\n    const {\n      load\n    } = typesLoaders[type] || {\n      load: null\n    };\n    return load && load(context, id) || null;\n  }, // @ts-ignore\n  obj => {\n    const {\n      type\n    } = typesLoaders[obj.constructor.name] || {\n      type: null\n    };\n    return type;\n  });\n  return {\n    registerTypeLoader,\n    getTypesLoaders,\n    nodeField,\n    nodesField,\n    nodeInterface\n  };\n};\n\nconst {\n  registerTypeLoader,\n  nodeInterface,\n  nodeField,\n  nodesField\n} = getTypeRegister();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9ub2RlL3R5cGVSZWdpc3Rlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlci8uL3NyYy9tb2R1bGVzL25vZGUvdHlwZVJlZ2lzdGVyLnRzP2JjNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZnJvbUdsb2JhbElkLCBub2RlRGVmaW5pdGlvbnMgfSBmcm9tICdncmFwaHFsLXJlbGF5JztcblxuY29uc3QgZ2V0VHlwZVJlZ2lzdGVyID0gKCkgPT4ge1xuICBjb25zdCB0eXBlc0xvYWRlcnMgPSB7fTtcblxuICBjb25zdCBnZXRUeXBlc0xvYWRlcnMgPSAoKSA9PiB0eXBlc0xvYWRlcnM7XG5cbiAgY29uc3QgcmVnaXN0ZXJUeXBlTG9hZGVyID0gKHR5cGUsIGxvYWQpID0+IHtcbiAgICB0eXBlc0xvYWRlcnNbdHlwZS5uYW1lXSA9IHtcbiAgICAgIHR5cGUsXG4gICAgICBsb2FkXG4gICAgfTtcbiAgICByZXR1cm4gdHlwZTtcbiAgfTtcblxuICBjb25zdCB7XG4gICAgbm9kZUZpZWxkLFxuICAgIG5vZGVzRmllbGQsXG4gICAgbm9kZUludGVyZmFjZVxuICB9ID0gbm9kZURlZmluaXRpb25zKCAvLyBAdHMtaWdub3JlXG4gIChnbG9iYWxJZCwgY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHR5cGUsXG4gICAgICBpZFxuICAgIH0gPSBmcm9tR2xvYmFsSWQoZ2xvYmFsSWQpO1xuICAgIGNvbnN0IHtcbiAgICAgIGxvYWRcbiAgICB9ID0gdHlwZXNMb2FkZXJzW3R5cGVdIHx8IHtcbiAgICAgIGxvYWQ6IG51bGxcbiAgICB9O1xuICAgIHJldHVybiBsb2FkICYmIGxvYWQoY29udGV4dCwgaWQpIHx8IG51bGw7XG4gIH0sIC8vIEB0cy1pZ25vcmVcbiAgb2JqID0+IHtcbiAgICBjb25zdCB7XG4gICAgICB0eXBlXG4gICAgfSA9IHR5cGVzTG9hZGVyc1tvYmouY29uc3RydWN0b3IubmFtZV0gfHwge1xuICAgICAgdHlwZTogbnVsbFxuICAgIH07XG4gICAgcmV0dXJuIHR5cGU7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHJlZ2lzdGVyVHlwZUxvYWRlcixcbiAgICBnZXRUeXBlc0xvYWRlcnMsXG4gICAgbm9kZUZpZWxkLFxuICAgIG5vZGVzRmllbGQsXG4gICAgbm9kZUludGVyZmFjZVxuICB9O1xufTtcblxuY29uc3Qge1xuICByZWdpc3RlclR5cGVMb2FkZXIsXG4gIG5vZGVJbnRlcmZhY2UsXG4gIG5vZGVGaWVsZCxcbiAgbm9kZXNGaWVsZFxufSA9IGdldFR5cGVSZWdpc3RlcigpO1xuZXhwb3J0IHsgcmVnaXN0ZXJUeXBlTG9hZGVyLCBub2RlSW50ZXJmYWNlLCBub2RlRmllbGQsIG5vZGVzRmllbGQgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/node/typeRegister.ts\n");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0678db61673fd0dd9722")
/******/ })();
/******/ 
/******/ }
;