import React from "react";
import { Message } from "rsuite";

const CenMessage = (props) => {
  return (
    <Message showIcon={props.showIcon} closable={props.closable} full={props.full} type={props.type} header={props.headerText}>
      {props.Message}
    </Message>
  );
};

export default CenMessage;
