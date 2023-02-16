const Model = require("./Model.js")

class Entry extends Model {
  static get tableName() {
    return "entries"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["userId", "dayId"],
      properties: {
        userId: {type: ["integer", "string"]},
        dayId: {type: ["integer", "string"]},
        journalEntry: {type: ["string"]},
        weatherData: {type: ["string"]}
      }
    }
  }
  
  static get relationMappings() {
    const { User, Day } = require("./index.js")
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "entries.userId",
          to: "users.id"
        }
      },
      day: {
        relation: Model.BelongsToOneRelation,
        modelClass: Day,
        join: {
          from: "entries.dayId",
          to: "days.id"
        }
      }
    }
  }
}

module.exports = Entry