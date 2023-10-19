import React from "react";
import { Checkbox, CheckboxGroup } from "rsuite";

export default function CenCheckbox(props) {
  return (
    <>
      {" "}
      <Checkbox disabled={props.disabled} defaultChecked={props.checked}>
        {props.text}
      </Checkbox>
    </>
  );
}
