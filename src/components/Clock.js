import React from 'react'
import moment from 'moment'

const style = {
  // margin: '0 auto'
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  color: 'white',
  fontSize: '121px',
  textShadow: '5px 5px 4px #000000'
}

const Clock = () => {
  return(
      <h1 style={style}>{moment().format('h:mm A')}</h1>
  )
}

export default Clock
