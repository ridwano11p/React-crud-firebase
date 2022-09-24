import LogOUt from "../components/Logout";
import SideBar from "../components/Sidebar";

import Modal from "../components/Modal";
import { useState } from "react";

const AddUsers = () => {
  const [bookId, setBookId] = useState("");
  return (
    <div>
      <LogOUt />

      <SideBar />
      <Modal id={bookId} setBookId={setBookId} />
    </div>
  );
};

export default AddUsers;
