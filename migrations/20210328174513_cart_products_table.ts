import { Knex } from "knex";


export async function up(knex: Knex) {
    return await knex.schema.createTableIfNotExists('cart_products', (table)=>{
        table.string('cart_product_id').primary()
        table.integer('product_id')
        table.decimal('product_unity_price', 18,2).notNullable()
        table.integer('product_quantity').notNullable()
        table.decimal('product_discount', 18,2).notNullable()
        table.decimal('product_total', 18,2).notNullable()
        table.timestamp('createdAt').defaultTo(knex.fn.now())
        table.timestamp('updatedAt').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex) {
    return await knex.schema.dropTableIfExists('cart_products')
}

