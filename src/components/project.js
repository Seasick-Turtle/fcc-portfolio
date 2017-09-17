import React, { Component } from 'react';
import { Card, CardImg, Button, ButtonGroup, Row, Col, Container,
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
      modal: false,
      collapse: false,
      active: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleCollapse() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggleActive() {
    const displayText = this.state.active;
    this.setState({
      active: !displayText
    })
  }

  render() {
    const {...post} = this.props;

    let gitHubButton;
    if (post.ghLink) {
      gitHubButton = renderGitHubButton(post);
    }

    let herokuButton;
    if (post.herokuLink) {
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
                <Container className="switchBtns">
                  <ButtonGroup >
                    <Button>Description</Button>
                    <Button>Created With</Button>
                    <Button>More Info</Button>
                  </ButtonGroup>
                </Container>
                <hr/>
                <h5 className="project-open">Description:</h5>
                <p>{post.description}</p>
                <h5 className="project-open">Created with: </h5>
                <p>{post.createdWith}</p>
                <h5 className="project-open">More details:</h5>
                {post.detail.map((details) =>{
                  return <p key={details}>{details}</p>
                })}
                <p id="note">Please note that viewing these applications on Heroku may take some time as they are deployed with Heroku's free plan and it may take some time for the apps to 'wake up'.</p>
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