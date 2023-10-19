import React from "react";
import PropTypes from "prop-types";
import { Rate } from "rsuite";
const CenRate = (props) => {
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

export default CenRate;
