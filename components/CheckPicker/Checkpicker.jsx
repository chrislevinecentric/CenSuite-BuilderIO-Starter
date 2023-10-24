import React from "react";
import { CheckPicker } from "rsuite";
import { useState } from "react";
const CenCheckpicker = (props) => {
  console.log("hellp how are you", props.data);
  // const data =
  //   props.data != null &&
  //   props.data.map((item) => ({
  //     label: item,
  //     value: item,
  //     role: Math.random() > 0.5 ? "Owner" : "Guest",
  //   }));
  return (
    <>
      <CheckPicker
        label={props.label}
        // data={data}
        style={{ width: 224 }}
        size={props.size}
        sticky={props.sticky}
        //   disabledItemValues={props.disabledItemValues}
      />
    </>
  );
};

export default CenCheckpicker;
