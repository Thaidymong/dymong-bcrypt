import { GraphQLError } from "graphql";
import jwt from "jsonwebtoken";
import { HandleJWTExpireTokenError } from "src/context/HandleJWTExpireTokenError";
import createKnexContext from "src/context/createKnexContext";

export const getUser = async (token: string) => {
  const knexConnectionList = createKnexContext();
  try {
    if (!token) {
      throw new GraphQLError(
        `{"errorMessage": "Invalid Token!", "typeError": "auth_error"}`
      );
    }
    const decodedToken: any = jwt.verify(token, process.env.SECRET_KEY, {
      maxAge: "30d",
    });
    const db_user = await knexConnectionList.default
      .table("users")
      .where({ id: decodedToken?.id })
      .first();
    if (db_user?.is_delete) {
      throw new GraphQLError(
        `{"errorMessage": "Username does not exist!", "typeError": "auth error"}`
      );
    }

    return {
      ...db_user,
    };
  } catch (error) {
    return HandleJWTExpireTokenError(error);
  }
};
