/* eslint-disable no-console */
import { connection } from "../boot.js"
import UserSeeder from "./seeders/UserSeeder.js"
import { User, Entry } from "../models/index.js"

class Seeder {
  static async seed() {
    // include individual seed commands here

    await UserSeeder.seed()

    let user1 = await User.query().findById(1)
    let user2 = await User.query().findById(2)


    await Entry.query().insert({userId: user1.id, date: "Feb 01 2023", title: "The First of Many", journalEntry: "It was the best of times it was the worst of times..."   })
    await Entry.query().insert({userId: user2.id, date: "Feb 03 2023", title: "Why I became the second user", journalEntry: "Four scores, seven years ago I came across a man who called himself Gandalf..."   })


    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder