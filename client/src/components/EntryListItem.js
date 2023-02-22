import React from 'react'
import { Link } from 'react-router-dom'

const EntryListItem = ({ entry, currentUser, deleteEntry, entryList, setEntryList }) => {
  const handleDelete = (event) => {
    event.preventDefault()
    deleteEntry(entry.id)
  }
  let deleteButton
  if (currentUser && currentUser.id === entry.userId){
    deleteButton = <button className='button' onClick={handleDelete}>Delete</button>
  }
  return (
    <div>
      <Link to={`/entries/${entry.id}`}>{entry.title}</Link>
      <p>{entry.date}</p>
      <p>User {entry.userId}</p>
      {deleteButton}
    </div>
  )
}

export default EntryListItem