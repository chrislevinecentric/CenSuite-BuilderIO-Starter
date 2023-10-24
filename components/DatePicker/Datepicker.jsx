import React from "react";
import { DatePicker, Stack } from "rsuite";
export default function CenDatepicker(props) {
  return (
    <Stack direction="column" alignItems="flex-start" spacing={6}>
      <DatePicker
        format={props.format}
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        disabled={props.disabled}
        oneTap={props.oneTap}
      />
    </Stack>
  );
}
