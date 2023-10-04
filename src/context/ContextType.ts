import { Knex } from "knex";
import { User } from "./User";

export default interface ContextType {
  knex: {
    default: Knex;
  };
  token: string;
  user: User;
}
