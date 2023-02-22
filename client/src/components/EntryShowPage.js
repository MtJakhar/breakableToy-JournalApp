import React, { useState, useEffect } from 'react'

const EntryShowPage = (props) => {
  const [entry, setEntry] = useState({
    date: "p",
    title: "p",
    journalEntry: "p"
  })

  const getEntry = async () => {
    try{
      const entryId = props.match.params.id
      const response = await fetch(`/api/v1/entry/${entryId}`)
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      }
      const fetchedEntry = await response.json()
      console.log("entry is here", fetchedEntry.entry)
      setEntry(fetchedEntry.entry)
    } catch(error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getEntry()
  }, [])


  return (
    <div>
      <h1>EntryShowPage</h1>
      <h2>{entry.title}</h2>
      <h4>{entry.date}</h4>
      <p>{entry.journalEntry}</p>
    </div>
  )
}

export default EntryShowPage