import { Day } from "../../models/index.js"

class DaySeeder {
  static async seed() {
    const daysData = [
      { date: "Jan 1, 2023"},
      { date: "Jan 2, 2023"},
      { date: "Jan 3, 2023"},
      { date: "Jan 4, 2023"}
    ]

    for (const singleDaysData of daysData) {
      const currentDay = await Day.query().findOne({ date: singleDaysData.date })
      if (!currentDay) {
        await Day.query().insert(singleDaysData)
      }
    }
  }
}

export default DaySeeder