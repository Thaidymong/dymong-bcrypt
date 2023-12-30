import { Knex } from "knex";
import { Admin, User } from "./User";

export default interface ContextType {
  knex: {
    default: Knex;
  };
  token: string;
  user: User;
  admin: Admin,
}
