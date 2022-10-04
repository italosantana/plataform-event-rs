"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContext = void 0;

var _loaderRegister = require("./modules/loader/loaderRegister");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const getContext = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (ctx) {
    const dataloaders = (0, _loaderRegister.getDataloaders)();
    return {
      req: ctx.req,
      dataloaders,
      user: ctx.user
    };
  });

  return function getContext(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getContext = getContext;
//# sourceMappingURL=getContext.js.map