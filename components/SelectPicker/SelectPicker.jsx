import React from "react";
import { SelectPicker } from "rsuite";
const data = ['Eugenia', 'Bryan', 'Linda', 'Nancy', 'Lloyd', 'Alice', 'Julia', 'Albert'].map(
  item => ({ label: item, value: item })
);
const CenSelectPicker = (props) => {
  return (
    <>
      <SelectPicker block={props.block} appearance={props.appearance} placement={props.placement} searchable={props.searchable} size={props.size} data={data} />
    </>
  );
};
export default CenSelectPicker;
