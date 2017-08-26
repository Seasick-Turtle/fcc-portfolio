import React, { Component } from 'react';
import '../styles/contact.css';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';


export default class Contact extends Component {

  render() {
    return (
      <div>
        <h1 id="contact">Contact</h1>
        <hr/>
        <h3 id="cont-intro">Want to get in touch with me or check out my social media?</h3>
        <div>

        </div>

        <Container id="c-form">
          <Row>
            <Col sm={{ size: 6, push: 2, pull: 2, offset: 1 }}>
              <Form  action="https://formspree.io/martincdev@gmail.com" method="POST">
                <FormGroup>
                  <Label>Name: </Label>
                  <Input type="text" name="name"/>
                </FormGroup>
                <FormGroup>
                  <Label>Email: </Label>
                  <Input type="email" name="email"/>
                </FormGroup>
                <FormGroup>
                  <Label>Message: </Label>
                  <Input type="textarea"/>
                </FormGroup>
                <Button type="submit">Send</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}