import express from "express";
import { ValidationError } from "objection";
import { Entry } from "../../../models/index.js";

const entryRouter = new express.Router()

entryRouter.get("/", async (req, res) => {
  try {
    const entries = await Entry.query()
    res.status(200).json({ entries })
  } catch(error) {
    res.status(500).json({ errors: error })
  }
})

entryRouter.post("/", async (req, res) => {
  const { body } = req
  // const userId = req.user.id
  body.userId = req.user.id 
  try {
    const newEntry = await Entry.query().insertAndFetch(body)
    return res.status(201).json({ newEntry })
  } catch(error) {
    if(error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

entryRouter.get("/:id", async (req, res) => {
  try{
    await Entry.query().deleteById(req.params.id)
    return res.status(204).json({message: 'deletion success'})
  } catch(error) {
    return res.status(500).json({errors: error})
  }
})

export default entryRouter;