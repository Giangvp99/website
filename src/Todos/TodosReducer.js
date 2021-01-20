import * as types from "./TodosTypesAction";

const initialTodos = [];
const todosReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case types.SET_TODOS: {
      return [...action.payload];
    }
    case types.ADD_TODO: {
      const { title, id } = action.payload;
      return [...state, { title, id }];
    }
    case types.DELETE_TODO: {
      return [...state];
    }
    case types.MODIFY_TODO: {
      return [...state];
    }
    default:
      return state;
  }
};
export default todosReducer;
