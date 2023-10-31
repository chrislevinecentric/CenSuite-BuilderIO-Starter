import React from "react";
import { Drawer, ButtonToolbar, Button, IconButton, Placeholder } from "rsuite";

export default function CenDrawer(props) {
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState(props.placement);

  return (
    <>
      <Button
        color={props.color}
        block={props.block}
        appearance={props.appearance}
        loading={props.loading}
        disabled={props.disabled}
        onClick={() => setOpen(true)}
      >
        Open
      </Button>
      <Drawer
        autoFocus={props.autoFocus}
        backdrop={props.backdrop}
        size={props.size}
        placement={props.placement}
        keyboard
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header>
          <Drawer.Title>{props.drawerTitle}</Drawer.Title>
          <Drawer.Actions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)} appearance="primary">
              Confirm
            </Button>
          </Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body>
          {props.bodyCopy}
        </Drawer.Body>
      </Drawer>
    </>
  );
}
