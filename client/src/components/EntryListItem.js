import React from 'react'
import { useHistory } from 'react-router-dom'


const EntryListItem = ({ entry, deleteEntry, showPopup, setShowPopup, setPopEntry }) => {

  const history = useHistory();

  const handleDelete = (event) => {
    event.preventDefault()
    deleteEntry(entry.id)
  }

  const handleEdit = (event) => {
    event.preventDefault()
    setPopEntry(entry)
    setShowPopup(showPopup ? false: true)
  }

  const cutString = (string) => {
    let stringArray = string.split(" ")
    let newArray = [] 
    for(let i = 0; i < 6; i++) {
      newArray.push(stringArray[i])
    }
    return newArray.join(" ")
  }

  const handleEntryClick = () => {
    history.push(`/entries/${entry.id}`);
  };

  return (
    <div className='entryDiv'>
      <img src={entry.imageUrl} className="listImage" onClick={handleEntryClick}/>
      <div className='entryContent'>
        <h5>{entry.title}</h5>
        <p>{entry.date}</p>
        <p>{cutString(entry.journalEntry)}...</p>
      </div>
      <div>
        <button className='button entry-btn' onClick={handleDelete}>Delete</button>
        <button className='button entry-btn' onClick={handleEdit}>Edit</button>
      </div>
    </div>
  )
}

export default EntryListItem