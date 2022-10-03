import { Request } from "koa";

import { User } from "./modules/user/UserModel";
import { getDataloaders } from "./modules/loader/loaderRegister";
import { GraphQLContext } from "./modules/graphql/types";

type ContextVars = {
    website?: User | null;
    req?: Request;
};

export const getContext = async (ctx: ContextVars) => {
    const dataloaders = getDataloaders();

    return {
        req: ctx.req,
        dataloaders,
        website: ctx.website,
    } as GraphQLContext;
};
