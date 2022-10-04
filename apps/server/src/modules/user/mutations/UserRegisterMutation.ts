import { GraphQLString, GraphQLNonNull } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import { generateJwtToken } from '../../../auth';

import { UserModel } from '../UserModel';
import { UserType } from '../UserType';


export default mutationWithClientMutationId({
    name: 'UserRegister',
    inputFields: {
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
    },
    mutateAndGetPayload: async ({ email, ...rest }) => {
        const hasUser =
            (await UserModel.countDocuments({ email: email.trim() })) > 0;

        if (hasUser) {
            throw new Error('This email has been registered. Please try again!');
        }

        const user = new UserModel({
            ...rest,
            email,
        });

        await user.save();

        const token = generateJwtToken(user._id);


        return {
            token,
            id: user._id,
            sucess: 'Success!',
        };
    },
    outputFields: {
        token: {
            type: GraphQLString,
            resolve: ({ token }) => token,
        },
        me: {
            type: UserType,
            resolve: async ({ id }) => await UserModel.findOne({ _id: id }),
        },
    },
});