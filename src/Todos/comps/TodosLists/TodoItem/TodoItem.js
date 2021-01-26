import React, { useState } from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  const { todo, deleteTodo } = props;
  const [isDone, setIsDone] = useState(todo.isDone);

  return (
    <div className="app__todo--item row p-1 m-1 flex align-items-center ">
      <div className="form-check col-9">
        <input
          className="form-check-input"
          type="checkbox"
          value={isDone}
          id={todo.id}
        />
        <label
          className="form-check-label col-11 d-block fs-2"
          htmlFor={todo.id}
        >
          {todo.title}
        </label>
      </div>
      <div className="col-3">
        <button className="btn btn-primary" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>{" "}
    </div>
  );
};

export default TodoItem;
