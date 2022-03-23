import "./App.css";
import Form from "./components/Form";
import ShowRecipiesOnUI from "./components/Recipies";
import { Routes, Route } from "react-router-dom";
import Recipe from "./components/Recipe";
import React from "react";

function App() {
  return (
    <div className="App">
      <Form />

      <Routes>
        <Route path="/" element={<ShowRecipiesOnUI />} />
        <Route path="/Recipe/:recipe" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
