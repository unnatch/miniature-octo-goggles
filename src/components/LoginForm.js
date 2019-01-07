import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';

export default class LoginForm extends React.Component {
  render() {
    return (
      <Jumbotron className="col-sm-4">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <Button>Login</Button>
      </Form>
      </Jumbotron>
    );
  }
}