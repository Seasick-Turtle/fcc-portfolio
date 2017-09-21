import React, { Component } from 'react';
import { Card, CardImg, Button, Row, Col, Container,
  Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import '../styles/project.css';
import { PropTypes } from 'prop-types';

function ShowGitHubButton(props) {
  return (
    <a href={props.ghLink} target="_blank">
      <Button className="project-links"  color="primary">View on GitHub</Button>
    </a>
  )
}

function ShowHerokuButton(props) {
  return (
    <a className="project-links" href={props.herokuLink} target="_blank">
      <Button className="project-links"  color="primary">View on Heroku</Button>
    </a>
  )
}

function ShowDescription(props) {

  if(props.title === 'React Todo List'){
    return (
      <div style={props.selectedDisplay === 'Description' ? { visibility: 'visible'}: {display: 'none'}}>
        <h5 className="project-desc project-header"> Description: </h5>
        <span id='todo-warning'>*This application requires the user to have a GitHub account in order to use/view.*</span>
        <p className="project-desc">{props.description}</p>
      </div>
    )
  }

  return (
    <div style={props.selectedDisplay === 'Description' ? { visibility: 'visible'}: {display: 'none'}}>
      <h5 className="project-desc project-header"> Description: </h5>
      <p className="project-desc">{props.description}</p>
    </div>
  )
}

function ShowCreated(props) {
  return (
    <div style={props.selectedDisplay === 'Created With' ? { visibility: 'visible'}: {display: 'none'}}>
      <h5 className="project-desc project-header"> Created With: </h5>
      <ul>
        {props.createdWith.map((created) => {
          return (
              <li className="project-created" key={created}>
                {created}
              </li>
          )
        })}
      </ul>
    </div>
  )
}

function ShowDetails(props) {
  return (
    <div style={props.selectedDisplay === 'More Details' ? { visibility: 'visible'}: {display: 'none'}}>
      <h5 className="project-desc project-header"> More Details: </h5>
      {props.detail.map((details) =>{
        return <p className="project-details" key={details}>{details}</p>
      })}
    </div>
  )
}

function SelectDisplay(props) {
  const choices = ['Description', 'Created With', 'More Details'];

  return (
    <Container fluid={true}>
      <Row >
        {choices.map(function (choice) {
          return (
            <Col
              xs='4'
              key={choice}
              className="select-column">
              <li
                style={choice === props.selectedDisplay ? { color: 'black', fontWeight: 700}: null}
                onClick={props.onSelect.bind(null, choice)}
                className="select-item"
                >
                {choice}
              </li>
            </Col>
            )
          }, this)}
      </Row>
    </Container>
  )
}

SelectDisplay.PropTypes = {
  selectedDisplay: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      selectedDisplay: 'Description'
    };

    this.toggle = this.toggle.bind(this);
    this.updateChoice = this.updateChoice.bind(this);
  }

  updateChoice(choice) {
    this.setState(function () {
      return {
        selectedDisplay: choice
      }
    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const {...post} = this.props;

    let gitHubButton;
    if (post.ghLink) {
      gitHubButton = ShowGitHubButton(post);
    }

    let herokuButton;
    if (post.herokuLink) {
      herokuButton = ShowHerokuButton(post);
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
                <SelectDisplay
                  selectedDisplay={this.state.selectedDisplay}
                  onSelect={this.updateChoice}
                />
                <hr/>
                <ShowDescription
                  selectedDisplay={this.state.selectedDisplay}
                  {...post}
                />
                <ShowCreated
                  selectedDisplay={this.state.selectedDisplay}
                 {...post}
                 />
                <ShowDetails
                  selectedDisplay={this.state.selectedDisplay}
                  {...post}
                />
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