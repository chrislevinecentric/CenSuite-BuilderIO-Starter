import { Button } from "rsuite";
import React from "react";

const CenButton = (props) => {
  return (
    <>
      <Button color={props.color} block={props.block} appearance={props.appearance} loading={props.loading} disabled={props.disabled} href={props.link}>
        {props.text}
      </Button>
    </>
  );
};

export default CenButton;
