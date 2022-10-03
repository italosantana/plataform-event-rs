import { graphql } from 'react-relay';

export const UserRegister = graphql`
    mutation UserRegisterMutation($email: String!, $password: String!) {
        userRegisterMutation(input: { email: $email, password: $password }) {
            token
            me {
                id
                email
            }
        }
    }
`;