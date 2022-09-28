import { GraphQLObjectType, GraphQLNonNull } from "graphql";

import { nodesField, nodeField } from "../modules/node/typeRegister";
import { websiteConnectionField } from "../modules/website/WebsiteField";

const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "The root of all... queries",
  fields: () => ({
    node: nodeField,
    nodes: nodesField,
    ...websiteConnectionField(),
  }),
});

export default QueryType;
