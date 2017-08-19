import React, { Component } from 'react';
import '../styles/App.css';
import Nav from './nav';
import About from './about';
import Contact from './contact';
import Projects from './projects';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div className="container">
            <h1 className="introduction">
              Hello, I'm Christopher Martin
              <br/>
              I'm a Web Developer
              <br/>
            </h1>
        </div>
        <div className="first-parallax" />
        <About id="#About"/>
        <div id="second-parallax" />
        <Projects/>
        <div id="third-parallax" />
        <Contact/>
        <div className="first-parallax" />
      </div>
    );
  }
}

export default App;
