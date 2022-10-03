"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadAll = exports.load = exports.getLoader = exports.clearCache = exports.User = void 0;

var _graphqlMongoHelpers = require("@entria/graphql-mongo-helpers");

var _loaderRegister = require("../loader/loaderRegister");

var _UserModel = require("./UserModel");

const {
  Wrapper: User,
  getLoader,
  clearCache,
  load,
  loadAll
} = (0, _graphqlMongoHelpers.createLoader)({
  model: _UserModel.UserModel,
  loaderName: 'UserLoader',
  isAggregate: true
});
exports.loadAll = loadAll;
exports.load = load;
exports.clearCache = clearCache;
exports.getLoader = getLoader;
exports.User = User;
(0, _loaderRegister.registerLoader)('UserLoader', getLoader);
//# sourceMappingURL=UserLoader.js.map