import { Tooltip, Whisper, Button } from "rsuite";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Tooltip = (props) => {
  return (
    <Whisper
      placement="top"
      trigger={props.trigger}
      speaker={<Tooltip arrow={false}>{props.text}</Tooltip>}
    >
      <Button>{props.buttonText}</Button>
    </Whisper>
  );
};

// #endregion

export default Tooltip;
