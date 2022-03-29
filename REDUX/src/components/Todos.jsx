import React, { useState } from "react";
import * as actions from "../Store/Actions/Action";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "../App.css";

function Todos() {
  const [value, setValue] = useState("");

  const todos = useSelector((state) => state.todosReducer);
  const [x] = useSelector((state) => state.todosReducer);

  const dispatch = useDispatch();
  const handleOnChange = (v) => {
    setValue(v);
  };
  const handleNewTask = () => {
    dispatch({
      type: actions.ADDTODO,
      payload: value,
    });
    setValue("");
  };
  const handleDelete = (id) => {
    dispatch({
      type: actions.DELETETODO,
      payload: x,
    });
  };

  return (
    <>
      <div className="container">
        <input value={value} onChange={(e) => handleOnChange(e.target.value)} />
        <button onClick={handleNewTask}>Add todo</button>
        {todos.map((x) => {
          return (
            <li key={uuidv4()}>
              {x.todo}
              <button onClick={() => handleDelete()}>Delete</button>
            </li>
          );
        })}
      </div>
    </>
  );
}

export default Todos;
