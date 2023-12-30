import { compareSync } from "bcrypt";
import { GraphQLError } from "graphql";
import { sign } from "jsonwebtoken";
import { knx } from "src/connections/CreateKnexConnections";
import { SignInInput } from "src/types/Users";

export default async function SignInMutation(
  _,
  { input }: { input: SignInInput },
  {}
) {
  const { email, password } = input;
  const user: SignInInput = await knx("users").where({ email }).first();
  if (!user) {
    throw new GraphQLError(`User does not exist!`);
  }
  const checkPassword = compareSync(password, user.password);
  if (!checkPassword) {
    throw new GraphQLError(`password is incorrect`);
  }
  const token = sign(user, process.env.SECRET_KEY);
  return {token};
}
