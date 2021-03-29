import { Knex } from "knex";


export async function up(knex: Knex) {
    return await knex.schema.table('users', (table)=>{
        table.string('user_id').unsigned().alter()
    })
}


export async function down(knex: Knex) {
    return await knex.schema.table('users', (table) => {
    })
}

