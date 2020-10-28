import React, { Component } from 'react';
import '../styles.scss'
import { connectLinks } from '../config.js'
import DarkModeToggle from './DarkModeSupport/DarkModeToggle.js'

class Main extends Component {
    render () {
      return (
        <ul className='header'>
          <li><a href={connectLinks.twitter}>Twitter</a></li>
          <li><a href={connectLinks.linkedIn}>LinkedIn</a></li>
          <li><a href={connectLinks.email}>Email</a></li>
          <li >
            <DarkModeToggle />
          </li>
        </ul>
      );
    }
  } 
  
  export default Main;