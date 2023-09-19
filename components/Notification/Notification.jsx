import { Notification, Placeholder } from "rsuite";
import React from "react";

const Notification = React.forwardRef(({ type, closable, ...rest }, ref) => {
  return (
    <Notification
      closable={closable}
      ref={ref}
      {...rest}
      type={type}
      header={type}
    >
      <Placeholder.Paragraph style={{ width: 320 }} rows={3} />
    </Notification>
  );
});

export default Notification;
