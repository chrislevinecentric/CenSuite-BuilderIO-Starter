import React from "react";
import { Form } from "rsuite";

export default function CenForm(props) {
  return (
    <Form>
      <Form.Group controlId="name">
        <Form.ControlLabel>Username</Form.ControlLabel>
        <Form.Control name="name" />
        <Form.HelpText>Username is required</Form.HelpText>
      </Form.Group>
      <Form.Group controlId="email">
        <Form.ControlLabel>Email</Form.ControlLabel>
        <Form.Control name="email" type="email" />
        <Form.HelpText tooltip>Email is required</Form.HelpText>
      </Form.Group>
      <Form.Group controlId="password">
        <Form.ControlLabel>Password</Form.ControlLabel>
        <Form.Control name="password" type="password" autoComplete="off" />
      </Form.Group>
      <Form.Group controlId="textarea"></Form.Group>
    </Form>
  );
}
