import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Layout = props => {
  // const [pic, setPic] = useState(null)
  //
  // useEffect(() => {
  //   axios({
  //     url: 'https://api.unsplash.com/photos/random',
  //     method: 'GET',
  //     params: {
  //       // orientation: 'landscape'
  //       // Collection: https://unsplash.com/collections/1065396/desktop-wallpapers
  //       collections: '1065396'
  //     },
  //     headers: {
  //       Authorization: 'Client-ID yk23mYmfN4Xl5vnoDvdHhIw3F_VRVUHH3ITwz-EzRrk'
  //     }
  //   })
  //     .then(res => setPic(res.data.urls.raw) && console.log(res))
  //     .catch(console.error)
  // }, [])


  const style = {
    background: `black url(https://images.unsplash.com/photo-1460858919142-ffc0a74e3702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE1OTQ0Nn0) no-repeat center center/cover`,
    // background: `black url(${pic}) no-repeat center center/cover`,
    position: 'fixed',
    // backgroundSize: 'contain',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundColor: 'black',
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
    {props.children}
  </div>
)}

export default Layout
