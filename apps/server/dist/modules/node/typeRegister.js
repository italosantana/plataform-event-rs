"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerTypeLoader = exports.nodesField = exports.nodeInterface = exports.nodeField = void 0;

var _graphqlRelay = require("graphql-relay");

const getTypeRegister = () => {
  const typesLoaders = {};

  const getTypesLoaders = () => typesLoaders;

  const registerTypeLoader = (type, load) => {
    typesLoaders[type.name] = {
      type,
      load
    };
    return type;
  };

  const {
    nodeField,
    nodesField,
    nodeInterface
  } = (0, _graphqlRelay.nodeDefinitions)( //@ts-ignore
  (globalId, context) => {
    const {
      type,
      id
    } = (0, _graphqlRelay.fromGlobalId)(globalId);
    const {
      load
    } = typesLoaders[type] || {
      load: null
    };
    return load && load(context, id) || null;
  }, //@ts-ignore
  obj => {
    const {
      type
    } = typesLoaders[obj.constructor.name] || {
      type: null
    };
    return type;
  });
  return {
    registerTypeLoader,
    getTypesLoaders,
    nodeField,
    nodesField,
    nodeInterface
  };
};

const {
  registerTypeLoader,
  nodeInterface,
  nodeField,
  nodesField
} = getTypeRegister();
exports.nodesField = nodesField;
exports.nodeField = nodeField;
exports.nodeInterface = nodeInterface;
exports.registerTypeLoader = registerTypeLoader;
//# sourceMappingURL=typeRegister.js.map