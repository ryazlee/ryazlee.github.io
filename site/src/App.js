import React, { Component } from 'react';
import logo from './img/r_logo.png';
import './App.css';
import Links from './components/Link.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Ryan Lee</p>
          <Links />
        </header>
      </div>
    );
  }
}

export default App;
