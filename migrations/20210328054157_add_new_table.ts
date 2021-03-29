import { Knex } from "knex";


export async function up(knex: Knex) {
    return await knex.schema.createTableIfNotExists('users', (table)=>{
        table.string('user_id').primary()
        table.string('email', 130).notNullable()
        table.string('givenName', 255)
        table.string('familyName', 255)
        table.boolean('isActived').notNullable()
        table.string('password').notNullable()
        table.string('socialName', 255)
        table.string('brandName', 255)
        table.string('fiscalNumber').notNullable()
        table.timestamp('createdAt').defaultTo(knex.fn.now())
        table.timestamp('updatedAt').defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex) {
    return await knex.schema.dropTableIfExists('users')
}

