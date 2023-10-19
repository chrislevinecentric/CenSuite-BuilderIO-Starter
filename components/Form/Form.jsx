import React from "react";
import { Form, ButtonToolbar, Button, Input } from "rsuite";

export default function CenForm(props) {
  return (
    <>
      <Form fluid={props.fluid} layout={props.layout} readOnly={props.readOnly}>
        {props.formElement &&
          props.formElement.map((element) => {
            <Form.Group controlId={element.name}>
              <Form.ControlLabel>{element.text}</Form.ControlLabel>
              <Form.Control
                name={element.name}
                type={element.type}
                errorMessage={props.errorMessage}
                errorPlacement={props.errorPlacement}
              />
              <Form.HelpText>{element.helptext}</Form.HelpText>
            </Form.Group>;
          })}
      </Form>
    </>
  );
}
