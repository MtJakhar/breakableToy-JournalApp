import { User } from "../../models/index.js"

class UserSeeder {
  static async seed() {
    const usersData = [
      { email: "test1@gmail.com", cryptedPassword: "password" },
      { email: "test2@gmail.com", cryptedPassword: "password" },
      { email: "test3@gmail.com", cryptedPassword: "password" },
      { email: "test4@gmail.com", cryptedPassword: "password" }
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