import React from "react";
import { Drawer, ButtonToolbar, Button, IconButton, Placeholder } from "rsuite";
export default function Drawer(props) {
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState(props.placement);

  return (
    <Drawer placement={placement} open={open} onClose={() => setOpen(false)}>
      <Drawer.Header>
        <Drawer.Title>Drawer Title</Drawer.Title>
        <Drawer.Actions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)} appearance="primary">
            Confirm
          </Button>
        </Drawer.Actions>
      </Drawer.Header>
      <Drawer.Body>
        <Placeholder.Paragraph rows={8} />
      </Drawer.Body>
    </Drawer>
  );
}
