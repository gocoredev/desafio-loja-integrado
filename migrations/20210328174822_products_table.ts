import { Knex } from "knex";


export async function up(knex: Knex) {
    return await knex.schema.createTableIfNotExists('products', (table)=>{
        table.increments('product_id').primary().unsigned()
        table.string('product_name').notNullable()
        table.integer('product_stock').notNullable()
        table.string('product_description', 255).notNullable()
        table.string('product_brand').notNullable()
        table.decimal('product_unity_price', 18,2).notNullable()
        table.timestamp('createdAt').defaultTo(knex.fn.now())
        table.timestamp('updatedAt').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex) {
    return await knex.schema.dropTableIfExists('products')
}

