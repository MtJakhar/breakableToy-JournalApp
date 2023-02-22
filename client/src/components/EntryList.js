import React, { useEffect, useState } from 'react'
import EntryListItem from './EntryListItem'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const EntryList = (props) => {
  const currentUser = props.currentUser
  const [entryList, setEntryList] = useState([])
  const history = useHistory();

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

  const handleClick = () => {
    history.push('/dashboard');
  };

  let link
  if (currentUser) {
    link = <Link className="button" to='/entries/new'>Add New Entry</Link>
  }

  return (
    <div>EntryList
      {entriesItems}
      {link}
      <button className='button' onClick={handleClick}>Dashboard</button>
    </div>
    
  )
}

export default EntryList