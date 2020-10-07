import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Weather from './components/Weather'
import Clock from './components/Clock'

function App() {
  return (
    <div>
      <Route exact path='/' render={() =>
        <Layout>
          <Weather/>
          <Clock/>
        </Layout>
      } />
    </div>
  );
}

export default App;
