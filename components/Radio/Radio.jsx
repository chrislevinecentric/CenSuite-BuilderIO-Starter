import { Radio, RadioGroup } from "rsuite";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Radio = (props) => {
  return (
    <>
      <RadioGroup name="radioList">
        {props.items &&
          props.items.map((r) => {
            <Radio value={r.value} disabled={r.disabled}>
              {r.text}
            </Radio>;
          })}
      </RadioGroup>
    </>
  );
};

// #endregion

export default Radio;
