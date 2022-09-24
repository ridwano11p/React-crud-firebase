import { async } from "@firebase/util";
import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import BookDataService from "../components/crud";

const EditModal = ({ id, setBookId, getBookId2}) => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState("");
  const [status, setStatus] = useState("Available");
  const [flag, setFlag] = useState(true);
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (username === "" || fullname === "" || email === "" || roles === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
  };

  const updateUser = async () => {
    if (username === "" || fullname === "" || email === "" || roles === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newBook = {
      username,
      fullname,
      email,
      roles,
      status,
    };
    console.log(newBook);
    try {
      if (id !== undefined && id !== "") {
        await BookDataService.updateBook(id, newBook);
        setBookId("");
        setMessage({ error: false, msg: "Updated  record successfully!" });
      } else {
        setMessage({ error: false, msg: "cant update user records" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setUsername("");
    setFullname("");
    setEmail("");
    setRoles("");
  };
  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await BookDataService.getBook(id);
      console.log("the record is :", docSnap.data());
      setUsername(docSnap.data().username);
      setFullname(docSnap.data().fullname);
      setEmail(docSnap.data().email);

      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div class="mb-4 md:w-full">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBookTitle">
            <InputGroup>
              <InputGroup.Text id="formBookTitle"></InputGroup.Text>
              <Form.Control
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                placeholder="User Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor"></InputGroup.Text>
              <Form.Control
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor"></InputGroup.Text>
              <Form.Control
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <Form.Select
              value={roles}
              onChange={(e) => setRoles(e.target.value)}
              aria-label="Default select example"
            >
              <option>Roles</option>
              <option type="text">Admin</option>
              <option type="text">User</option>
            </Form.Select>
          </Form.Group>

          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded
                focus:outline-none focus:ring-4 focus:ring-green-300 
                dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800
                mr-2 mb-2"
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Active");
                setFlag(true);
              }}
            >
              Active
            </Button>
            <br></br>
            <br></br>
            <Button
              className=" bg-red-500 hover:bg-red-700 text-white uppercase text-sm focus:outline-none focus:ring-4 focus:ring-red-300  font-semibold px-4 py-2 rounded"
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Inactive");
                setFlag(false);
              }}
            >
              Inactive
            </Button>
          </ButtonGroup>
          <br></br>
          <br></br>
          <div className="d-grid gap-2">
            <Button
              className="bg-blue-500 hover:bg-blue-700 text-white 
                uppercase text-sm font-semibold px-4 py-2 roundedmr-2 mb-2"
              variant="primary"
              type="Submit"
              onClick={() => {
                updateUser();
                getBookId2();
              }}
            >
              Update User
            </Button>
          </div>
        </Form>
        <br></br>
        <br></br>
      </div>
    </>
  );
};

export default EditModal;
