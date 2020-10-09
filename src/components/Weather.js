import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = props => {
  const [weather, setWeather] = useState(null)

  // res.data.main.temp

  useEffect(() => {
    // Get request to weather API by city ID (Boston), imperial units (F) and using API key
    axios('https://api.openweathermap.org/data/2.5/weather?id=4930956&units=imperial&appid=781a567418681e7ce8ccb1e883108120')
      .then(res => setWeather(res.data.main.temp))
      .catch(console.error)
  }, [])

  const tempStyle = {
    fontSize: '24px',
    color: 'white',
    position: 'fixed',
    top: '11.5px',
    right: '20px',
    padding: '0',
    margin: '0',
    textShadow: '2px 2px 2px #000000'
}

  const cityStyle = {
    color: 'white',
    fontSize: '12px',
    position: 'fixed',
    top: '40px',
    right: '20px',
    padding: '0',
    margin: '0',
    textShadow: '2px 2px 2px #000000'
  }

 return (
  <React.Fragment>
    <h1 style={tempStyle}>{Math.round(weather)}°F</h1>
    <p style={cityStyle}>Boston</p>
  </React.Fragment>
)}

export default Weather
