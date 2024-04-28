import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
import AddForm from "./AddForm";

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteTodo(id));
  }
  function handleMark(id) {
    dispatch(markAsDone(id));
  }
  //   console.log(todos);
  return (
    <div>
      <h2>Todo List App</h2>
      <AddForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => handleMark(todo.id)}>Mark As Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
