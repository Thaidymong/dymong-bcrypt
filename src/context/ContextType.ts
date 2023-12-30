import { Knex } from "knex";
import { Admins, User } from "./User";

export default interface ContextType {
  knex: {
    default: Knex;
  };
  token: string;
  user: User;
  admin?: Admins;
}
