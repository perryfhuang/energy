import React from 'react'
import moment from 'moment'

const style = {
  // margin: '0 auto'
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'center',
  color: 'white',
  fontSize: '121px'
}

const Clock = () => {
  return(
      <h1 style={style}>{moment().format('h:mm A')}</h1>
  )
}
// const Clock =  <h1>TIME HERE</h1>


export default Clock
