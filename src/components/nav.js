import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

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
        return (
          <div>
            <Navbar color="inverse" inverse toggleable fixed="top">
              <NavbarToggler right onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="#">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Projects</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">Contact</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>

        );
    }
}