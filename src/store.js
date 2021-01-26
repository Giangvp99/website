import { createStore, combineReducers, applyMiddleware } from "redux";
import todosReducer from "../src/Todos/TodosReducer";
import { fetchAPITodosMiddleware } from "./Todos/TodosFetchAPI";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default createStore(rootReducer, applyMiddleware(fetchAPITodosMiddleware));
