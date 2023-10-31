import { Tooltip, Whisper, Button } from "rsuite";
import React from "react";

const CenTooltip = (props) => {
  return (
    <Whisper
      placement="top"
      trigger={props.trigger}
      speaker={<Tooltip arrow={false}>{props.text}</Tooltip>}
    >
      <Button>{props.buttonText}</Button>
    </Whisper>
  );
};

// #endregion

export default CenTooltip;
