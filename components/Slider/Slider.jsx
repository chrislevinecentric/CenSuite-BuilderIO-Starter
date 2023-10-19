import React from "react";
import { Slider } from "rsuite";
const CenSlider = (prop) => {
  const [value, setValue] = React.useState(0);
  return (
    <div style={{ width: 200, marginLeft: 20 }}>
      {props.labels ? (
        <Slider
          min={0}
          max={props.labels.length - 1}
          value={value}
          className="custom-slider"
          handleStyle={{
            borderRadius: 10,
            color: "#fff",
            fontSize: 12,
            width: 32,
            height: 22,
          }}
          graduated
          tooltip={false}
          handleTitle={props.labels[value]}
          onChange={setValue}
        />
      ) : (
        <Slider style={{ width: 200 }} />
      )}
    </div>
  );
};

export default CenSlider;
