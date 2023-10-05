import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TagInput } from "rsuite";

const TagInput = () => {
  return (
    <TagInput
      trigger={["Enter", "Space", "Comma"]}
      placeholder="Enter, Space, Comma"
      style={{ width: 300 }}
      menuStyle={{ width: 300 }}
      onCreate={(value, item) => {
        console.log(value, item);
      }}
    />
  );
};

// #endregion

export default TagInput;
