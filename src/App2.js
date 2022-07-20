import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";

function App() {
  const [taskTitle, settaskTitle] = useState("");
  const [task, settask] = useState([]);
  const [show, setShow] = useState(false);

  //Add function
  const onAdd = () => {
    settask((task) => [...task, taskTitle]);
    setShow(false);
  };

  const onRemove = () => {
    settask((current) => current.filter((_, index) => index !== 0));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand href="#home">Add Tasks</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="p-3">
        <Modal.Dialog>
          <Modal.Header className="">
            <Modal.Title>Tasks List</Modal.Title>
            <div>
              <Button variant="primary" className="m-3" onClick={handleShow}>
                Add Task
              </Button>
              <Button variant="danger" onClick={onRemove}>
                Remove Task
              </Button>
            </div>
          </Modal.Header>

          <Modal.Body>
            <ListGroup>
              {task &&
                task.map((e) => (
                  <ListGroup.Item className="m-1">{e}</ListGroup.Item>
                ))}
            </ListGroup>
          </Modal.Body>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Task Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter you todo task"
                    autoFocus
                    onChange={(e) => {
                      settaskTitle(e.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
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
        </Modal.Dialog>
      </Container>
    </>
  );
}

export default App;
