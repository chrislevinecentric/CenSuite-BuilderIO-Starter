import React from "react";
import { Cascader } from "rsuite";
// import { mockTreeData } from "./mock";
export default function CenCascader(props) {
  // const data = mockTreeData({
  //   limits: [3, 3, 4],
  //   labels: (layer, value, faker) => {
  //     const methodName = ["jobArea", "jobType", "firstName"];
  //     return faker.person[methodName[layer]]();
  //   },
  // });
  return <Cascader data={props.data} style={{ width: 224 }} />;
}
