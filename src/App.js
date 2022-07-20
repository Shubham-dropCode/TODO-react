import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

function App() {
  const [task, settask] = useState([]);

  //Add function
  const onAdd = () => {
    settask((task) => [...task, "Task Added"]);
  };

  const onRemove = () => {
    settask((current) => current.filter((_, index) => index !== 0));
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand href="#home">Add Tasks</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="p-3">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Tasks List</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <ListGroup>
              {task &&
                task.map((e) => (
                  <ListGroup.Item className="m-1">{e}</ListGroup.Item>
                ))}
            </ListGroup>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" className="m-3" onClick={onAdd}>
              Add Task
            </Button>
            <Button variant="primary" className="m-3" onClick={onRemove}>
              Remove Task
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Container>
    </>
  );
}

export default App;
