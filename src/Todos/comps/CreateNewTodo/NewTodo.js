import React, { useState } from "react";
import { addTodo } from "../../TodosActions";

const NewTodo = (props) => {
  const { addTodo } = props;
  const [newTodo, setNewTodo] = useState("");
  const handleClicked = () => {
    addTodo(newTodo);
    setNewTodo("");
  };
  const handleKeyPressed = (e) => {
    if (e.key === "Enter" && newTodo !== "") handleClicked();
  };
  return (
    <div className="todos__form--new-todo">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Input new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => handleKeyPressed(e)}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => handleClicked()}
        >
          Create
        </button>
      </div>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   addTodo: (todo) => dispatch(addTodo(todo)),
// });
// export default connect(null, mapDispatchToProps)(NewTodo);
export default NewTodo;
