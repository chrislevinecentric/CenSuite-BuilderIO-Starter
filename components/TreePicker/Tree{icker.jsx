import React from "react";
import { TreePicker } from "rsuite";
// import { mockTreeData } from "./mock";

// const data = mockTreeData({
//   limits: [3, 3, 4],
//   labels: (layer, value, faker) => {
//     const methodName = ["jobArea", "jobType", "firstName"];
//     return faker.person[methodName[layer]]();
//   },
// });
const CenTreePicker = (props) => {
  return (
    <>
      <TreePicker
        defaultExpandAll
        data={props.data}
        defaultValue={props.defaultValue}
        disabledItemValues={props.disabledItemValues}
        style={{ width: 246 }}
      />
    </>
  );
};

export default CenTreePicker;
