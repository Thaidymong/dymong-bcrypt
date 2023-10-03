import knex from "knex";
import dotenv from "dotenv";
dotenv.config();

export const knx = knex({
    client: "mysql2",
    connection:process.env.MY_CONNECTION_STRING,
});
