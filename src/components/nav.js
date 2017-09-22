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
var smoothScroll = require('smoothscroll');

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


    render() {

   // let handleClick = (event) => {
   //    event.preventDefault();
   //  };

      return (
          <div>
            <Navbar color="inverse" inverse toggleable fixed="top">
              <NavbarToggler right onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#about">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#projects">Projects</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#contact">Contact</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
    }
}