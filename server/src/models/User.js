/* eslint-disable import/no-extraneous-dependencies */
const Bcrypt = require("bcrypt");
const unique = require("objection-unique");
const Model = require("./Model");

const saltRounds = 10;

const uniqueFunc = unique({
  fields: ["email"],
  identifiers: ["id"],
});

class User extends uniqueFunc(Model) {
  static get tableName() {
    return "users";
  }

  set password(newPassword) {
    this.cryptedPassword = Bcrypt.hashSync(newPassword, saltRounds);
  }

  authenticate(password) {
    return Bcrypt.compareSync(password, this.cryptedPassword);
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email"],

      properties: {
        email: { type: "string" },
        cryptedPassword: { type: "string" },
      },
    };
  }

  static get relationMapping() {
    const { Day, Entry } = require("./index.js")

    return {
      days: {
        relation: Model.ManyToManyRelation,
        modelClass: Day,
        join: {
          from: "users.id",
          through: {
            from: "usersDays.userId",
            to: "usersDays.dayId"
          },
          to: "days.id"
        }
      },
      entries: {
        relation: Model.HasManyRelation,
        modelClass: Entry,
        join: {
          from: "users.id",
          to: "entries.userId"
        }
      }
    }
  }

  $formatJson(json) {
    const serializedJson = super.$formatJson(json);

    if (serializedJson.cryptedPassword) {
      delete serializedJson.cryptedPassword;
    }

    return serializedJson;
  }
}

module.exports = User;
