import React, { Component } from 'react';
import ColoredLine from './ColoredLine';

class Main extends Component {
    render () {
      return (
        <div className='main'>
          <ColoredLine />
          I’m Ryan, a San Francisco Bay Area
          based software engineer at&nbsp;
          <a className="link" href="https://snap.com">Snap Inc</a> 👻
          <br /> 
          <br />
          In my free time I enjoy learning more about the software engineering 
          world and working on smaller side projects :)
        </div>
      );
    }
  } 
  
  export default Main;