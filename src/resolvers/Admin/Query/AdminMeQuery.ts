import { GraphQLError } from "graphql";
import ContextType from "src/context/ContextType";

export default async function AdminQuery(_, {}, ctx: ContextType) {
  const knex = ctx.knex.default;
  const user = ctx.user;

  if (!user) {
    throw new GraphQLError(`Authentication is required.`);
  }
  const adminMe = await knex.table("admin").where({ id: user.id }).first();

  if (!adminMe) {
    throw new GraphQLError(`Admin data not found for the authenticated user.`);
  }

  return {
    ...adminMe,
  };
}
