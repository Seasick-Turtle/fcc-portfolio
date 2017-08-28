import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

import '../styles/project.css';


export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <h5 id="project-title">{this.props.title}</h5>
        <Card id="project-card">
          <a onClick={this.toggle}>
            <CardImg className="project-img" src={this.props.img} top width="100%" top height="100%"/>
          </a>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalBody>
              <div className="project-details">
                <h5>Description:</h5>
                <p>{this.props.description}</p>
                <h5>Created with: </h5>
                <p>{this.props.createdWith}</p>
              </div>
            </ModalBody>
          </Modal>
        </Card>
      </div>
    )
  }
}