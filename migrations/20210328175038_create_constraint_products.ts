import { Knex } from "knex";


export async function up(knex: Knex) {
    return await knex.schema.table('cart_products', (table)=>{
        table.integer('product_id').unsigned().references('product_id').inTable('products').alter()
    })
}


export async function down(knex: Knex) {
    return await knex.schema.table('cart_products', (table) => {

    })
}

