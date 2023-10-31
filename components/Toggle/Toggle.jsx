import React from "react";
import { Toggle } from "rsuite";
const CenToggle = (props) => {
  return (
    <Toggle
      defaultChecked
      checkedChildren={props.checkecText}
      unCheckedChildren={props.uncheckedText}
    />
  );
};

export default CenToggle;
