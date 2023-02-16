const Model = require("./Model.js")

class UsersDay extends Model {
  static get tableName() {
    return "usersDays"
  }

  static get relationMappings() {
    const { User, Day } = require("./index.js")

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "usersDays.userId",
          to: "users.id"
        }
      },
      day: {
        relation: Model.BelongsToOneRelation,
        modelClass: Day,
        join: {
          from: "usersDays.dayId",
          to: "days.id"
        }
      }
    }
  }
}

module.exports = UsersDay