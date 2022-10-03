"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userTypeField = exports.userEdgeField = exports.userConnectionField = void 0;

var _graphqlRelay = require("graphql-relay");

var _edgeField = require("../graphql/edgeField");

var UserLoader = _interopRequireWildcard(require("./UserLoader"));

var _UserType = require("./UserType");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const userTypeField = (key = 'user') => ({
  [key]: {
    type: _UserType.UserType,
    resolve: function () {
      var _ref = _asyncToGenerator(function* (obj, args, context) {
        return UserLoader.load(context, obj[key]);
      });

      return function resolve(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }()
  }
});

exports.userTypeField = userTypeField;
const userEdgeField = (0, _edgeField.edgeField)({
  connection: _UserType.UserConnection,
  load: UserLoader.load,
  name: 'User',
  edgeName: 'userEdge'
});
exports.userEdgeField = userEdgeField;

const userConnectionField = () => ({
  me: {
    type: _UserType.UserType,
    args: _objectSpread({}, _graphqlRelay.connectionArgs),
    resolve: (_, args, context) => {
      var _context$user;

      return UserLoader.load(context, (_context$user = context.user) === null || _context$user === void 0 ? void 0 : _context$user._id);
    }
  }
});

exports.userConnectionField = userConnectionField;
//# sourceMappingURL=UserField.js.map