import React, { useState } from 'react'
import translateServerErrors from '../services/translateServerErrors.js'
import ErrorList from './layout/ErrorList.js'
import UploadImage from './UploadImage.js'
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const NewEntryForm = (prop) => {
  const [newEntry, setNewEntry] = useState({
    date: "",
    title: "",
    journalEntry: "",
    imageUrl:""
  })

  const [shouldRedirect, setShouldRedirect] = useState(false)
  const history = useHistory();
  const [errors, setErrors] = useState({})

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (newEntry.imageUrl === "") {
      newEntry.imageUrl = "https://iheartintelligence.com/wp-content/uploads/2015/09/Marcus-Aurelius.jpg"
    }
    const newUploadBody = new FormData()
    newUploadBody.append("date", newEntry.date)
    newUploadBody.append("title", newEntry.title)
    newUploadBody.append("journalEntry", newEntry.journalEntry)
    newUploadBody.append("imageUrl", newEntry.imageUrl)
    console.log("formData", newUploadBody)
    try{
      if (Object.keys(errors).length === 0) {
        const response = await fetch("/api/v1/entry", {
          method: "Post",
          headers: new Headers({
            "Accept": "image/jpeg"
          }),
          body: newUploadBody
        })
        console.log("response", response)
      
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
          clearForm()
          setShouldRedirect(true)
        }
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

  const handleClick = () => {
    history.push('/entries');
  };

  const clearForm = () => {
    setNewEntry({
      date: "",
      title: "",
      journalEntry: "",
      imageUrl:""
    })
  }

  if (shouldRedirect) {
    return <Redirect push to="/entries" />
  }

  return (
    <form className="newForm" onSubmit={handleSubmit}>
      <h1 className='newFormTitle'>Journal Entry</h1>
      <ErrorList errors={errors} />
      <label htmlFor='date'>
        <input 
          className='formInput'
          type='text'
          name='date'
          onChange={handleInputChange}
          value={newEntry.date}
          placeholder="Enter Date"
        />
      </label>

      <label htmlFor='title'>
        <input 
          className='formInput'
          type='text'
          name='title'
          onChange={handleInputChange}
          value={newEntry.title}
          placeholder="Enter Title"
        />
      </label>

      <label htmlFor='journalEntry'>
        <textarea
          className='textarea' 
          name='journalEntry'
          onChange={handleInputChange}
          rows="50"
          cols="70"
          value={newEntry.journalEntry}
          placeholder="Enter Text"
        ></textarea>
      </label>
      
      <UploadImage 
        newEntry={newEntry}
        setNewEntry={setNewEntry}
      />

      <div className='btnGroup'>
        <input className='button btn' type='submit' value="Submit" />
        <input className='button btn' type='button' value='Clear Form' onClick={clearForm} />
        <button className='button btn' onClick={handleClick}>Back</button>
      </div>
    </form>
  )
}

export default NewEntryForm