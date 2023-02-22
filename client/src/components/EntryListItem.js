import React from 'react'

const EntryListItem = ({ entry }) => {
  return (
    <div>
      <h3>{entry.title}</h3>
      <p>{entry.date}</p>
      <p>{entry.userId}</p>
    </div>
  )
}

export default EntryListItem