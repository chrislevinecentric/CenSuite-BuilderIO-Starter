import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TagPicker } from "rsuite";
const TagPicker = (props) => {
  return (
    <TagPicker
      creatable={props.creatable}
      placeholder={props.placeHolder}
      data={props.data}
      style={styles}
    />
  );
};

export default TagPicker;
