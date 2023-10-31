import React from "react";
import { Rate } from "rsuite";
const CenRate = (props) => {
  return <Rate defaultValue={props.startingValue} vertical={props.vertical} size={props.size} color={props.color} character={props.character}/>;
};

export default CenRate;
