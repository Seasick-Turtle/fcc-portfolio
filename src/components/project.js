import React, { Component } from 'react';
import { Card, CardImg, Button,
  Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

import '../styles/project.css';

function renderGitHubButton(props) {
  return (
    <a href={props.ghLink} target="_blank">
      <Button color="primary">View on GitHub</Button>
    </a>
  )
}

function renderHerokuButton(props) {
  return (
    <a href={props.herokuLink} target="_blank">
      <Button color="primary">View on Heroku</Button>
    </a>
  )
}

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
    const {...post} = this.props;
    let ghLink = this.props.ghLink;
    let herokuLink = this.props.herokuLink;

    let gitHubButton;
    if (ghLink) {
      gitHubButton = renderGitHubButton(post);
    }

    let herokuButton;
    if (herokuLink) {
      herokuButton = renderHerokuButton(post);
    }

    return (
      <div>
        <h5 id="project-title">{post.title}</h5>
        <Card id="project-card">
          <a onClick={this.toggle}>
            <CardImg src={post.img} width="100%" height="100%"/>
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
              {gitHubButton}
              {herokuButton}
            </ModalFooter>
          </Modal>
        </Card>
      </div>
    )
  }
}