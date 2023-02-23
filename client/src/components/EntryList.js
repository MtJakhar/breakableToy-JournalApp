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

  const deleteEntry = async (id) => {
    try{
      const response = await fetch(`/api/v1/entry/${id}`, {
        method: 'DELETE',
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
      if (!response.ok) {
        throw new Error(`Error in fetch: ${error.message}`)
      }
      setEntryList(entryList.filter(entry => entry.id !== id))
    } catch(error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }
 
  useEffect(() => {
    getEntries()
  }, [])

  const entriesItems = entryList.map(entry => {
    return (
      <div className='entryListItem cell small-12 medium-4 callout secondary'>
      <EntryListItem
        key={entry.id}
        entry={entry}
        currentUser={currentUser}
        deleteEntry={deleteEntry}
        entryList={entryList}
        setEntryList={setEntryList}
      />
      </div>
    )
  })

  const handleClick = () => {
    history.push('/dashboard');
  };

  const handleNewEntryClick = () => {
    history.push('/entries/new')
  }

  let link
  if (currentUser) {
    link = <button className='button btn' onClick={handleNewEntryClick}>Add New Entry</button>
  }

  return (
    <div className='entryContainer'>
      <div className="entryList grid-x grid-margin-x">
        {entriesItems}
      </div>
      {link}
      <button className='button btn' onClick={handleClick}>Dashboard</button>
    </div>
    
  )
}

export default EntryList