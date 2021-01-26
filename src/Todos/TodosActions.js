import * as types from "./TodosTypesAction";
import shortid from "shortid";

export const setTodos = (todos) => ({
  type: types.SET_TODOS,
  payload: todos,
});

export const addTodo = (todo) => {
  const id = shortid.generate();
  const title = todo;
  const isDone = false;
  return {
    type: types.ADD_TODO,
    payload: { title, id, isDone },
  };
};

export const deleteTodo = (id) => {
  return {
    type: types.DELETE_TODO,
    payload: {id},
  };
};
