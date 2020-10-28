import React, { Component } from 'react';
import '../styles.css'

class Main extends Component {
    render () {
      return (
        <div>
            I’m Ryan, a San Francisco Bay Area
            based software engineer currently 
            working at   
            <a className='link' href="https://snap.com">Snap Inc</a> 👻
            <br/> 
            In my free time I enjoy playing ultimate frisbee for
            <a className='link' href="https://www.youtube.com/channel/UCKgR8SJmRb23k9WPwN0B-zg">Cal UGMO</a> 
            and learning more about the engineering world :)
        </div>
      );
    }
  } 
  
  export default Main;