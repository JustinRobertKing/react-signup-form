import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Formform from './Formform'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <Formform />
        </header>
      </div>
    )
  }
}

export default App
