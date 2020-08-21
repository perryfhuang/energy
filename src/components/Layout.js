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
  //       orientation: 'landscape'
  //     },
  //     headers: {
  //       Authorization: 'Client-ID yk23mYmfN4Xl5vnoDvdHhIw3F_VRVUHH3ITwz-EzRrk'
  //     }
  //   })
  //     .then(res => setPic(res.data.urls.raw) && console.log(res))
  //     .catch(console.error)
  // }, [])

  // https://images.unsplash.com/photo-1596564211273-4707f6b992f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE1OTQ0Nn0

  // https://images.unsplash.com/photo-1585039805664-50784b28009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE1OTQ0Nn0

  const style = {
    background: `black url(https://images.unsplash.com/photo-1585039805664-50784b28009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE1OTQ0Nn0) no-repeat center center/cover`,
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
    margin: '0'
}

 return (
  <div style={style}>
    This is the layout component
    {props.children}
  </div>
)}

export default Layout
