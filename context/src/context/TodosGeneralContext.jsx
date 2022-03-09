import { createContext, useState } from "react";

export const TodosGeneralContext = createContext([]);

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const deleteTodo = (index) => {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  const data = {
    todos: todos,
    setTodos: setTodos,
    deleteTodo: deleteTodo,
  };
  return (
    <TodosGeneralContext.Provider value={data}>
      {children}
    </TodosGeneralContext.Provider>
  );
};
