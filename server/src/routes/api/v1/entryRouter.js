import express from "express";
import { ValidationError } from "objection";
import { Entry, User } from "../../../models/index.js";
import uploadImage from "../../../services/uploadImage.js"

const entryRouter = new express.Router()

entryRouter.get("/", async (req, res) => {
  try {
    const userId = req.user.id
    const currentUser = await User.query().findById(userId)

    const userEntries = await currentUser.$relatedQuery("entries")
    console.log(userEntries)
    res.status(200).json({ entries: userEntries })
  } catch(error) {
    res.status(500).json({ errors: error })
  }
})

entryRouter.post("/", uploadImage.single("imageUrl"), async (req, res) => {
  const { body } = req
  body.userId = req.user.id 
  let image = ""

  if (req.file) {
    image = req.file.location
    body.imageUrl = image
    console.log("this is if image", image)
  }
  console.log("this is the body.imageUrl before route", body.imageUrl)
  try {
    console.log("this is the body in route", body)
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
    const entry = await Entry.query().findById(req.params.id)
    console.log(entry)
    return res.status(200).json({ entry: entry })
  } catch(error) {
    return res.status(500).json({errors: error})
  }
})

entryRouter.delete("/:id", async (req, res) => {
  try {
    await Entry.query().deleteById(req.params.id)
    return res.status(204).json({message: 'deletion success'})
  } catch(error) {
    return res.status(500).json({errors: error})
  }
})

entryRouter.patch('/:id', async (req, res) => {
  const body = req.body
  body.id = req.params.id
  try {
    const editedEntry = await Entry.query().patchAndFetchById(body.id, {
      date: body.date,
      title: body.title,
      journalEntry: body.journalEntry
    })
    return res.status(200).json({ editedEntry: editedEntry })
  } catch(error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})


export default entryRouter;