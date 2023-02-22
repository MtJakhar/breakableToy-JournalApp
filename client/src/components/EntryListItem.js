import React from 'react'
import { Link } from 'react-router-dom'

const EntryListItem = ({ entry }) => {
  return (
    <div>
      <Link to={`/entries/${entry.id}`}>{entry.title}</Link>
      <p>{entry.date}</p>
      <p>{entry.userId}</p>
    </div>
  )
}

export default EntryListItem