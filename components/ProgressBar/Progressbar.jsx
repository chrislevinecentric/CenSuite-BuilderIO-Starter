import React from "react";
import { Progress } from "rsuite";
import { progressBarType } from "../../Constants";
export default function Progressbar(props) {
  return (
    <>
      {props.type == progressBarType.LINE ? (
        <Progress.Line
          percent={props.percent}
          strokeColor={props.strokeColor}
          vertical={props.vertical}
          status={props.status}
          strokeWidth={props.strokeWidth}
        />
      ) : (
        <Progress.Circle
          percent={props.percent}
          strokeColor={props.strokeColor}
          vertical={props.vertical}
          status={props.status}
          strokeWidth={props.strokeWidth}
        />
      )}
    </>
  );
}
