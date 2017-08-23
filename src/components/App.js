import React, { Component } from 'react';
import '../styles/App.css';
import Nav from './nav';
import About from './about';
import Contact from './contact';
import Projects from './projects';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <div className="container">
          <div className="introduction">
            In an ocean of technology and information
            <br/>
            Here's my corner of the Internet
            <br/>
            <h1 id="create"> Let's create something together</h1>
          </div>
        </div>
        <div className="first-parallax"/>
        <About id="#About"/>
        <div id="second-parallax"/>
        <Projects/>
        <div id="third-parallax"/>
        <Contact/>
        <div className="first-parallax"/>
      </div>
    );
  }
}


