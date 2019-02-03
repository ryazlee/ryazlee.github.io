import React, { Component } from 'react';
import logo from './../img/r_logo.png';
import ugmo_logo from './../img/ugmo_logo.png';
import skate_logo from './../img/skate_logo.png';
import './../css/styles.css';
import './../css/animate.css';
import './../css/ubuntu.css';
import Link from './Link.js'

const links_data = [
    {"name":"Resume", "source": "https://ryazlee.github.io/files/ryan_lee_resume.pdf"},
    {"name":"LinkedIn", "source": "https://www.linkedin.com/in/ryazlee/"},
    {"name":"Github", "source": "https://github.com/ryazlee"},
    {"name":"Email", "source": "mailto:ryanjlee@berkeley.edu"}
];

class App extends Component {
  render() {
    return (
      <div className="main">
        <header className="main">
          <span>
            <img src={ugmo_logo} className="sub_logo" alt="logo" />
            <img src={logo} className="logo" alt="logo" />
            <img src={skate_logo} className="sub_logo" alt="logo" />
          </span>
          <p className="animated fadeInDownBig">Ryan Lee</p>
        </header>
        <div className="section">
          {links_data.map(link => (
            <Link source={link.source} name={link.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
