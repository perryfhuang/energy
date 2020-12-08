import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Weather from './components/Weather'
import ClockGreeting from './components/ClockGreeting'
import Quote from './components/Quote'

function App() {
  return (
    <div>
      <Route exact path='/' render={() =>
        <React.Fragment>
          <Layout>
            <ClockGreeting/>
          </Layout>
          <Weather/>
          <Quote/>
        </React.Fragment>
      } />
    </div>
  );
}

export default App;
