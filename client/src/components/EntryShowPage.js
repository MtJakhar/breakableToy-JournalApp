import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

const EntryShowPage = (props) => {
  const [entry, setEntry] = useState({})
  const history = useHistory();

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

  const handleClick = () => {
    history.push('/entries');
  };

  return (
    <div>
      <div>
        <h1>EntryShowPage</h1>
        <h2>{entry.title}</h2>
        <h4>{entry.date}</h4>
        <p>{entry.journalEntry}</p>
      </div>

      <button className="button" type="button" onClick={handleClick}>Return to Entries</button>

    </div>
  )

  
}

export default EntryShowPage