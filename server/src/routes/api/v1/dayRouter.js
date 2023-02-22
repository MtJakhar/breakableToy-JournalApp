import express from "express"
import cleanUserInput from "../../../services/cleanUserInput.js"
import { Day, UsersDay, Entry } from "../../../models/index.js"

import { ValidationError } from "objection";


const dayRouter = new express.Router();

dayRouter.get("/", async (req, res) => {
  try {
    const days = await Day.query()
    return res.status(200).json({ days: days })
  } catch(error){
    return res.status(500).json({errors:error})
  } 
})

dayRouter.post("/", async (req, res) => {
  const { body } = req
  const userId = req.user.id
  const postDayData = body[0]
  try {
    let dayExists = await Day.query().findOne(postDayData)
    
    console.log("postData.day", postDayData.day)
    console.log("dayExists is equal to:", dayExists)
    // from calendar click on day, redirect to that day show page/ users journal for that day
    // on that jounral/ day page it shows all entries user has for that day, and form to add new entry for that day
    // which means URL path in browser - /day/:id - displays all entries and form for new
    // when submitting new entry, POST fetch("/api/v1/days/dayId/entries")

    // try to finish up this branch - to then progress into more feature driven scoped branches outlined below
    // prioritize #1

    // rule of thumb: use word "and" should break into smaller stories
    // also: to work on features that use GET requests before things like POST
    // 1. need a show page for the day (redirect after user clicks on calendar day)
    // 2. listing displaying all entries for that day on the new show page (probably need to seed data)
    // 2.5 show page fo one entry
    // 3. the form to add new entry
    // 4. any other features like edit, delete, show page

    if (dayExists === undefined) {
      let newDay = await Day.query().insertAndFetch(postDayData)
      await UsersDay.query().insertAndFetch({dayId: newDay.id, userId: userId })
      console.log("newDay created")
      return res.status(201).json({ day: newDay })
    } else {
      console.log("else had been hit")
      await UsersDay.query().insertAndFetch({dayId: dayExists.id, userId: userId })
      // return res.status(201).json({ day: })
    }
  } catch(error) {
    if (error instanceof ValidationError) {
      console.log(error)
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

dayRouter.get("/:id", async (req, res) => {
  console.log("this is Req", req)
  console.log("this is req.params.id", req.params.id)
  
  try {
    
    return res.status(200).json({  })
  } catch(error) {
    return res.status(500).json({errors: error})
  }
})


export default dayRouter;