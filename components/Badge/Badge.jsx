import React from "react";
import { Badge, Button } from "rsuite";
export default function CenBadge(props) {
  return (
    <>
      <Badge content={props.content}>
        <Button>{props.text}</Button>
      </Badge>
    </>
  );
}
