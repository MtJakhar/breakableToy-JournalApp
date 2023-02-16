/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  return knex.schema.createTable("entries", (table) => {
    table.bigIncrements("id")
    table.bigInteger("dayId").unsigned().notNullable().index().references("days.id")
    table.bigInteger("userId").unsigned().notNullable().index().references("users.id")
    table.text("journalEntry")
    table.string("weatherData")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("entries")
}
