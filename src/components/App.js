import React, { Component } from 'react';
import '../style/App.css';
import Nav from './nav';
import About from './about';
import Contact from './contact';
import Projects from './projects';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div id="first-parallax" />
        <About />
        <div id="second-parallax" />
        <Projects/>
        <div id="third-parallax" />
        <Contact/>
      </div>
    );
  }
}

export default App;
