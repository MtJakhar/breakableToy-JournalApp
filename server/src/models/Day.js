const Model = require("./Model.js")

class Day extends Model {
  static get tableName(){
    return "days"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["date"],
      properties: {
        userId: {type: ["integer", "string"]},
        date: {type: ["string"]}
      }
    }
  }

  static get relationMappings() {
    const { User, Entry } = require("./index.js")

    return {
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: "days.id",
          through: {
            from: "userDays.dayId",
            to: "usersDays.userId"
          },
          to: "users.id"
        }
      },
      entries: {
        relation: Model.HasManyRelation,
        modelClass: Entry,
        join: {
          from: "days.id",
          to: "entries.userId"
        }
      }
    }
  }
}

module.exports = Day