import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { tempStyle, cityStyle, searchBoxStyle, iconSwitch } from '../styling/WeatherStyling'

const Weather = props => {
  const [weather, setWeather] = useState('')
  const [temp, setTemp] = useState(null)
  const [currentCity, setCurrentCity] = useState('')
  const [searchCity, setSearchCity] = useState('')

  useEffect(() => {
    // Get request to weather API by city ID (Boston), imperial units (F) and using API key
    axios('https://api.openweathermap.org/data/2.5/weather?id=4930956&units=imperial&appid=781a567418681e7ce8ccb1e883108120')
      .then(res => {
        setWeather(res.data.weather[0].main)
        setTemp(res.data.main.temp)
        setCurrentCity(res.data.name)
      })
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setSearchCity(event.target.value)
  }

  const handleSubmit = event => {
    setSearchCity('')
    event.preventDefault()
    // Request weather for user inputted certain city
    axios(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=imperial&appid=781a567418681e7ce8ccb1e883108120`)
      .then(res => {
        setWeather(res.data.weather[0].main)
        setTemp(res.data.main.temp)
        setCurrentCity(res.data.name)
      })
      .catch(console.error)
  }

 return (
  <React.Fragment>
    <h1 style={tempStyle}>{iconSwitch(weather)} {Math.round(temp)}°F</h1>
    <p style={cityStyle}>{currentCity}</p>
    {/* Search box - currently in development */}
    {/* <form id='searchBox' style={searchBoxStyle} onSubmit={handleSubmit}>
      <input type="text" id="city" name="city" value={searchCity} onChange={handleChange}/><br/>
      <input type="submit" value="Submit"/>
    </form> */}
  </React.Fragment>
)}

export default Weather
