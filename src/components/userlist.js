import React from "react";
import { useState } from "react";
import UserList from "./Showuser";


const Users = () => {
  const [bookId, setBookId] = useState("");
  const getBookIdHandler = (id) => {
    console.log("document id to edit", id);
    setBookId(id);
  };
  return (
    <div>
      
      <UserList getBookId={getBookIdHandler} />
    </div>
  );
};

export default Users;
