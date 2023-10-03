import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Message } from "rsuite";

const Message = (props) => {
  return (
    <Message showIcon type={props.type} header={props.headerText}>
      {props.Message}
    </Message>
  );
};

export default Message;
