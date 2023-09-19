import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CheckPicker } from "rsuite";

const Checkpicker = (props) => {
  return (
    <>
      <CheckPicker
        label={props.label}
        data={props.data}
        style={{ width: 224 }}
        size={props.size}
        sticky={props.sticky}
        disabledItemValues={props.disabledItemValues}
      />
    </>
  );
};

export default Checkpicker;
