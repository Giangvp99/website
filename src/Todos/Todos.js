import React, { useEffect } from "react";
import TodosLists from "./comps/TodosLists/TodosLists";
import { connect } from "react-redux";
import { setTodos } from "./TodosActions";
import NewTodo from "./comps/CreateNewTodo/NewTodo";

const Todos = ({ todos, setTodos }) => {
  useEffect(() => {
    setTodos();
  }, [setTodos]);
  return (
    <div className="todos">
      <NewTodo />
      <TodosLists todos={todos} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  setTodos: (todos) => dispatch(setTodos(todos)),
  // fetchTodos: async () => {
  //   const res = await fetch("http://localhost:3000/todos");
  //   const todos = await res.json();
  //   dispatch(setTodos(todos));
  // },
});
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
