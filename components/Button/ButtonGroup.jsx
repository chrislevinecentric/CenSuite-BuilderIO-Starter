import { Button, IconButton, ButtonGroup, ButtonToolbar } from "rsuite";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonGroup = (props) => {
  return (
    <>
      <ButtonGroup>
        <Button color={props.color} appearance={props.appearance}>
          Default
        </Button>
      </ButtonGroup>
    </>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
// #endregion

export default ButtonGroup;
