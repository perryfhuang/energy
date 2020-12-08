import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Layout = props => {
  const [pic, setPic] = useState(null)

  useEffect(() => {
    axios({
      url: 'https://api.unsplash.com/photos/random',
      method: 'GET',
      params: {
        collections: '1065396'
      },
      headers: {
        Authorization: 'Client-ID yk23mYmfN4Xl5vnoDvdHhIw3F_VRVUHH3ITwz-EzRrk'
      }
    })
      .then(res => setPic(res.data.urls.regular))
      .catch(console.error)
  }, [])

  const style = {
    background: `black url(${pic}) no-repeat center center/cover`,
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    padding: '0',
    margin: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

 return (
  <div style={style}>
    {/* This renders Clock component as a child */}
    {props.children}
  </div>
)}

export default Layout
