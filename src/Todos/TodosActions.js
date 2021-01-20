import * as types from "./TodosTypesAction";
import shortid from "shortid";

export const setTodos = (todos) => ({
  type: types.SET_TODOS,
  payload: todos,
});

export const addTodo = (todo) => {
  const id = shortid.generate();
  const title = todo;
  fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, id }),
  });
  return {
    type: types.ADD_TODO,
    payload: { title, id },
  };
};
