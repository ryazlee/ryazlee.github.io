import React, { Component } from 'react';
import '../styles.css'
import { connectLinks } from '../config.js'

class Main extends Component {
    render () {
      return (
        <div className="footer">
            <a className='link' href={connectLinks.resume}>Resume.pdf</a>
        </div>
      );
    }
  } 
  
  export default Main;