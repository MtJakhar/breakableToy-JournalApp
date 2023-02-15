import React, { useState } from 'react'
import Calendar from 'react-calendar'

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (dateSelected) => {
    setDate(dateSelected)
  }

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
      {date.toString()}
    </div>
  )
}

export default MyCalendar