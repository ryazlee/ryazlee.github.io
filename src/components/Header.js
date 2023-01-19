import React, { Component } from 'react';
import DarkModeToggle from './DarkModeSupport/DarkModeToggle.js'
import { connectLinks } from '../config.js'
import '../styles.scss'

class Main extends Component {
  render() {
    return (
      <ul className='header'>
        <li><a className='link' href={connectLinks.resume}>resume</a></li>
        <li><a className='link' href={connectLinks.linkedIn}>linkedin</a></li>
        <li><a className='link' href={connectLinks.github}>github</a></li>
        <li><a className='link' href={connectLinks.email}>email</a></li>
        <li><DarkModeToggle /></li>
      </ul>
    );
  }
}

export default Main;