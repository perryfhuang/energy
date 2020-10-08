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

  const quoteStyle = {
    color: 'white',
    // position: 'fixed',
    position: 'absolute',
    left: '25%',
    fontSize: '16.2px',
    bottom: '20px',
    margin: '0 auto',
    width: '50%',
    textAlign: 'center'
}

  const authorStyle = {
    color: '#A9A9A9',
    fontSize: '12px'
  }

  return(
    <p style={quoteStyle}> "{quote}" <br/>{author ? <span style={authorStyle}>- {author}</span> : null}</p>
  )
}


export default Quote
