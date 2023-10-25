import React from "react";
import PropTypes from "prop-types";
import { TagPicker } from "rsuite";
const data = [
  "Eugenia",
  "Bryan",
  "Linda",
  "Nancy",
  "Lloyd",
  "Alice",
  "Julia",
  "Albert",
].map((item) => ({ label: item, value: item }));
const CenTagPicker = (props) => {
  return (
    <TagPicker
      creatable={props.creatable}
      placeholder={props.placeHolder}
      data={data}
      style={{ width: 300 }}
    />
  );
};

export default CenTagPicker;
