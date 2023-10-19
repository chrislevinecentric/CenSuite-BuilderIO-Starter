import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Whisper, Button } from "rsuite";

const CenOverlay = React.forwardRef(({ style, onClose, ...rest }, ref) => {
  const styles = {
    ...style,
    color: "#000",
    background: "#fff",
    width: 200,
    padding: 10,
    borderRadius: 4,
    position: "absolute",
    border: "1px solid #ddd",
    boxShadow: "0 3px 6px -2px rgba(0, 0, 0, 0.6)",
  };

  return (
    <div {...rest} style={styles} ref={ref}>
      Overlay
      <hr />
      <button onClick={onClose}>close</button>
    </div>
  );
});

export default CenOverlay;
