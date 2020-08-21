import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Weather from './components/Weather'

function App() {
  return (
    <div>
      <Route exact path='/' render={() =>
        <Layout>
          <Weather/>
        </Layout>
      } />
    </div>
  );
}

export default App;
