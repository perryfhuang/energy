import React from 'react'
import moment from 'moment'

const Clock = () => {
  return(
    <h1>{moment().format('h:mm a')}</h1>
  )
}
// const Clock =  <h1>TIME HERE</h1>


export default Clock
