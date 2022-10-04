"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUser = exports.generateJwtToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _UserModel = require("./modules/user/UserModel");

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const getUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (token) {
    //@ts-ignore
    if (!token) return null; // TODO: Maybe it should be a crime

    [, token] = token.split('JWT ');

    const decodedToken = _jsonwebtoken.default.verify(token, _config.config.JWT_SECRET);

    const user = yield _UserModel.UserModel.findOne({
      _id: decodedToken.id
    }); //@ts-ignore

    if (!user) return null;
    return user;
  });

  return function getUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUser = getUser;

const generateJwtToken = userId => `JWT ${_jsonwebtoken.default.sign({
  id: userId
}, _config.config.JWT_SECRET)}`;

exports.generateJwtToken = generateJwtToken;
//# sourceMappingURL=auth.js.map