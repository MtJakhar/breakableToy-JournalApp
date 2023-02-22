import { Day } from "../../models/index.js"

class DaySeeder {
  static async seed() {
    const daysData = [
      { day: "Jan 1 2023"},
      { day: "Jan 2 2023"},
      { day: "Jan 3 2023"},
      { day: "Jan 4 2023"}
    ]

    for (const singleDaysData of daysData) {
      const currentDay = await Day.query().findOne({ day: singleDaysData.day })
      if (!currentDay) {
        await Day.query().insert(singleDaysData)
      }
    }
  }
}

export default DaySeeder