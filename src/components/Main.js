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
          In my free time I enjoy playing ultimate frisbee for&ensp;
          <a className="link" href="https://www.youtube.com/channel/UCKgR8SJmRb23k9WPwN0B-zg">Cal Ultimate</a>
          &ensp;and learning more about the software engineering world :)
        </div>
      );
    }
  } 
  
  export default Main;