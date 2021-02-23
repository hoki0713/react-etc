import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Blog from './containers/Blog/Blog'

import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
      {/* <BrowserRouter basename="/my-app"> */}
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
