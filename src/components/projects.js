import React, { Component } from 'react';
import Project from './project';
import { Container, Col, Row } from 'reactstrap';
import ReactTimerAppThumbnail from '../images/ReactTimerAppThumbnail.jpg';
import ReactWeatherAppThumbnail from '../images/ReactWeatherAppThumbnail.jpg';
import TodoAppThumbnail from '../images/TodoAppThumbnail.jpg';
import YelpCampAppThumbnail from '../images/YelpCampAppThumbnail.jpg';

import '../styles/projects.css';


export default class Projects extends Component {

  render() {
    const timerDetail = {
      title:'React Timer App',
      description:'This is a React based application that allows ' +
      'users to start a timer or set a countdown specified in seconds.',
      createdWith:"React, Webpack, Karma, Foundation, ES6",
      detail: [
        <p>This application's state is handled on the component level, it passes props to children components and uses the props to show the appropriate information.</p>,
        <p>The countdown component</p>
      ],
      ghLink:"https://github.com/Seasick-Turtle/ReactTimerApp",
      herokuLink:'https://arcane-dusk-11755.herokuapp.com/'
    };

    const todoDetail = {
      title:'React Todo App',
      description:"React Todo App",
      detail:[

      ],
      ghLink:"https://github.com/Seasick-Turtle/react-todo",
      herokuLink:"http://obscure-shore-70049.herokuapp.com/#/todos?_k=qbwutq"
    };
    const weatherDetail = {
      title:'React Weather App',
      description:"React Weather App",
      detail:[

      ],
      ghLink:"https://github.com/Seasick-Turtle/ReactWeather",
      herokuLink:"http://sleepy-stream-38308.herokuapp.com/#/?_k=mwg89e"
    };
    const campDetail = {
      title:'YelpCamp App',
      description:"YelpCamp App",
      detail:[

      ],
      herokuLink:"https://sleepy-basin-78536.herokuapp.com/"
    };
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
                img={ReactTimerAppThumbnail}
                {...timerDetail}
              />
            </Col>
            <Col className="project-item" xs="12" sm="6" md="4">
              <Project
                img={TodoAppThumbnail}
                {...todoDetail}
              />
            </Col>
            <Col className="project-item" xs="12" sm="6" md="4">
              <Project
                img={ReactWeatherAppThumbnail}
                {...weatherDetail}
              />
            </Col>
            <Col className="project-item" xs="12" sm="6" md="4">
              <Project
                img={YelpCampAppThumbnail}
                {...campDetail}
              />
            </Col>
          </Row>
          <hr/>
        </Container>
      </div>
    );
  }
}

