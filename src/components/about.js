import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/about.css';

export default class About extends Component {
  render() {
    return (
      <section>
        <header>
          <h1 id="about">Who am I?</h1>
        </header>
        <Container fluid={true} id="a-container">
          <Row>
            {
              /*
                Resize column size of each section to provide a better
                experience of portfolio depending on the resolution of
                the user's screen
              */
            }
            <Col xs="12" sm='12' md='4' className="about-col">
              <header>
                <h3 className="about-title">About Me <i className="fa fa-user-circle-o" aria-hidden="true"></i></h3>
              </header>
              <hr/>
              <p>
                Hello there. My name is Christopher Martin, I'm a web developer. I recently graduated from Columbia College and finally earned my degree, a BS in Computer Information Systems.
              </p>
              <p>
                While at Columbia College I studied C++ and Java, although I enjoyed taking these classes I came to realize that I wanted to give web development a shot. Although this happened after my college experience, I realized how much I enjoyed making web applications.  Front end development has the great appeal of creating great looking & functioning websites for others to enjoy while back end development has its own interesting complexities.
              </p>
            </Col>
            <Col xs="12" sm='12' md='4' className="about-col">
              <header>
                <h3 className="about-title">What do I do? <i className="fa fa-laptop" aria-hidden="true"></i></h3>
              </header>
              <hr/>
              <p>
                Currently I'm focusing on front end development and ways to improve the way I write JavaScript along
                with understanding the language mechanics as a whole.
              </p>
              <p>
                With this in mind, my goal is to become a skilled full stack engineer with a deep understanding of JavaScript and other technologies so I may implement the proper tools along with great design methods.
              </p>
            </Col>
            <Col xs="12" sm='12' md='4' className="about-col">
              <header>
                <h3 className="about-title">My Toolbox <i className="fa fa-wrench" aria-hidden="true"></i></h3>
              </header>
              <hr/>
              <p>
                Here's a list of frameworks and other tools that I'm familiar with or have some knowledge of:
              </p>
              Front end:
              <ul>
                <li>
                  HTML, CSS, SCSS, JavaScript, React
                </li>
              </ul>
              Back end:
              <ul>
                <li>
                  Node, Express, Mongoose, Passport, MongoDB, Firebase
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

        </section>
    );
  }
}