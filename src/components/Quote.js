import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Quotes from: https://forum.freecodecamp.org/t/free-api-inspirational-quotes-json-with-code-examples/311373

const Quote = () => {
  const [quote, setQuote] = useState()
  const [author, setAuthor] = useState()

  useEffect(() => {
    axios({
      url: 'https://type.fit/api/quotes',
      method: 'GET'
    })
      .then(res => {
        const randomIndex = Math.ceil(Math.random() * 1644)
        setQuote(res.data[randomIndex].text)
        setAuthor(res.data[randomIndex].author)
      })
      .then(() => console.log(quote))
      .catch(console.error)
  }, [])

  const style = {
    color: 'white',
    position: 'fixed',
    // backgroundSize: 'contain',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center center',
    // backgroundColor: 'black',
    bottom: '20px',
    margin: '0 auto'
}

  return(
    <h1 style={style}> "{quote}" - {author}</h1>
  )
}


export default Quote
