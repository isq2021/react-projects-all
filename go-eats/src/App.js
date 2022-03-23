import "./App.css";

import { Routes, Route } from "react-router-dom";
import Recipe from "./components/Recipe";
import React from "react";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Recipe/:recipe" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
