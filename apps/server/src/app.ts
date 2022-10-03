import 'isomorphic-fetch';
import Koa, { Request } from 'koa';
import Router from 'koa-router';
import cors from 'kcors';
import { graphqlHTTP, OptionsData } from 'koa-graphql';
import bodyParser from 'koa-bodyparser';
import { schema } from '../src/modules/schema/schema';
import { getContext } from './getContext';
import { getUser } from './auth';
import { config } from './config';

const app = new Koa();
const router = new Router();

const graphQlSettingsPerReq = async (req: Request): Promise<OptionsData> => {
    const user = await getUser(req.header.authorization);

    return {
        graphiql:
            config.NODE_ENV !== 'production'
                ? {
                    headerEditorEnabled: true,
                    shouldPersistHeaders: true,
                }
                : false,
        schema,
        pretty: true,
        context: getContext({
            user,
        }),
        customFormatErrorFn: ({ message, locations, stack }) => {
            /* eslint-disable no-console */
            console.log(message);
            console.log(locations);
            console.log(stack);
            /* eslint-enable no-console */

            return {
                message,
                locations,
                stack,
            };
        },
    };
};

const graphQlServer = graphqlHTTP(graphQlSettingsPerReq);
router.all('/graphql', graphQlServer);

app.use(cors());
app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

export default app;