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

  let deleteButton
  let editButton
  if (currentUser && currentUser.id === entry.userId){
    deleteButton = <button className='button delete-btn' onClick={handleDelete}>Delete</button>
    editButton = <button className='button edit-btn' onClick={handleEdit}>Edit</button>
  }
  return (
    <div className='entryListItem'>
      <Link to={`/entries/${entry.id}`}>{entry.title}</Link>
      <p>{entry.date}</p>
      <p>User {entry.userId}</p>
      {deleteButton}
      {editButton}
      {editForm}
    </div>
  )
}

export default EntryListItem