import UserList from "./Showuser";


import Modal from "../components/Modal";
import { useState } from "react";

function Table() {
  const [bookId, setBookId] = useState("");
  const getBookIdHandler = (id)  => {
    console.log("document id to edit", id);
    setBookId(id);
  }
  return (
    <div>
      <Modal id={bookId} setBookId={setBookId}/>
      <UserList getBookId={getBookIdHandler} />
    </div>
  );
}

export default Table;
