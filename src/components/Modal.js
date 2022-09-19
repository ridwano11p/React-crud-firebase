import { async } from "@firebase/util";
import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import BookDataService from "../components/crud";


const AddBook = ({ id, setBookId }) => {
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
    
  };

  const updateUser = async () => {
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
  }
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
      <div className="p-4 box">
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
                type="text"
                placeholder="user Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBookAuthor">
            <InputGroup>
              <InputGroup.Text id="formBookAuthor"></InputGroup.Text>
              <Form.Control
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
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </Form.Group>


          <Form.Group className="mb-3" controlId="formBookAuthor">
          <Form.Select
           value={roles}
           onChange={(e) => setRoles(e.target.value)}
          aria-label="Default select example">
      <option>Open this select menu</option>
      <option type="text">Admin</option>
      <option type="text">User</option>
      
          </Form.Select>
          </Form.Group>
          




          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button className=" group bg-green-500 focus:bg-green-600 "
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
            <Button className="  group bg-red-500 focus:bg-red-600 "
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
          <div className="d-grid gap-2">
            <Button className=" bg-pink-800" variant="primary" type="Submit">
              Add user
            </Button>
            
          </div>
        </Form>
        <br></br>
        <br></br>
        <div className="d-grid gap-2">
            <Button className=" bg-pink-800" variant="primary" type="Submit" onClick={updateUser}>
              Update user
            </Button>
            
          </div>
      </div>
    </>
  );
};

export default AddBook;