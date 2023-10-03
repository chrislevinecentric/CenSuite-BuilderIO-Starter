import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Loader, Placeholder } from "rsuite";
const Loader = () => {
  return (
    <div>
      <Placeholder.Paragraph rows={8} />
      <Loader backdrop content="loading..." vertical />
    </div>
  );
};

export default Loader;
