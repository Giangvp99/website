import React from "react";
import TodoItem from "./TodoItem/TodoItem";

const TodosLists = (props) => {
  const { todos } = props;
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodosLists;
