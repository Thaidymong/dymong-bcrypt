import knex from "knex";

export default function createKnexContext() {
  return {
    default: knex({
      client: "mysql2",
      connection: process.env.MY_CONNECTION_STRING,
      pool: { min: 3, max: 10 },
    }),
  };
}
