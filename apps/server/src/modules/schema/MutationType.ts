import { GraphQLObjectType } from "graphql";

import userRegisterMutation from "../user/mutations/index";

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    ...userRegisterMutation,
  }),
});

export default MutationType;
