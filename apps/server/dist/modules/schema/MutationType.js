"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _graphql = require("graphql");

// import userMutation from "../modules/user/mutations";
const MutationType = new _graphql.GraphQLObjectType({
  name: "Mutation",
  fields: () => ({// ...userMutation,
  })
});
var _default = MutationType;
exports.default = _default;
//# sourceMappingURL=MutationType.js.map