import React, { Component } from 'react';
import logo from './../img/r_logo.png';
import './../css/App.css';
import Link from './Link.js'

const links_data = [
    {"name":"LinkedIn", "source": "https://www.linkedin.com/in/ryazlee/"},
    {"name":"Github", "source": "https://github.com/ryazlee"},
    {"name":"Email", "source": "mailto:ryanjlee@berkeley.edu"}
];

class App extends Component {
  render() {
    console.log(links_data);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Ryan Lee</p>

          {links_data.map(link => (
            <Link source={link.source} name={link.name} />
          ))}

        </header>
      </div>
    );
  }
}

export default App;
