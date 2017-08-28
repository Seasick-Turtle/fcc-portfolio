import React, { Component } from 'react';
import { Card, CardImg, Button,
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
    const { ...post } = this.props;

    return (
      <div>
        <h5 id="project-title">{post.title}</h5>
        <Card id="project-card">
          <a onClick={this.toggle}>
            <CardImg className="project-img" src={post.img} top width="100%" top height="100%"/>
            <div className="overlay">
              <div className="text">More Info</div>
            </div>
          </a>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>{post.title}</ModalHeader>
            <ModalBody>
              <div className="project-details">
                <h5>Description:</h5>
                <p>{post.description}</p>
                <h5>Created with: </h5>
                <p>{post.createdWith}</p>
                <h5>The Inner Workings:</h5>
                <p>{post.detail}</p>
              </div>
            </ModalBody>
            <ModalFooter>
              <a href={post.ghLink}>
                <Button color="primary">View on GitHub</Button>
              </a>
              <a href={post.herokuLink}>
                <Button color="primary">View on Heroku</Button>
              </a>
            </ModalFooter>
          </Modal>
        </Card>
      </div>
    )
  }
}