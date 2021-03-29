import { Knex } from "knex";


export async function up(knex: Knex) {
    return await knex.schema.createTableIfNotExists('carts', (table)=>{
        table.string('cart_id').primary().unsigned()
        table.boolean('isActived').notNullable()
        table.timestamp('createdAt').defaultTo(knex.fn.now())
        table.timestamp('updatedAt').defaultTo(knex.fn.now())
        table.decimal('cart_total_price', 18,2)
    })
}


export async function down(knex: Knex) {
    return await knex.schema.dropTableIfExists('carts')
}

