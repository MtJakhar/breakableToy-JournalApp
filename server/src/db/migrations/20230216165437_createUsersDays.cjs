/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
 exports.up = async (knex) => {
  return knex.schema.createTable("usersDays", (table) => {
    table.bigIncrements("id")
    table.bigInteger("userId").unsigned().notNullable().index().references("users.id")
    table.bigInteger("dayId").unsigned().notNullable().index().references("days.id")
    table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
    table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
  })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return knex.schema.dropTableIfExists("usersDays")
}
