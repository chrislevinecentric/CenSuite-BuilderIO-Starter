import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Dropdown } from "rsuite";

const Dropdown = (props) => {
  <Dropdown {...props}>
    {props.dropdownItem.map((item) => {
      <Dropdown.Item icon={props.icon}>{Item}</Dropdown.Item>;
    })}
  </Dropdown>;
};

export default Dropdown;
