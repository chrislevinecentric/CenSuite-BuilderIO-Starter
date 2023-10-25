import React from "react";
import { Badge } from "rsuite";
export default function CenBadge(props) {
  return (
    <>
      <Badge color={props.color} content={props.content}>
        <span></span>
      </Badge>
    </>
  );
}
