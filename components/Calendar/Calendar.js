import React from "react";
import { Calendar, Badge } from "rsuite";
const Calendar = () => {
  function getTodoList(date) {
    const day = date.getDate();

    switch (day) {
      case 10:
        return [props.event];
      case 15:
        return [props.event];
      default:
        return [];
    }
  }

  function renderCell(date) {
    const list = getTodoList(date);

    if (list.length) {
      return <Badge className="calendar-todo-item-badge" />;
    }

    return null;
  }
  return (
    <>
      <Calendar compact bordered renderCell={renderCell} />
    </>
  );
};
