import { Notification, Placeholder } from "rsuite";
import React from "react";

const CenNotification = (props) => {
  return (    
    <Notification placement={props.showIcon} closable={props.closable} type={props.type} header={props.headerText}>
      {props.Message}
    </Notification>
  );
};

export default CenNotification;
