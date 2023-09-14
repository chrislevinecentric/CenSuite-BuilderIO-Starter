import { Tooltip, Whisper } from "rsuite";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Tooltip = (props) => {
  return (
    <div style={{ height: 20 }}>
      <Tooltip visible>{props.text}</Tooltip>
    </div>
  );
};

// #endregion

export default Tooltip;
