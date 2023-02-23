import React, { useState } from 'react'
import translateServerErrors from '../services/translateServerErrors.js'
import ErrorList from './layout/ErrorList.js'

const EditEntryForm = ({ entry, entryId, entryList, setEntryList, setShowEditEntryForm }) => {
  const { date, title, journalEntry } = entry
  const [editedEntry, setEditedEntry] = useState({
    date: date || "",
    title: title || "",
    journalEntry: journalEntry || ""
  })

  const [errors, setErrors] = useState({})
  const editEntry = async (editedEntry) => {
    try {
      const response = await fetch(`/api/v1/entry/${entryId}`, {
        method: "PATCH",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(editedEntry)
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          throw new Error(`${response.status} (${response.statusText})`)
        }
      } else {
        const body = await response.json()
        return body.editedEntry
      }
    } catch(error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newlyEditedEntry = await editEntry(editedEntry)
    const editedEntryList = [...entryList]
    const updateId = entryList.findIndex(element => element.id === newlyEditedEntry.id)
    editedEntryList[updateId] = newlyEditedEntry
    setEntryList(editedEntryList)
    setShowEditEntryForm(false)
  }

  const handleInputChange = (event) => {
    setEditedEntry({
      ...editedEntry,
      [event.currentTarget.name] : event.currentTarget.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
    <ErrorList errors={errors} />
    <label htmlFor='date'>
      Date:
      <input 
        type='text'
        name='date'
        onChange={handleInputChange}
        value={editedEntry.date}
      />
    </label>

    <label htmlFor='title'>
      Title:
      <input 
        type='text'
        name='title'
        onChange={handleInputChange}
        value={editedEntry.title}
      />
    </label>

    <label htmlFor='journalEntry'>
      Journal Entry:
      <input 
        type='text'
        name='journalEntry'
        onChange={handleInputChange}
        value={editedEntry.journalEntry}
      />
    </label>
    <input className='button' type='submit' value="Submit" />
  </form>
  )
}

export default EditEntryForm