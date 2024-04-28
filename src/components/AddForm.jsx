import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    console.log(task);
    dispatch(addTodo(task));
    setTask("");
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Enter Task Todo"
          type={"text"}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>Add Task</button>
      </form>
    </>
  );
};

export default AddForm;
