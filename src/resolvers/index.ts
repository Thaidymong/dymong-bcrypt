import { CreateUsersMutation } from "./Users/Mutation/CreateUsersMutation";
import SignInMutation from "./Users/Mutation/SignInMutation";

export const Resolvers = {
    Query: {
       
    },
    Mutation: {
        createUsersMutation: CreateUsersMutation,
        signIn: SignInMutation,

    }
}
