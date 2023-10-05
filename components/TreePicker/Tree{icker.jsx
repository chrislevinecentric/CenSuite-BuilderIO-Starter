import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TreePicker } from "rsuite";
const TreePicker = (props) => {
  return (
    <>
      <ControlLabel>{props.label}</ControlLabel>
      <TreePicker
        defaultExpandAll
        data={props.data}
        defaultValue={props.defaultValue}
        disabledItemValues={props.disabledItemValues}
        style={{ width: 246 }}
      />
    </>
  );
};

export default TreePicker;
