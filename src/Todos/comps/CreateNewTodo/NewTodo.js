import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../TodosActions";

const NewTodo = (props) => {
  const { addTodo } = props;
  const [newTodo, setNewTodo] = useState("");
  return (
    <div className="todos__form--new-todo">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Input new todo"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={()=>addTodo(newTodo)}
        >
          Create
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => dispatch(addTodo(todo)),
});
export default connect(null, mapDispatchToProps)(NewTodo);
