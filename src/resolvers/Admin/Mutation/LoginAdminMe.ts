import { compareSync } from "bcrypt";
import { GraphQLError } from "graphql";
import { knx } from "src/connections/CreateKnexConnections";
import { LoginInput } from "src/types/Admin";
import { sign } from "jsonwebtoken";

export default async function LoginAdmin(
  _,
  { input }: { input: LoginInput },
  {}
) {
  const { email, password } = input;
  const admin: LoginInput = await knx("admin").where({ email }).first();
  if (!admin) {
    throw new GraphQLError(`User does not exist!`);
  }
  const checkPassword = compareSync(password, admin.password);
  if (!checkPassword) {
    throw new GraphQLError(`password is incorrect`);
  }
  const token = sign(admin, process.env.SECRET_KEY);
  return {token}
}
