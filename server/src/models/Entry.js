const Model = require("./Model.js")

class Entry extends Model {
  static get tableName() {
    return "entries"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["userId", "date", "journalEntry" ],
      properties: {
        userId: {type: ["integer", "string"]},
        date: {type: "string", minLength: 1 },
        title: {type: "string", minLength: 1 },
        journalEntry: {type: "string", minLength: 1 },
        imageUrl: {type: "string"}
      }
    }
  }
  
  static get relationMappings() {
    const { User } = require("./index.js")
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "entries.userId",
          to: "users.id"
        }
      }
    }
  }
}

module.exports = Entry