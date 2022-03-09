import React from "react";
import AddTodo from "./components/AddTodo";
import ListTodos from "./components/ListTodos";

export default function App() {
  return (
    <div>
      <AddTodo />
      <ListTodos />
    </div>
  );
}
