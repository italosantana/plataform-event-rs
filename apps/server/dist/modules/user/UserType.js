"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserType = exports.UserConnection = void 0;

var _graphql = require("graphql");

var _graphqlRelay = require("graphql-relay");

var _typeRegister = require("../node/typeRegister");

var _UserLoader = require("./UserLoader");

const UserType = new _graphql.GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: (0, _graphqlRelay.globalIdField)('User'),
    name: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
      resolve: user => user.name
    },
    email: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
      resolve: user => user.email
    },
    password: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
      resolve: user => user.password
    }
  }),
  interfaces: () => [_typeRegister.nodeInterface]
});
exports.UserType = UserType;
const UserConnection = (0, _graphqlRelay.connectionDefinitions)({
  name: 'User',
  nodeType: UserType
});
exports.UserConnection = UserConnection;
(0, _typeRegister.registerTypeLoader)(UserType, _UserLoader.load);
//# sourceMappingURL=UserType.js.map