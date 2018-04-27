import React, { Component } from 'react';
import { Card, CardImg, Button, Row, Col, Container,
  Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import '../styles/project.css';
import  PropTypes  from 'prop-types';

function ShowGitHubButton(props) {
  return (
    // Open in new tab
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

  // Show description of project if title of props passed down
  // is the todolist show warning that user needs a GitHub account to utilize application
  return (
    <div style={props.selectedDisplay === 'Description' ? { visibility: 'visible'}: {display: 'none'}}>
      <h5 className="project-desc project-header"> Description: </h5>
        <span style={props.title === 'React Todo List' ? {visibility: 'visible'} : {display: 'none'}} id='todo-warning'>
          *This application requires the user to have a GitHub account in order to use/view.*</span>
      <p className="project-desc">{props.description}</p>
    </div>
  )
}

// Show what each project was created with depending on the
// prop that is passed down
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


// Show details of each project based on
// the props that is being passed
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

// Function to display options to user
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
                style={choice === props.selectedDisplay ? { color: 'black', fontWeight: 700, textDecoration: 'underline'}: null}
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

// Ensure props being passed match to propType to prevent coercion error, etc.
SelectDisplay.propTypes = {
  selectedDisplay: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default class Project extends Component {
  constructor(props) {

    // Passes props to component
    super(props);
    // Set default state for project modals
    this.state = {
      modal: false,
      selectedDisplay: 'Description'
    };

    // Bind to this object
    this.toggle = this.toggle.bind(this);
    this.updateChoice = this.updateChoice.bind(this);
  }

  // Updates the user's choice when selecting any of the 3 options
  // selected choice will change what is shown accordingly
  updateChoice(choice) {
    this.setState(function () {
      return {
        selectedDisplay: choice
      }
    });
  }

  // Toggles whether or not if the modal is open
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    // Use spread operator to assign to props value
    // props contains information from each project
    const {...post} = this.props;

    let gitHubButton;
    // If there is a GitHub link show GitHub button
    if (post.ghLink) {
      gitHubButton = ShowGitHubButton(post);
    }

    let herokuButton;
    // If there's a Heroku link show Heroku button
    if (post.herokuLink) {
      herokuButton = ShowHerokuButton(post);
    }

    return (
      // Create modal to show information about a particular project
      <div>
        <h5 id="project-title">{post.title}</h5>
        <Card id="project-card">
          <a onClick={this.toggle}>
            <CardImg src={post.img} width="100%" height="100%"/>
            <div className="overlay">
              <div className="text">More Info</div>
            </div>
          </a>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            onClosed={() => {
              // Reset selectedDisplay to Description on closing modal
              if (this.state.selectedDisplay !== 'Description') {
                this.setState({
                  selectedDisplay: 'Description'
                })
              }
            }}
          >
            {/*
              Uses post (props) to populate the data for each modal
              so that the user can view the appropriate information
              for each individual project.
            */}
            <header>
              <ModalHeader toggle={this.toggle}>{post.title}</ModalHeader>
            </header>
            <ModalBody>
              <section className="project-details">
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
                <footer id="note">Please note that viewing these applications on Heroku may take some time as they are deployed with Heroku's free plan and it may take some time for the apps to 'wake up'.</footer>
              </section>
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