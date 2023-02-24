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
    <div className="entry-show-page-container text-center">
      <div className="entry-details-container">
        <h2 className="entry-date">{entry.date}</h2>
        <h4 className="entry-title">{entry.title}</h4>
        <p className="entry-journal">{entry.journalEntry}</p>
      </div>

      <button className="button btn" type="button" onClick={handleClick}>
        Return to Entries
      </button>
    </div>
  )  
}

export default EntryShowPage