/* eslint-disable no-console */
import { connection } from "../boot.js"
import UserSeeder from "./seeders/UserSeeder.js"
import EntrySeeder from "./seeders/EntrySeeder.js"
import { User, Entry } from "../models/index.js"

class Seeder {
  static async seed() {
    // include individual seed commands here

    await UserSeeder.seed()
    await EntrySeeder.seed()


    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder