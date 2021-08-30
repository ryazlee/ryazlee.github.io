import React, { Component } from 'react';
import ColoredLine from './ColoredLine';
import {connectLinks} from '../config.js'

class Main extends Component {
    render () {
      return (
        <div className='main'>
          <ColoredLine />
          I’m Ryan, a San Francisco Bay Area
          based software engineer at&nbsp;
          <a className="link" href="https://snap.com">Snapchat</a> 👻.  
          I specialize in mobile development where I reguarly code with React, 
          Objective-C, and Kotlin.
          <br /> 
          <br />
          In my free time, I enjoy staying active and learning more about 
          the software engineering world.  Feel free to check out some of my side projects on my&nbsp; 
          <a className="link" href={connectLinks.github}>GitHub</a>!
        </div>
      );
    }
  } 
  
  export default Main;