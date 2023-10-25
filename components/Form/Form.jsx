import React from "react";
import { Form, ButtonToolbar, Button, Input } from "rsuite";

export default function CenForm(props) {
  const formElement = [
    {
      text: "UserName",
      name: "name",
      type: "text",
      errorMessage: "username is required",
      helptext: "Required",
    },
    {
      text: "Email",
      name: "email",
      type: "email",
      errorMessage: "email is required",
      helptext: "Required",
    },
  ];
  console.log("check if", formElement);
  return (
    <>
      {/* <Form fluid>
        <Form.Group controlId="name">
          <Form.ControlLabel>Username</Form.ControlLabel>
          <Form.Control name="name" />
          <Form.HelpText>Required</Form.HelpText>
        </Form.Group>
        <Form.Group controlId="email">
          <Form.ControlLabel>Email</Form.ControlLabel>
          <Form.Control name="email" type="email" />
          <Form.HelpText>Required</Form.HelpText>
        </Form.Group>
      </Form> */}
      {/* <Form fluid={props.fluid} layout={props.layout} readOnly={props.readOnly}> */}
      <Form fluid>
        {formElement.map((element) => {
          console.log(
            "doing teststing here",
            element.name,
            element.text,
            element.type
          );
          <Form.Group controlId={element.name}>
            <Form.ControlLabel>Username</Form.ControlLabel>
            <Form.Control name={element.name} />
            <Form.HelpText>Required</Form.HelpText>
          </Form.Group>;
        })}
      </Form>
    </>
  );
}
