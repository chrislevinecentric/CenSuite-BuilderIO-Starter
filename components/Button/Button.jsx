import { Button, IconButton, ButtonGroup, ButtonToolbar } from "rsuite";
import React from "react";
import PropTypes from "prop-types";

const CenButton = (props) => {
  return (
    <>
      <Button color="red" appearance="primary">
        {props.text}
      </Button>
    </>
  );
};

export default CenButton;
