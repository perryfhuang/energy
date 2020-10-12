import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = props => {
  const [weather, setWeather] = useState('')
  const [temp, setTemp] = useState(null)
  const [currentCity, setCurrentCity] = useState('')
  const [searchCity, setSearchCity] = useState('')



  // res.data.main.temp

  useEffect(() => {
    // Get request to weather API by city ID (Boston), imperial units (F) and using API key
    axios('https://api.openweathermap.org/data/2.5/weather?id=4930956&units=imperial&appid=781a567418681e7ce8ccb1e883108120')
      .then(res => {
        setWeather(res.data.weather[0].main)
        setTemp(res.data.main.temp)
        setCurrentCity(res.data.name)
        console.log(res)
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
        console.log(res)
        setWeather(res.data.weather[0].main)
        setTemp(res.data.main.temp)
        setCurrentCity(res.data.name)
      })
      .catch(console.error)
  }

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

  const searchBoxStyle = {
    position: 'fixed',
    top: '60px',
    right: '20px',
    padding: '0',
    margin: '0',
  }

  const icons = {
  clear: '☀',
  rain: '️🌧',
  storm: '⛈',
  snow: '🌨',
  mist: '🌫',
  clouds: '☁',
}

  const iconSwitch = weather => {
    switch(weather) {
      case 'Clear':
        return icons.clear
      case 'Rain':
        return icons.rain
      case 'Storm':
        return icons.storm
      case 'Snow':
        return icons.snow
      case 'Mist':
        return icons.mist
      case 'Clouds':
        return icons.clouds
      default:
        return null
    }
  }

 return (
  <React.Fragment>

    <h1 style={tempStyle}>{iconSwitch(weather)} {Math.round(temp)}°F</h1>
    <p style={cityStyle}>{currentCity}</p>
    {/* <form id='searchBox' style={searchBoxStyle} onSubmit={handleSubmit}>
      <input type="text" id="city" name="city" value={searchCity} onChange={handleChange}/><br/>
      <input type="submit" value="Submit"/>
    </form> */}
  </React.Fragment>
)}

export default Weather
