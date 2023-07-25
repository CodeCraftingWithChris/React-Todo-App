import moment from "moment/moment";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { deleteDoc, doc, serverTimestamp, updateDoc } from "firebase/firestore";

function TodoCard({ id, todoName, time, status }) {
  const [user] = useAuthState(auth);
  console.log(status);
  const deleteTodo = (id) => {
    deleteDoc(doc(db, `user/${user.uid}/todos/${id}`))
      .then(() => alert("Todo Deleted"))
      .catch((er) => alert(er.message));
  };

  const updateTodo = (id) => {
    updateDoc(doc(db, `user/${user.uid}/todos/${id}`), {
      todoName: todoName,
      status: true,
      time: serverTimestamp(),
    })
      .then(() => alert("Todo Updated"))
      .catch((err) => alert(err.message));
  };
  return (
    <div
      className={`${status ? "bg-green-200" : "bg-red-200"}
        flex items-center justify-between max-w-lg p-3 rounded-lg mt-3 ml-5`}
    >
      <div>
        <p className="text-xl font-bold">{todoName}</p>
        <p className="text-xs">{moment(time).format("LT")}</p>
      </div>

      <div>
        <button
          onClick={() => updateTodo(id)}
          className="bg-green-500 text-white text-sm font-bold rounded-lg p-2 hover:scale-110 transition-all duration-200 ease-in-out ml-3"
        >
          Update
        </button>
        <button
          onClick={() => deleteTodo(id)}
          className="bg-red-500 text-white text-sm font-bold rounded-lg p-2 hover:scale-110 transition-all duration-200 ease-in-out ml-3"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
