import React from "react";
import TodoItem from "./TodoItem/TodoItem";

const TodosLists = (props) => {
  const { todos, deleteTodo} = props;
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem todo={todo} key={todo.id} deleteTodo={deleteTodo}/>
      ))}
    </div>
  );
};

export default TodosLists;
