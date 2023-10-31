import React, { useState } from "react";
import { BuilderBlocks, Builder } from "@builder.io/react";
import { Form, ButtonToolbar, Button } from "rsuite";
import { TagInput } from "rsuite";

// 2. Create your component.
// This is a tabs component with some basic styles. When the user clicks
// on a tab, that content becomes active.
function CenForm(props) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Form>
      {props.inputs?.map((item, index) => (
        <Form.Group controlId={item.formControlName}>
          <Form.ControlLabel>{item.label}</Form.ControlLabel>
          <Form.Control
            name={item.formControlName}
            placeholder={item.placeholder}
          />
          <Form.HelpText>{item.HelpText}</Form.HelpText>
        </Form.Group>
      ))}
      <Form.Group>
        <ButtonToolbar>
          <Button appearance="primary">Submit</Button>
          <Button appearance="default">Cancel</Button>
        </ButtonToolbar>
      </Form.Group>
    </Form>
  );
}

export default CenForm;
