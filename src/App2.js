import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { ImBin } from "react-icons/im";
// import { MdEdit } from "react-icons/md";
import { GoCheck } from "react-icons/go";
import { db } from "./Firebase-Config";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

function App() {
  const [todoList, settodoList] = useState([]);
  const [title, settitle] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (QuerySnapshot) => {
      let todosArray = [];
      QuerySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      settodoList(todosArray);
    });
    return () => unsub();
  }, []);

  //Add function
  const onAdd = async (todo) => {
    if (title !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        completed: false,
      });
      setShow(false);
    }
  };

  // const handleEdit = async (todo, title) => {
  //   await updateDoc(doc(db, "todos", todo.id), { title: title });
  // };

  const toggleComplete = async (todoList) => {
    console.log(todoList);
    await updateDoc(doc(db, "todos", todoList.id), {
      completed: !todoList.completed,
    });
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-center">
          <Navbar.Brand href="">TodoLists</Navbar.Brand>
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
            {todoList &&
              todoList.map((todo) => {
                return (
                  <ListGroup key={todo.id}>
                    <ListGroup.Item
                      className="d-flex justify-content-between"
                      style={{
                        textDecoration: todo.completed && "line-through",
                      }}
                    >
                      {todo.title}
                      <div>
                        <ImBin
                          type="button"
                          className="mx-2"
                          onClick={() => handleDelete(todo.id)}
                        />
                        <GoCheck
                          type="button"
                          className="mx-2"
                          onClick={() => toggleComplete(todo)}
                        />
                        {/* <MdEdit
                          type="button"
                          className="mx-2"
                          onClick={() => handleEdit(todo, todo.title)}
                        /> */}
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                );
              })}
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
                  onChange={(todo) => {
                    settitle(todo.target.value);
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
