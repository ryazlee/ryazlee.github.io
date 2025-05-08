import React, { Component } from "react";
import ColoredLine from "./layout/ColoredLine.js";
import { connectLinks } from "../config.js";

class Main extends Component {
  render() {
    return (
      <div className="main">
        <ColoredLine />
        Hello 👋! I'm Ryan, a San Francisco based software engineer at
        <span> <a className="link" href="https://aurora.tech/">Aurora</a></span>.
        I specialize in frontend and mobile development, where I primarily build
        and maintain an extendable visualization web app.
        <br />
        <br />
        In my free time, I enjoy staying active and giving back to my community! If you want to get
        connected, feel free to shoot me a message on
        <span> <a className="link" href={connectLinks.linkedIn}>LinkedIn</a> </span>
        or send me an <span><a className="link" href={connectLinks.email}>email</a></span>.
        <br />
        <br />
        Cheers! 🍻
      </div>
    );
  }
}

export default Main;
