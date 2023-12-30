import { CreateAdminMeMutation } from "./Admin/Mutation/CreateAdminMeMutation";
import LoginAdmin from "./Admin/Mutation/LoginAdminMe";
import AdminMeQuery from "./Admin/Query/AdminMeQuery";
import { CreateUsersMutation } from "./Users/Mutation/CreateUsersMutation";
import { RemoveUserMutation } from "./Users/Mutation/RemoveUserMutation";
import SignInMutation from "./Users/Mutation/SignInMutation";
import UpdateUsersMutation from "./Users/Mutation/UpdateUsersMutation";
import { GetAllUsers } from "./Users/Query/GetAllUsers";
import GetUserById from "./Users/Query/GetUserById";
import MeQuery from "./Users/Query/MeQuery";

export const Resolvers = {
  Query: {
    users: GetAllUsers,
    user: GetUserById,
    me: MeQuery,
    adminMe: AdminMeQuery,
  },
  Mutation: {
    createUsersMutation: CreateUsersMutation,
    updateUserMutation: UpdateUsersMutation,
    removeUserMutation: RemoveUserMutation,
    signIn: SignInMutation,
    createAdminRegisterMutation: CreateAdminMeMutation,
    adminLogin: LoginAdmin,
  },
};
