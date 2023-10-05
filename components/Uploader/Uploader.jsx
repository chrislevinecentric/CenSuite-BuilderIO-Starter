import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Uploader } from "rsuite";
const Uploader = (props) => {
  return (
    <Uploader
      listType="picture-text"
      action="//jsonplaceholder.typicode.com/posts/"
      renderFileInfo={(props.file, props.fileElement) => {
        return (
          <>
            <span>File Name: {props.file.name}</span>
            <p>File URL: {props.file.url}</p>
          </>
        );
      }}
    />
  );
};

export default Uploader;
