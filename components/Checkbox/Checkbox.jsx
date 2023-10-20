import React from "react";
import { Checkbox, CheckboxGroup } from "rsuite";
import { useState } from "react";
export default function CenCheckbox(props) {
  const [checkedstate, setchecked] = useState(true);
  return (
    <>
      <Checkbox
        defaultChecked
        onClick={() => setchecked(!checkedstate)}
        checked={checkedstate}
      >
        {props.text}
      </Checkbox>
    </>
  );
}
