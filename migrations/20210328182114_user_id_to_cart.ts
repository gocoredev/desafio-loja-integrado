import { Knex } from "knex";


export async function up(knex: Knex) {
    return await knex.schema.table('carts', (table)=>{
        table.string('user_id').unsigned().references('user_id').inTable('users')
    })
}


export async function down(knex: Knex) {
    return await knex.schema.table('carts', (table) => {
        
    })
}

