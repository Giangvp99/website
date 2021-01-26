import React, { useEffect } from "react";
import TodosLists from "./comps/TodosLists/TodosLists";
import { connect } from "react-redux";
import { setTodos, addTodo, deleteTodo } from "./TodosActions";
import NewTodo from "./comps/CreateNewTodo/NewTodo";

const Todos = ({ todos, setTodos, addTodo, deleteTodo}) => {
  useEffect(() => {
    setTodos();
  }, [setTodos]);
  return (
    <div className="todos row">
      <NewTodo addTodo={addTodo} />
      <TodosLists todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  setTodos: () => dispatch(setTodos()),
  addTodo: (todo) => dispatch(addTodo(todo)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  // fetchTodos: async () => {
  //   const res = await fetch("http://localhost:3000/todos");
  //   const todos = await res.json();
  //   dispatch(setTodos(todos));
  // },
});
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
