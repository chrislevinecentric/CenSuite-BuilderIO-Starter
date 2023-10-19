import React from "react";
import PropTypes from "prop-types";
import { TagPicker } from "rsuite";
const CenTagPicker = (props) => {
  return (
    <TagPicker
      creatable={props.creatable}
      placeholder={props.placeHolder}
      data={props.data}
      style={styles}
    />
  );
};

export default CenTagPicker;
