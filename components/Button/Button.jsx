import { Button, IconButton, ButtonGroup, ButtonToolbar } from "rsuite";
import React from "react";
import PropTypes from "prop-types";

const CenButton = (props) => {
  console.log("Button Props", props.color, props.appearance, props.text);
  return (
    <>
      <Button color={props.color} appearance={props.appearance}>
        {props.text}
      </Button>

    </>
  );
};

export default CenButton;
