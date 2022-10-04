"use strict";

var _http = require("http");

var _app = _interopRequireDefault(require("./app"));

var _database = require("./database");

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_asyncToGenerator(function* () {
  yield (0, _database.connectDatabase)();
  const server = (0, _http.createServer)(_app.default.callback());
  server.listen(_config.config.PORT, () => {
    // eslint-disable-next-line
    console.log(`server running on port :${_config.config.PORT}`);
  });
})();
//# sourceMappingURL=index.js.map