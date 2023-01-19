import React, { Component } from 'react';
import ColoredLine from './ColoredLine';
import { connectLinks } from '../config.js'

class Main extends Component {
  render() {
    return (
      <div className='main'>
        <ColoredLine />
        hello👋! i'm ryan, a san francisco based software engineer at&nbsp;
        <a className="link" href="https://aurora.tech/">aurora</a>.
        i specialize in mobile and web app front end development where i reguarly code with react,
        objective-c, and kotlin.
        <br />
        <br />
        in my free time, i enjoy staying active and learning more about
        the software engineering world.  feel free to check out some of my side projects on my&nbsp;
        <a className="link" href={connectLinks.github}>github</a>!
      </div>
    );
  }
}

export default Main;