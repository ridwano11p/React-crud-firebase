import React from "react";
import { useState } from "react";
import UserList from "./Showuser";
import EditModal from "../components/Editmodal";

const Users = () => {
  const [showModal, setShowModal] = useState(false);
  const [bookId, setBookId] = useState("");
  const getBookIdHandler = (id) => {
    console.log("document id to edit", id);
    setBookId(id);
    setShowModal(true);
  };
  const getBookIdHandler2 = () => {
    setShowModal(false);
  };
  return (
    <div>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                <span class="block w-full text-xl uppercase font-bold mb-4">
                  Edit User
                </span>

                <div className="App">
                  <EditModal
                    getBookId2={getBookIdHandler2}
                    id={bookId}
                    setBookId={setBookId}
                  />
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      <UserList setshowModal={setShowModal} getBookId={getBookIdHandler} />
    </div>
  );
};

export default Users;
