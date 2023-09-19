import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Modal, Button, ButtonToolbar, Placeholder } from "rsuite";

const Modal = (props) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    props.eventHandlers.handleCancle();
  };
  return (
    <>
      {" "}
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
            {props.text ? props.text : Ok}
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            {props.text ? props.text : Cancel}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modal;
