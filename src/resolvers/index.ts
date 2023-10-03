import { CreateUsersMutation } from "./Users/Mutation/CreateUsersMutation";
import { RemoveUserMutation } from "./Users/Mutation/RemoveUserMutation";
import SignInMutation from "./Users/Mutation/SignInMutation";
import UpdateUsersMutation from "./Users/Mutation/UpdateUsersMutation";
import { GetAllUsers } from "./Users/Query/GetAllUsers";
import GetUserById from "./Users/Query/GetUserById";

export const Resolvers = {
  Query: {
    users: GetAllUsers,
    user: GetUserById,
  },
  Mutation: {
    createUsersMutation: CreateUsersMutation,
    updateUserMutation: UpdateUsersMutation,
    removeUserMutation: RemoveUserMutation,
    signIn: SignInMutation,
  },
};
