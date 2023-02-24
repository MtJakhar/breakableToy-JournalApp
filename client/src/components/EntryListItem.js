import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EditEntryForm from './EditEntryForm'

const EntryListItem = ({ entry, currentUser, deleteEntry, entryList, setEntryList }) => {
  const [showEditEntryForm, setShowEditEntryForm] = useState(false)

  const handleDelete = (event) => {
    event.preventDefault()
    deleteEntry(entry.id)
  }

  const handleEdit = (event) => {
    event.preventDefault()
    setShowEditEntryForm(showEditEntryForm ? false: true)
  }

  let editForm 
  if (showEditEntryForm) {
    editForm = <EditEntryForm 
      entry={entry}
      entryId={entry.id}
      entryList={entryList}
      setEntryList={setEntryList}
      setShowEditEntryForm={setShowEditEntryForm}
    />
  }

  const cutString = (string) => {
    let stringArray = string.split(" ")
    let newArray = [] 
    for(let i = 0; i < 6; i++) {
      newArray.push(stringArray[i])
    }
    return newArray.join(" ")
  }

  return (
    <div className='entryListItem'>
      <Link to={`/entries/${entry.id}`}>{entry.title}</Link>
      <p>{entry.date}</p>
      <p>{cutString(entry.journalEntry)}...</p>

      <div>
        <button className='button btn' onClick={handleDelete}>Delete</button>
        <button className='button btn' onClick={handleEdit}>Edit</button>
        {editForm}
      </div>
    </div>
  )
}

export default EntryListItem