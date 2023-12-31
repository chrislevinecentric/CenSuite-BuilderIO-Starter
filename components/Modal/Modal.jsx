import React from "react";
import { Modal, Button, ButtonToolbar, Placeholder } from "rsuite";
import { useState } from "react";
const CenModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <ButtonToolbar>
        <Button
          color={props.color}
          appearance={props.appearance}
          onClick={handleOpen}
        >
          {props.text}
        </Button>
      </ButtonToolbar>{" "}
      <Modal
        size={props.size}
        open={open}
        onClose={handleClose}
        backdrop={props.backdrop}
        overflow={props.overflow}
      >
        <Modal.Header>
          <Modal.Title>{props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Placeholder.Paragraph />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            {props.text ? props.text : "Ok"}
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            {props.text ? props.text : "Cancel"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CenModal;
