import { useContext } from "react";
import { TodosGeneralContext } from "../context/TodosGeneralContext";

function ListTodos() {
  const { todos, deleteTodo } = useContext(TodosGeneralContext);
  return (
    <>
      <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li>
                {todo} <button onClick={() => deleteTodo(index)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default ListTodos;
