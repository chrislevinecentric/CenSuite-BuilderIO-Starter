import React from "react";
import { DateRangePicker } from "rsuite";

export default function CenDateRangePicker(props) {
  return (
    <DateRangePicker
      format={props.format}
      defaultCalendarValue={props.defaultCalendarValue}
      placeholder={props.placeholder}
      showOneCalendar={props.showOneCalendar}
    />
  );
}
