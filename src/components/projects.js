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
      title:'React Timer',
      description:'This is a React based application that allows ' +
      'users to start a timer or set a countdown specified in seconds.',
      createdWith:"React, React Router v2, Webpack, Karma, Foundation, ES6",
      detail: [
        'This application\'s state is handled on the component level, it passes props to children components and uses the props to show the appropriate information. The navigation bar at the top utilizes React Router v2, when the user clicks on a link the state will update and re-render the active component.',
        'For example, the Countdown component passes count as props to Clock, which uses it to update the state (in this case, it will update each second that changes).'
      ],
      ghLink:"https://github.com/Seasick-Turtle/ReactTimerApp",
      herokuLink:'https://arcane-dusk-11755.herokuapp.com/'
    };

    const todoDetail = {
      title:'React Todo List',
      description:'This application allows the user to create a todo list with the ability to mark todos as completed, search through the todos, and toggle whether or not completed todos are displayed. Todos also show the date they were created and completed.',
      createdWith:'React, Firebase, Redux, Redux Thunk, Axios, Express',
      detail:[
        <span id='todo-warning'>*This application requires the user to have a GitHub account in order to use/view.*</span>,
        'This application uses Google\'s Firebase to store each user\'s todos and has a required login method that has user authentication. '
      ],
      ghLink:"https://github.com/Seasick-Turtle/react-todo",
      herokuLink:"http://obscure-shore-70049.herokuapp.com/#/todos?_k=qbwutq"
    };
    const weatherDetail = {
      title:'React Weather',
      description:"React Weather",
      detail:[

      ],
      ghLink:"https://github.com/Seasick-Turtle/ReactWeather",
      herokuLink:"http://sleepy-stream-38308.herokuapp.com/#/?_k=mwg89e"
    };
    const campDetail = {
      title:'YelpCamp',
      description:"YelpCamp",
      detail:[

      ],
      herokuLink:"https://sleepy-basin-78536.herokuapp.com/"
    };
    return (
      <div>
        <h1 id="projects">Projects</h1>
        <Container fluid={true}>
        <Row className="dev">
          <Col xs="12">
            <i className="devicon-html5-plain colored"></i>
            <i className="devicon-css3-plain colored"></i>
            <i className="devicon-javascript-plain colored"></i>
          </Col>
        </Row>
          <Row className="dev">
            <Col id='react-icon' xs="12">
              <i className="devicon-react-original colored"></i>
            </Col>
          </Row>
          <Row className="dev">
            <Col xs="12">
              <i className="devicon-webpack-plain colored"></i>
              <i className="devicon-mongodb-plain-wordmark colored"></i>
              <i className="devicon-nodejs-plain colored"></i>
            </Col>
          </Row>
        </Container>
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

