import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import { Redirect } from 'react-router-dom';

const MyCalendar = ({ currentUser }) => {
  const [date, setDate] = useState();

  const [shouldRedirect, setShouldRedirect] = useState(false);

  let formattedDate;
  if (date) {
    formattedDate = date.toString().substring(4,15)
  }

  const [errors, setErrors] = useState({})

  const addDay = async (newDay) => {
    try {
      const response = await fetch('/api/v1/day', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(newDay)
      })
      if (!response.ok) {
        if(response.status === 422) {
          const body = await response.json()
          return setErrors(body.errors)
        } else {
          throw new Error(`${response.status} (${response.statusText})`)
        }
      }
      const body = await response.json()
      setErrors({})
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  const onClickDay = (dateSelected) => {
    setDate(dateSelected)
  }


  useEffect(() => {
    setShouldRedirect(true)
  }, [date])


  if(shouldRedirect === true) {
    console.log("redirected")
    return <Redirect to="dashBoard" />
  }
  
  return (
    <div>
      <Calendar value={date} onClickDay={onClickDay} />
      {formattedDate}
    </div>
  )
}

export default MyCalendar