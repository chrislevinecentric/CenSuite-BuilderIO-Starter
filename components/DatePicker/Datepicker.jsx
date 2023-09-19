import React from "react";
import { DatePicker, Stack } from "rsuite";
export default function Datepicker(props) {
  return (
    <Stack direction="column" alignItems="flex-start" spacing={6}>
      <DatePicker
        format={props.format}
        placeholder={props.placeholder}
        calendarDefaultDate={props.defaultDate}
        ranges={[]}
        readOnly={props.readOnly}
        disabled={props.disabled}
      />
    </Stack>
  );
}
