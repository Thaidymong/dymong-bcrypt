import { GraphQLError } from "graphql";
import ContextType from "src/context/ContextType";

export default async function MeQuery(_, {}, ctx: ContextType) {
  const knex = ctx.knex.default;
  const user = ctx.user;
  if (!user) {
    throw new GraphQLError(`Authentication is required token`);
  }
  const me = await knex.table("users").where({ id: user.id }).first();
  return {
    ...me,
  };
}

