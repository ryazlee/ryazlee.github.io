import React, { Component } from 'react';
import '../styles.scss'
import { connectLinks } from '../config.js'
import DarkModeToggle from './DarkModeSupport/DarkModeToggle.js'

class Main extends Component {
    render () {
      return (
        <ul className='header'>
          <li>LinkedIn</li>
          <li>Email</li>
        
          <li className="darkModeToggle">
             <DarkModeToggle />
           </li>
        </ul>
      );
    }
  } 
  
  export default Main;