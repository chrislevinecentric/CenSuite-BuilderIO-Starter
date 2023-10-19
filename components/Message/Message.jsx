import React from "react";
import PropTypes from "prop-types";
import { Message } from "rsuite";

const CenMessage = (props) => {
  return (
    <Message showIcon type={props.type} header={props.headerText}>
      {props.Message}
    </Message>
  );
};

export default CenMessage;
