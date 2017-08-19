import React, { Component } from 'react';
import '../styles/nav.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;



export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  scrollToAbout() {
    scroll.scrollTo(590);
  }

  scrollToProjects() {
    scroll.scrollTo(1120);
  }

  scrollToContact() {
    scroll.scrollTo(1650);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

    render() {
        return (
          <div>
            <Navbar color="inverse" inverse toggleable fixed="top">
              <NavbarToggler right onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink onClick={this.scrollToAbout} href="#About">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={this.scrollToProjects} href="#Projects">Projects</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={this.scrollToContact} href="#Contact">Contact</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
    }
}