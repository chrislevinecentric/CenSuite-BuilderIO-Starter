import React from "react";
import PropTypes from "prop-types";
import { Toggle } from "rsuite";
const CenToggle = (props) => {
  return (
    <Toggle
      plaintext
      defaultChecked
      checkedChildren={props.checkecText}
      unCheckedChildren={props.uncheckedText}
    />
  );
};

export default CenToggle;
