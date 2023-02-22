/* eslint-disable no-console */
import { connection } from "../boot.js"
import DaySeeder from "./seeders/DaySeeder.js"
import UserSeeder from "./seeders/UserSeeder.js"
import { Day, User, UsersDay, Entry } from "../models/index.js"

class Seeder {
  static async seed() {
    // include individual seed commands here
    await DaySeeder.seed()
    await UserSeeder.seed()

    let user1 = await User.query().findById(1)
    let user2 = await User.query().findById(2)

    let day1 = await Day.query().findById(1)
    let day2 = await Day.query().findById(2)

    await UsersDay.query().insert({userId: user1.id, dayId: day1.id})

    await Entry.query().insert({dayId:day1.id, userId:user2.id, journalEntry:"cool entry over here", weatherData:"sunny"})
    await Entry.query().insert({dayId:day2.id, userId:user2.id, journalEntry:"cool entry over here not really", weatherData:"sunny it is not"})

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder