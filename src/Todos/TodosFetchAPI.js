import * as todosTypes from "./TodosTypesAction";

export const fetchAPITodosMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case todosTypes.SET_TODOS: {
      const res = await fetch("http://localhost:3000/todos");
      const todos = await res.json();
      action.payload = todos;
      return next(action);
    }
    case todosTypes.ADD_TODO: {
      const res = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...action.payload }),
      });
      return next(action);
    }
    case todosTypes.DELETE_TODO: {
      const res = await fetch(
        "http://localhost:3000/todos/" + action.payload.id,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      return next(action);
    }
    default:
      return next(action);
  }
  return next(action);
};
