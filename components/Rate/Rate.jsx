import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Rate } from "rsuite";
const Rate = (props) => {
  const textStyle = {
    verticalAlign: "top",
    lineHeight: "42px",
    display: "inline-block",
  };
  const [hoverValue, setHoverValue] = React.useState(3);
  return (
    <>
      <Rate defaultValue={3} onChangeActive={setHoverValue} />{" "}
      <span style={textStyle}>{props.texts[hoverValue]}</span>
    </>
  );
};

export default Rate;
