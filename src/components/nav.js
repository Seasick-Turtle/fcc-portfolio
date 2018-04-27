import React, { Component } from 'react';
import '../styles/nav.css';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
var smoothScroll = require('smoothscroll');

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }


    render() {
      return (
          <nav className='navigation'>
            <Navbar color="dark" dark expand={'sm'} fixed='top' >
              <NavbarBrand />
              <NavbarToggler right='true' onClick={this.toggleNavbar} />
              <Collapse isOpen={!this.state.collapsed} navbar>
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
          </nav>
        );
    }
}