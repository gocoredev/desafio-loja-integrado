import { Knex } from "knex";


export async function up(knex: Knex) {
    return await knex.schema.table('cart_products', (table)=>{
        table.string('cart_id').unsigned().references('cart_id').inTable('carts')
    })
}


export async function down(knex: Knex) {
    return await knex.schema.table('cart_products', (table) => {
        table.dropColumn('cart_id')
    })
}

