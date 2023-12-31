import React from "react";
import { Dropdown } from "rsuite";

const CenDropdown = (props) => {
  <Dropdown {...props}>
    {props.dropdownItem.map((item) => {
      <Dropdown.Item icon={props.icon}>{Item}</Dropdown.Item>;
    })}
  </Dropdown>;
};

export default CenDropdown;
