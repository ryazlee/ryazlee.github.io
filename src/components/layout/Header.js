import React, { Component } from 'react';
import DarkModeToggle from '../darkModeSupport/DarkModeToggle.js'
import { connectLinks } from '../../config.js'
import '../../styles.scss'

class Main extends Component {
  render() {
    return (
      <ul className='header'>
        <li><a className='link' href={connectLinks.resume}>Resume</a></li>
        <li><a className='link' href={connectLinks.linkedIn}>LinkedIn</a></li>
        <li><a className='link' href={connectLinks.github}>Github</a></li>
        <li><a className='link' href={connectLinks.email}>Email</a></li>
        <li><DarkModeToggle /></li>
      </ul>
    );
  }
}

export default Main;