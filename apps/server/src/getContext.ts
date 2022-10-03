import { Request } from "koa";

import { IWeb } from "./modules/website/WebsiteModel";
import { getDataloaders } from "./modules/loader/loaderRegister";
import { GraphQLContext } from "./modules/graphql/types";

type ContextVars = {
    website?: IWeb | null;
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
