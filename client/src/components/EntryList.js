import React, { useEffect, useState } from 'react'
import EntryListItem from './EntryListItem'

const EntryList = (props) => {

  const [entryList, setEntryList] = useState([])

  const getEntries = async () => {
    try {
      const response = await fetch("/api/v1/entry")
      if (!response.ok) {
        throw new Error(`${response.status} (${response.statusText})`)
      } else {
        const body = await response.json()
        setEntryList(body.entries)
      }
    } catch(error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }
 
  useEffect(() => {
    getEntries()
  }, [])

  const entriesItems = entryList.map(entry => {
    return (
      <EntryListItem
        key={entry.id}
        entry={entry}
      />
    )
  })

  return (
    <div>EntryList
      {entriesItems}
    </div>
    
  )
}

export default EntryList