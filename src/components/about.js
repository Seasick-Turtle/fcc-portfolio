import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/about.css';

export default class About extends Component {
  render() {
    return (
      <div id="">
        <h1 id="about">Who am I?</h1>
        <Container fluid={true} id="a-container">
          {/*<hr/>*/}
          <Row>
            <Col xs={{ size: 4,  }} md="4" lg="4" className="a-div">
              <h3 className="a-title">About Me <i className="fa fa-user-circle-o" aria-hidden="true"></i></h3>
              <hr/>
              <p>
                Hello there. My name is Christopher Martin and I'm an aspiring web developer. I recently graduated from Columbia College and finally earned my degree, a Bachelor's of Science in Computer Information Systems.
              </p>
              <p>
                While at Columbia College I studied C++ and Java, although I enjoyed taking these classes I wanted to do something different.
              </p>
            </Col>
            <Col xs={{ size: 4 }} md="4" lg="4" className="a-div">
              <h3 className="a-title">What do I do? <i className="fa fa-laptop" aria-hidden="true"></i></h3>
              <hr/>
              <p>
                Currently I'm working on front end web development but eventually I'll learn more about back end technologies.
              </p>
            </Col>
            <Col xs={{ size: 4 }} md="4" lg="4" className="a-div">
              <h3 className="a-title">My Toolbox <i className="fa fa-wrench" aria-hidden="true"></i></h3>
              <hr/>
              <p>
                Wondering what technologies I've used? Here's a list of them :
              </p>
              Front end:
              <ul>
                <li>
                  HTML, CSS, SCSS, JavaScript, React.JS
                </li>
              </ul>
              Back end:
              <ul>
                <li>
                  Node.JS, Express, Mongoose.JS, Passport.JS
                </li>
              </ul>
              Databases:
              <ul>
                <li>
                  MongoDB, Firebase
                </li>
              </ul>
              Other Tools:
              <ul>
                <li>
                  Redux, Mocha, Karma, Bootstrap, Webpack, Heroku
                </li>
              </ul>
            </Col>
          </Row>
        </Container>

        </div>
    );
  }
}