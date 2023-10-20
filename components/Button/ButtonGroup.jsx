import { Button, IconButton, ButtonGroup, ButtonToolbar } from "rsuite";
import React from "react";

const CenButtonGroup = (props) => {
  return (
    <>
      <ButtonGroup>
        <Button color={props.color} appearance={props.appearance}>
          {props.text}
        </Button>
      </ButtonGroup>
    </>
  );
};

// #endregion

export default CenButtonGroup;
