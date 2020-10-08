import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap';

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
      .catch(console.error)
  }, [])

  const handleClick = () => {
    document.querySelector('i').classList.add('newQuote')
    setTimeout(()=>document.querySelector('i').classList.remove('newQuote'), 200)
    axios({
      url: 'https://type.fit/api/quotes',
      method: 'GET'
    })
      .then(res => {
        const randomIndex = Math.ceil(Math.random() * 1644)
        setQuote(res.data[randomIndex].text)
        setAuthor(res.data[randomIndex].author)
      })
      .catch(console.error)
  }

  const quoteStyle = {
    color: 'white',
    position: 'absolute',
    left: '25%',
    fontSize: '18px',
    bottom: '20px',
    margin: '0 auto',
    width: '50%',
    textAlign: 'center'
}

  const authorStyle = {
    color: '#696969',
    fontSize: '14px'
  }

  return(
    <Container>
      <Row>
        <Col>
      <p style={quoteStyle}> "{quote}" <br/>{author ? <span style={authorStyle}>- {author}</span> : null}<br/><br/><span onClick={handleClick}><i className="fas fa-redo"></i></span></p>
        </Col>
      </Row>
    </Container>
  )
}


export default Quote
