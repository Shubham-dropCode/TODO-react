import { Button, Modal } from "bootstrap";
import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const ModalTask = ({ show, handleClose, settaskTitle, onAdd }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text>Task Name</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Enter you todo task"
              autoFocus
              onChange={(e) => {
                settaskTitle(e.target.value);
              }}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onAdd}>
            Add to List
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalTask;
