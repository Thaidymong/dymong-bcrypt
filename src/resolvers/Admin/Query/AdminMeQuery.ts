// import { GraphQLError } from "graphql";
// import ContextType from "src/context/ContextType";

// export default async function AdminMeQuery(_, {}, ctx: ContextType) {
//   const knex = ctx.knex.default;
//   const admin = ctx.admin;
//   if (!admin) {
//     throw new GraphQLError(`Authentication is required token`);
//   }
//   const adminMe = await knex.table("admin").where({ id: admin.id }).first();
//   return {
//     ...adminMe,
//   };
// }


import { GraphQLError } from "graphql";
import ContextType from "src/context/ContextType";

export default async function AdminMeQuery(_, {}, ctx: ContextType) {
  try {
    const knex = ctx.knex.default;
    const admin = ctx.admin;

    // Check if the admin is authenticated
    if (!admin) {
      throw new GraphQLError(`Authentication is required`);
    }

    // Retrieve admin data from the database
    const adminMe = await knex.table("admin").where({ id: admin.id }).first();

    // Return the relevant admin data
    return {
      id: adminMe.id,
      first_name: adminMe.first_name,
      last_name: adminMe.last_name,
      email: adminMe.email,
      // ... other fields
    };
  } catch (error) {
    // Handle errors
    console.error("Error in AdminMeQuery:", error);
    throw new GraphQLError("An error occurred while fetching admin data");
  }
}
