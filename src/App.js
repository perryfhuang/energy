import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'

function App() {
  return (
    <div>
      <Route exact path='/' component={Layout} />
    </div>
  );
}

export default App;
