import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ImBin } from "react-icons/im";

function App() {
  const [todoList, settodoList] = useState([]);
  const [todoListTitle, settodoListTitle] = useState("");
  const [show, setShow] = useState(false);

  //Add function
  const onAdd = () => {
    const task = {
      id: todoList.length == 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: todoListTitle,
    };
    settodoList((todoList) => [...todoList, task]);
    setShow(false);
  };

  const onRemove = (id) => {
    settodoList(todoList.filter((task) => task.id !== id));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand href="#home">TodoLists</Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="p-3">
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Tasks List</Modal.Title>
            <div>
              <Button variant="primary" className="m-3" onClick={handleShow}>
                Add todoList
              </Button>
            </div>
          </Modal.Header>

          <Modal.Body>
            <ListGroup>
              {todoList &&
                todoList.map((e, Index) => {
                  return (
                    <ListGroup.Item className="m-1 d-flex justify-content-between align-item-center">
                      {e.taskName}
                      <ImBin type="button" onClick={() => onRemove(e.id)} />
                    </ListGroup.Item>
                  );
                })}
            </ListGroup>
          </Modal.Body>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add to List</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text>Task Name</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter you todo todoList"
                  autoFocus
                  onChange={(e) => {
                    settodoListTitle(e.target.value);
                  }}
                />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={onAdd}>
                Add
              </Button>
            </Modal.Footer>
          </Modal>
        </Modal.Dialog>
      </Container>
    </>
  );
}

export default App;
