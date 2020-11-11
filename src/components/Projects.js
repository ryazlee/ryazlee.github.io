import React, { Component } from 'react';
import '../styles.scss'
import { Card } from 'react-bootstrap'

class Main extends Component {
    render () {
      return (
        <Card border="primary" className='custom-card' style={{ width: '18rem' }}>
            <Card.Header>SpOnGeBoB MeMeR</Card.Header>
            <Card.Body>
                <Card.Subtitle><a href="https://github.com/ryazlee/spongebob_memer">Github Link</a></Card.Subtitle>
                <Card.Text>
                    Small chrome extension that allows you to use the SpOnGeBoB MeMe with your friends!
                </Card.Text>
            </Card.Body>
        </Card>
      );
    }
  } 
  
  export default Main;