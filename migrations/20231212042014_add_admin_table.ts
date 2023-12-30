import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  if (!(await knex.schema.hasTable("admin"))) {
    return knex.schema.createTable("admin", (table) => {
      table.increments();
      table.string("first_name");
      table.string("last_name");
      table.string("email");
      table.string("password");
      table.string("phone_number");
      table.timestamps(true, true);
    });
  }
}

export async function down(knex: Knex): Promise<void> {}
