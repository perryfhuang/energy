import React, { useState, useEffect } from 'react'
import moment from 'moment'

const style = {
  color: 'white',
  fontSize: '121px',
  textShadow: '5px 5px 4px #000000'
}

const Clock = () => {
  const [time, setTime] = useState()

  // Render time when component mounts using moment library
  useEffect(() => {
    setTime(moment().format('h:mm A'))
  }, [])

  // Function to call moment library
  const updateTime = () => {
    setTime(moment().format('h:mm A'))
  }

  // Update time and set state every 1s
  setInterval(updateTime, 1000)

  return(
      <h1 style={style}>{time}</h1>
  )
}

export default Clock
