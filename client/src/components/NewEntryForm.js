import React, { useState } from 'react'
import translateServerErrors from '../services/translateServerErrors.js'
import ErrorList from './layout/ErrorList.js'
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const NewEntryForm = (prop) => {
  const [newEntry, setNewEntry] = useState({
    date: "",
    title: "",
    journalEntry: ""
  })
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const history = useHistory();
  const [errors, setErrors] = useState({})

  const postNewEntry = async(newEntryData) => {
    try{
      const response = await fetch("/api/v1/entry", {
        method: "Post",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newEntryData)
      })

      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          throw new Error(`${response.status} (${response.statusText})`)
        }
      } else{
        const body = await response.json()
        setShouldRedirect(true)
      }
    } catch(error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  } 

  const handleInputChange = (event) => {
    setNewEntry({
      ...newEntry,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    postNewEntry(newEntry)
    clearForm()
  }

  const handleClick = () => {
    history.push('/entries');
  };

  const clearForm = () => {
    setNewEntry({
      date: "",
      title: "",
      journalEntry: ""
    })
  }

  if (shouldRedirect) {
    return <Redirect push to="/entries" />
  }

  return (
    <form className="newForm" onSubmit={handleSubmit}>
      <ErrorList errors={errors} />
      <label htmlFor='date'>
        Date:
        <input 
          type='text'
          name='date'
          onChange={handleInputChange}
          value={newEntry.date}
        />
      </label>

      <label htmlFor='title'>
        Title:
        <input 
          type='text'
          name='title'
          onChange={handleInputChange}
          value={newEntry.title}
        />
      </label>

      <label htmlFor='journalEntry'>
        Journal Entry:
        <textarea
          className='textarea' 
          name='journalEntry'
          onChange={handleInputChange}
          rows="50"
          cols="70"
          value={newEntry.journalEntry}
        ></textarea>
      </label>
      <div className='newFormBtns'>
        <input className='button btn' type='submit' value="Submit" />
        <input className='button btn' type='button' value='Clear Form' onClick={clearForm} />
        <button className='button btn' onClick={handleClick}>Back</button>
      </div>
    </form>
  )
}

export default NewEntryForm