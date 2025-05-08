import React, { Component } from 'react';
import { connectLinks } from '../../config.js'
import '../../styles.scss'

class Main extends Component {
  render() {
    return (
      <div className="footer">
        <a className='link' href={connectLinks.resume}>Resume.pdf</a>
      </div>
    );
  }
}

export default Main;