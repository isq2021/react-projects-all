import { useState, useContext } from "react";
import { TodosGeneralContext } from "../context/TodosGeneralContext";
function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const anyName = useContext(TodosGeneralContext);
  return (
    <>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={() => anyName.setTodos((prev) => [...prev, newTodo])}>
        Save todo
      </button>
    </>
  );
}
export default AddTodo;
