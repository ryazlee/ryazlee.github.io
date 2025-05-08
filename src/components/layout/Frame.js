import React, { Component } from 'react';
import peeking_bitmoji from '../../assets/peeking_bitmoji.png'
import '../../styles.scss'

class Frame extends Component {
  render() {
    return (
      <div className="bottomBitmoji">
        <img src={peeking_bitmoji} alt="Peeking Bitmoji"></img>
      </div>
    );
  }
}

export default Frame;