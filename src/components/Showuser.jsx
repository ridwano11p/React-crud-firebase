import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { db } from "../Firebaseconfig";
import SideBar from "./Sidebar";
import LogOUt from "./Logout";
import { Link } from "react-router-dom";

import {
  doc,
  deleteDoc,
  collection,
  query,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import {
  TableBody,
  TableCell,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
} from "@mui/material";

import BookDataService from "../components/crud";

const UsersList = ({ getBookId, setShowModal }) => {
  const [books, setBooks] = useState([]);

  //getUser functions to attach a listener and fetch user data
  const getUser = () => {
    const q = query(collection(db, "users"));
    onSnapshot(q, (querySnapshot) => {
      const books = [];
      querySnapshot.forEach((doc) => {
        books.push(doc.data());
      });
      setBooks(books);
    });
  };

  //call getUser when app is loaded
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    const data = await BookDataService.getAllBooks();
    console.log(data.docs);
    setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteHandler = async (id) => {
    await BookDataService.deleteBook(id);
    getBooks();
  };
  return (
    <>
      <LogOUt />
      <SideBar />
      <div className="mb-2">
        <Button
          className="bg-pink-700 hover:bg-pink-000 text-white 
          uppercase text-sm font-semibold px-4 py-2 rounded mr-2 mb-2"
          variant="dark edit"
          onClick={getBooks}
        >
          Refresh List
        </Button>
        <Link to={"/addusers"}>
        <Button
          className="bg-blue-700 hover:bg-pink-000 text-white 
          uppercase text-sm font-semibold px-4 py-2 rounded mr-2 mb-2"
          variant="dark edit"
        
        >
          Add Another User
        </Button>
        </Link>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 700 }}>No.</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>User Name</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Full Name</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Roles</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Edit</TableCell>
              <TableCell sx={{ fontWeight: 700 }}>Delete</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {books.map((row, index) => (
              <TableRow
                key={index.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.fullname}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.roles}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <Button
                    variant="secondary"
                    className="bg-yellow-400 text-white active:bg-yellow-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    onClick={() => {
                      getBookId(row.id);
                    }}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="danger"
                    className="bg-red-600 text-white active:bg-red-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    onClick={() => deleteHandler(row.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UsersList;
