import createKnexContext from "./createKnexContext";
import extractRequestToken from "./extractRequestToken";
import { Request } from "express";
import { getUser } from "src/middleware/Authentication";

export interface AuthUserInterface {
  id?: number;
  token?: string;
}

export function createApolloContext() {
  const knexConnectionList = createKnexContext();

  const context = async ({ req }: { req: Request }): Promise<any> => {
    const token: string = extractRequestToken(req);
    return {
      user: await getUser(token),
      knex: knexConnectionList,
      token,
    };
  };

  return context;
}
