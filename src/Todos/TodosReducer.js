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
      const { id } = action.payload;
      const index = state.findIndex((todo) => todo.id === id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    }
    case types.MODIFY_TODO: {
      return [...state];
    }
    default:
      return state;
  }
};
export default todosReducer;
