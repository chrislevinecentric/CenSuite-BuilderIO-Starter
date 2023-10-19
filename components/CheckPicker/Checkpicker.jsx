import React from "react";
import { CheckPicker } from "rsuite";

const CenCheckpicker = (props) => {
  return (
    <>
      <CheckPicker
        label={props.label}
        data={props.data}
        style={{ width: 224 }}
        size={props.size}
        sticky={props.sticky}
        disabledItemValues={props.disabledItemValues}
      />
    </>
  );
};

export default CenCheckpicker;
