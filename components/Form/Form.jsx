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

// Builder.registerComponent(CenForm, {
//   name: "Form",
//   inputs: [
//     {
//       name: "inputs",
//       type: "list",
//       subFields: [
//         {
//           name: "label",
//           type: "string",
//         },
//         {
//           name: "HelpText",
//           type: "string",
//         },
//         {
//           name: "formControlName",
//           type: "string",
//         },
//       ],
//       defaultValue: [],
//     },
//   ],
// });

// Builder.registerComponent(CenForm, {
//   name: "CenForm",
//   inputs: [
//     {
//       name: "inputs",
//       type: "list",
//       subFields: [
//         {
//           name: "label",
//           type: "string",
//         },
//         {
//           name: "formControlName",
//           type: "string",
//         },
//         {
//           name: "HelpText",
//           type: "string",
//         },
//         {
//           name: "placeholder",
//           type: "string",
//         },
//       ],
//       defaultValue: [
//         {
//           label: "input",
//           content: [],
//         },
//       ],
//     },
//   ],
// });

export default CenForm;
