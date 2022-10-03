import { GraphQLString } from 'graphql';
import { Types } from 'mongoose';

import { connectionArgs } from 'graphql-relay';

import { edgeField } from '../graphql/edgeField';

import * as UserLoader from './UserLoader';
import { UserType, UserConnection } from './UserType';

import { UserModel } from './UserModel';

export const userTypeField = (key = 'user') => ({
  [key]: {
    type: UserType,
    resolve: async (obj: any, args: any, context: any) => UserLoader.load(context, obj[key]),
  },
});

export const userEdgeField = edgeField({
  connection: UserConnection,
  load: UserLoader.load,
  name: 'User',
  edgeName: 'userEdge',
});

export const userConnectionField = () => ({
  me: {
    type: UserType,
    args: {
      ...connectionArgs,
    },
    resolve: (_: any, args: any, context: any) => {
      return UserLoader.load(context, context.user?._id);
    },
  },
  sponsoring: {
    type: UserType,
    args: {
      _id: {
        type: GraphQLString,
      },
    },
    resolve: async (_: any, args: any, context: any) => {
      const isValid = Types.ObjectId.isValid(args._id);

      if (isValid) {
        return UserLoader.load(context, args._id);
      }

      const user = await UserModel.findOne({ username: args._id }, { _id: 1 });

      if (!user) return null;

      return UserLoader.load(context, user._id);
    },
  },
});
