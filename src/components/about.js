import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/about.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <h1 id="about">Who am I?</h1>
        <Container>
          <hr/>
          <Row>
            <Col xs={{ size: 4 }} md="4" lg="4" id="about-me">
              <h3 id="a-title">About Me</h3>
              <p>
                Hello there. My name is Christopher Martin and I'm an aspiring web developer. I recently graduated from Columbia College and finally earned my degree, a Bachelor's of Science in Computer Information Systems.
              </p>
            </Col>
            <Col xs={{ size: 4 }} md="4" lg="4">
              <h3>What do I do?</h3>
              <p>
                Currently I'm working on front end web development but eventually I'll learn more about back end technologies.
              </p>
            </Col>
            <Col xs={{ size: 4 }} md="4" lg="4">
              <h3>My Toolbox</h3>
              Front end:
              <ul>
                <li>
                  React.JS
                </li>
              </ul>
              Back end:
              <ul>
                <li>
                  Node.Js
                </li>
              </ul>
            </Col>
          </Row>
        </Container>

        </div>
    );
  }
}