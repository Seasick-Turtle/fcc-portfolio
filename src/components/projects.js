import React, { Component } from 'react';
import Project from './project';
import { Button, Container, Col, Row } from 'reactstrap';
import ReactTimerAppThumbnail from '../images/ReactTimerAppThumbnail.jpg';
import ReactWeatherAppThumbnail from '../images/ReactWeatherAppThumbnail.jpg';
import TodoAppThumbnail from '../images/TodoAppThumbnail.jpg';
import YelpCampAppThumbnail from '../images/YelpCampAppThumbnail.jpg';

import '../styles/projects.css';

export default class Projects extends Component {

  render() {
    return (
      <div>
        <h1 id="projects">Projects</h1>
        <Container/>
        <Row className="dev">
          <Col className="icon-col" xs="12">
            <i className="devicon-html5-plain colored"></i>
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>
          </Col>
          <Col className="icon-col" xs="12">
            <i className="devicon-react-original colored"></i>
          </Col>
          <Col className="icon-col" xs="12">
            <i className="devicon-webpack-plain colored"></i>
            <i className="devicon-mongodb-plain-wordmark colored"></i>
            <i className="devicon-nodejs-plain colored"></i>
          </Col>
        </Row>
        <Container fluid={true}>
          <hr/>
          <Row >
            <Col className="project-item" xs="12" sm="6" md="4">
              <Project
                title='React Timer App'
                img={ReactTimerAppThumbnail}
                description="React Timer app"
                createdWith="React"
              />
            </Col>
            <Col className="project-item" xs="12" sm="6" md="4">
              <Project
                title='React Todo App'
                img={TodoAppThumbnail}
                description="React Todo App"
              />
            </Col>
            <Col className="project-item" xs="12" sm="6" md="4">
              <Project
                title='React Weather App'
                img={ReactWeatherAppThumbnail}
                description="React Weather App"
              />
            </Col>
            <Col className="project-item" xs="12" sm="6" md="4">
              <Project
                title='YelpCamp App'
                img={YelpCampAppThumbnail}
                description="React Weather App"
              />
            </Col>
          </Row>
          <hr/>
        </Container>
      </div>
    );
  }
}

