import { User } from "../../models/index.js"

class UserSeeder {
  static async seed() {
    const usersData = [
      { email: "marcusA@gmail.com", password: "password" },
      { email: "test2@gmail.com", password: "password" },
      { email: "test3@gmail.com", password: "password" },
      { email: "test4@gmail.com", password: "password" }
    ]

    for (const singleUsersData of usersData) {
      const currentUser = await User.query().findOne({ email: singleUsersData.email })
      if (!currentUser) {
        await User.query().insert(singleUsersData)
      }
    }
  }
}

export default UserSeeder