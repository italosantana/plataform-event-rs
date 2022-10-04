import { GraphQLObjectType } from 'graphql';

import { fromGlobalId, nodeDefinitions } from 'graphql-relay';

import { GraphQLContext } from '../graphql/types';

type Load = (context: GraphQLContext, id: string) => any;
type TypeLoaders = {
  [key: string]: {
    type: GraphQLObjectType;
    load: Load;
  };
};

const getTypeRegister = () => {
  const typesLoaders: TypeLoaders = {};

  const getTypesLoaders = () => typesLoaders;

  const registerTypeLoader = (type: GraphQLObjectType, load: Load) => {
    typesLoaders[type.name] = {
      type,
      load,
    };

    return type;
  };

  const { nodeField, nodesField, nodeInterface } = nodeDefinitions(
    // @ts-ignore
    (globalId, context: GraphQLContext) => {
      const { type, id } = fromGlobalId(globalId);

      const { load } = typesLoaders[type] || { load: null };

      return (load && load(context, id)) || null;
    },
    // @ts-ignore
    obj => {
      const { type } = typesLoaders[obj.constructor.name] || { type: null };

      return type;
    },
  );

  return {
    registerTypeLoader,
    getTypesLoaders,
    nodeField,
    nodesField,
    nodeInterface,
  };
};

const { registerTypeLoader, nodeInterface, nodeField, nodesField } = getTypeRegister();

export { registerTypeLoader, nodeInterface, nodeField, nodesField };
