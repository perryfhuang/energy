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

export { tempStyle, cityStyle, searchBoxStyle, icons, iconSwitch }
