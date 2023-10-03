import { knx } from "src/connections/CreateKnexConnections";
import bcrypt from "bcrypt";
import { UsersInput } from "src/types/Users";
export const CreateUsersMutation = async (
  _,
  { input }: { input: UsersInput },
  {}
) => {
  const { first_name, last_name, email, password } = input;
  const hashPassword = bcrypt.hashSync(password, 12);
  const createUsers = await knx("users").insert({
    first_name,
    last_name,
    email,
    password: hashPassword,
  });
  if (createUsers) {
    return true;
  } else {
    return false;
  }
};
