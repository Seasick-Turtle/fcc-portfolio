import React, { Component } from 'react';
import Project from './project';
import { Container, Col, Row } from 'reactstrap';
import ReactTimerAppThumbnail from '../images/ReactTimerAppThumbnail.47ecb1a4.jpg';
import ReactWeatherAppThumbnail from '../images/ReactWeatherAppThumbnail.84e381b5.jpg';
import TodoAppThumbnail from '../images/TodoAppThumbnail.4b993cb7.jpg';
import YelpCampAppThumbnail from '../images/YelpCampAppThumbnail.d633e6b0.jpg';

import '../styles/projects.css';


export default class Projects extends Component {

  render() {
    const timerDetail = {
      title:'React Timer',
      description:'This is a React based application that allows ' +
      'users to start a timer or set a countdown specified in seconds.',
      createdWith: ['ES6', 'Foundation', 'Karma', 'React', 'React Router v2', 'SCSS', 'Webpack v1' ],
      detail: [
        'This application\'s state is handled on the component level, it passes props to children components and uses the props to show the appropriate information. The navigation bar at the top utilizes React Router v2, when the user clicks on a link the state will update and re-render the active component.',
        'For example, the Countdown component passes count as props to Clock, which uses it to update the state (in this case, it will update as seconds progress or stop).'
      ],
      ghLink:"https://github.com/Seasick-Turtle/ReactTimerApp",
      herokuLink:'https://arcane-dusk-11755.herokuapp.com/'
    };

    const todoDetail = {
      title:'React Todo List',
      description:'This application allows the user to create a todo list with the ability to mark todos as completed, search through the todos, and toggle whether or not completed todos are displayed. Todos also show the date they were created and completed.',
      createdWith:['Axios', 'ES6', 'Express', 'Firebase', 'React',  'Redux', 'Redux Thunk', 'SCSS', 'Webpack v1'],
      detail:[
        ' This application uses Google\'s Firebase to store each user\'s todos allowing for the list to be changed (via adding todos, toggling completed, searching, and showing completed). Redux is used to create action creators, an application level store, and reducers in order to perform functions including logging in and out.',
        'The application also has a required login method that has user authentication; users cannot use the app until the credentials are verified with GitHub. There are key details that are verified through Firebase that will determine what the specifics of the current user\'s details are.'

      ],
      ghLink:"https://github.com/Seasick-Turtle/react-todo",
      herokuLink:"http://obscure-shore-70049.herokuapp.com/#/todos?_k=qbwutq"
    };
    const weatherDetail = {
      title:'React Weather',
      description:"This is a React application that allows users to check the weather for a specific city in Fahrenheit.",
      createdWith: ['Axios', 'ES6', 'Express', 'React', 'SCSS', 'Webpack v1'],
      detail:[
        'When a user enters a city name in the search bar, Axios sends an AJAX request to Open Weather Map. A promise is used to ensure that the request is successful, if it is then weather information is displayed. Otherwise if there is an error, a message will be displayed to the user.'
      ],
      ghLink:"https://github.com/Seasick-Turtle/ReactWeather",
      herokuLink:"http://sleepy-stream-38308.herokuapp.com/#/?_k=mwg89e"
    };
    const campDetail = {
      title:'YelpCamp',
      description:"This is mainly a Express/Node.js application, it allows users to sign up, create posts, add comments, or even delete comments. This also features a splash screen that allows users to view example campgrounds.",
      createdWith: [ 'EJS','Express', 'Node', 'MongoDB', 'Mongoose', 'REST API', 'Passport'],
      detail:[
        'This particular application takes advantage of RESTful architecture making the proper requests. For example: GET to retrieve the route such as the index page storing the list of campgrounds, POST to create new campgrounds, PUT to update a campground posting, and DELETE to remove the selected campground. ',
        'All campgrounds and their related data (such as comments or campground details) are stored within a MongoDB database. As such, there are different Mongoose schemas set for the campgrounds, comments, and users. Each schema details what is to be included in each object and provides validation for each property.',
        'Passport.js is used to establish a session once a user has successfully logged in it will also serialize and deserialize user instances. It is also worth mentioning that this application takes advantage of using middleware that checks if users are logged in to post and if they are, if they own the campground post or comment. If a user meets all conditions, then they will be able to delete, edit, or create posts.'
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

