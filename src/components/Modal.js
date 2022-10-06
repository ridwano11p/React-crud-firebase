import { async } from "@firebase/util";
import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import BookDataService from "../components/crud";
import { Link, useNavigate } from "react-router-dom";

const AddBook = ({ id, setBookId }) => {
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState("");
  const [status, setStatus] = useState("Active");

  const [message, setMessage] = useState({ error: false, msg: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
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
      await BookDataService.addBooks(newBook);
      setMessage({ error: false, msg: "New User added  successfully!" });
      setBookId("");
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setUsername("");
    setFullname("");
    setEmail("");
    setRoles("");
    navigate("/userlist");
  };

  return (
    <>
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <span class="block w-full text-xl uppercase font-bold mb-4">
          Add User
        </span>

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
                <option type="text">Admin</option>
                <option type="text">User</option>
              </Form.Select>
            </Form.Group>

            <br></br>
            <br></br>
            <div className="d-grid gap-2">
              <Button
                className="bg-blue-500 hover:bg-blue-700 text-white 
                uppercase text-sm font-semibold px-4 py-2 roundedmr-2 mb-2"
                variant="primary"
                type="Submit"
                onClick={(e) => {
                  setStatus("Active");
                  handleSubmit();
                }}
              >
                Add user
              </Button>
            </div>
          </Form>
          <br></br>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default AddBook;
