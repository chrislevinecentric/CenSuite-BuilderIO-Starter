import React from "react";
import { CheckPicker } from "rsuite";
import { useState } from "react";
const CenCheckpicker = (props) => {
  const data = [
    "Eugenia",
    "Bryan",
    "Linda",
    "Nancy",
    "Lloyd",
    "Alice",
    "Julia",
    "Albert",
    "Louisa",
    "Lester",
    "Lola",
    "Lydia",
    "Hal",
    "Hannah",
    "Harriet",
    "Hattie",
    "Hazel",
    "Hilda",
  ].map((item) => ({ label: item, value: item }));

  return (
    <>
      <CheckPicker
        label={props.label}
        data={data}
        style={{ width: 224 }}
        size={props.size}
        sticky={props.sticky}
      />
    </>
  );
};

export default CenCheckpicker;
