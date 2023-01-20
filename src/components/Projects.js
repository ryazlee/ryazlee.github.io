import React, { Component } from 'react';
import '../styles.scss'
import { Card } from 'react-bootstrap'

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <Card border="primary" className='custom-card'>
          <Card.Header>SpOnGeBoB MeMeR</Card.Header>
          <Card.Img src="https://lh3.googleusercontent.com/JgeAij8xnDkQ6FZHPIbxHnJsMw37LCfGRC_ZQnlsJGkkte0u5PbzkTONx7mU0RVUIYHdgsuL=w128-h128-e365-rj-sc0x00ffffff" style={{ width: "10rem", margin: "auto", padding: "5%" }}></Card.Img>
          <Card.Body>
            <Card.Text>
              Small chrome extension that allows you to use the SpOnGeBoB MeMe with your friends!
            </Card.Text>
            <Card.Link href="https://github.com/ryazlee/spongebob_memer">Github Link</Card.Link>
          </Card.Body>
        </Card>

        <Card border="primary" className='custom-card'>
          <Card.Header>Cal Men's Ultimate Website</Card.Header>
          <Card.Img src="https://pbs.twimg.com/profile_images/1299777038589374464/PbcGTnzE_400x400.jpg" style={{ width: "10rem", margin: "auto", padding: "5%" }}></Card.Img>
          <Card.Body>
            <Card.Text>
              Current maintainer and developer of <a href="http://calmensultimate.org/">http://calmensultimate.org/</a>.  Contact me if there are any bugs...
            </Card.Text>
            <Card.Link href="https://github.com/ryazlee/spongebob_memer">Github Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Projects;