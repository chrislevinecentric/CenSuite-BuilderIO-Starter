import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Toggle } from "rsuite";
const Toggle = (props) => {
  return (
    <Toggle
      plaintext
      defaultChecked
      checkedChildren={props.checkecText}
      unCheckedChildren={props.uncheckedText}
    />
  );
};

export default Toggle;
