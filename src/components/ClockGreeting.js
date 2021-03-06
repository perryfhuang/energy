import React, { useState, useEffect } from 'react'
import { clockStyle, greetingStyle } from '../styling/ClockGreetingStyling'
import moment from 'moment'

const ClockGreeting = () => {
  const [time, setTime] = useState('2:00 AM')

  // Function to call moment library
  const updateTime = () => {
    setTime(moment().format('h:mm A'))
  }

  // On page load useEffect hook (empty depedency array)
  useEffect(() => {
    // Render time when component mounts using moment library
    setTime(moment().format('h:mm A'))

    // If 'enter' (keyCode 13) key is pressed, preventDefault action of line breaking and exit contentedit mode
    document.getElementById('name').addEventListener('keydown', e => {
      if(e.keyCode === 13 || e.keyCode ===27) {
        e.preventDefault()
        document.getElementById('name').blur()
      }
    })

    // Update time and set state every 1s
    setInterval(updateTime, 1000)
  }, [])

  let greeting
  const hour = moment().hour()
  if(hour > 16) {
    greeting = 'Good evening'
  } else if(hour > 11) {
    greeting = 'Good afternoon'
  } else {
    greeting = 'Good morning'
  }

  return(
    <div>
      <h1 style={clockStyle}>{time}</h1>
      <p style={greetingStyle}>{greeting}, <span id='name' contentEditable='true'>Stranger</span>.</p>
    </div>
  )
}

export default ClockGreeting
