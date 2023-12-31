import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    if(!(await knex.schema.hasTable("users"))){
        return knex.schema.createTable("users", (table)=>{
            table.increments();
            table.string("first_name");
            table.string("last_name");
            table.string("email");
            table.string("password");
            table.timestamps(true,true);
        })
    }
}


export async function down(knex: Knex): Promise<void> {
}

