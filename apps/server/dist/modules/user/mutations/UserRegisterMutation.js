"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

var _graphqlRelay = require("graphql-relay");

var _UserModel = require("../UserModel");

var _UserType = require("../UserType");

const _excluded = ["email"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = (0, _graphqlRelay.mutationWithClientMutationId)({
  name: 'UserRegister',
  inputFields: {
    email: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    },
    password: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString)
    }
  },
  mutateAndGetPayload: function () {
    var _ref2 = _asyncToGenerator(function* (_ref) {
      let {
        email
      } = _ref,
          rest = _objectWithoutProperties(_ref, _excluded);

      const hasUser = (yield _UserModel.UserModel.countDocuments({
        email: email.trim()
      })) > 0;

      if (hasUser) {
        throw new Error('This email has been registered. Please try again!');
      }

      const user = new _UserModel.UserModel(_objectSpread(_objectSpread({}, rest), {}, {
        email
      }));
      yield user.save();
      return {
        id: user._id,
        sucess: 'Success!'
      };
    });

    return function mutateAndGetPayload(_x) {
      return _ref2.apply(this, arguments);
    };
  }(),
  outputFields: {
    me: {
      type: _UserType.UserType,
      resolve: function () {
        var _ref3 = _asyncToGenerator(function* ({
          id
        }) {
          return yield _UserModel.UserModel.findById(id);
        });

        return function resolve(_x2) {
          return _ref3.apply(this, arguments);
        };
      }()
    }
  }
});

exports.default = _default;
//# sourceMappingURL=UserRegisterMutation.js.map