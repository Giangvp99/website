import { createStore, combineReducers, applyMiddleware } from "redux";
import todosReducer from "../src/Todos/TodosReducer";
import * as todosTypes from "./Todos/TodosTypesAction";

const rootReducer = combineReducers({
  todos: todosReducer,
});

const myMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case todosTypes.SET_TODOS: {
      const res = await fetch("http://localhost:3000/todos");
      const todos = await res.json();
      action.payload = todos;
      next(action);
    }
    default:
      next(action);
  }
  return next(action);
};
export default createStore(rootReducer, applyMiddleware(myMiddleware));
