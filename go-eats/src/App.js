import "./App.css";
import Form from "./components/Form";
import ShowRecipiesOnUI from "./components/Recipies";
import { Routes, Route } from "react-router-dom";
import Recipe from "./components/Recipe";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Form />
      <ShowRecipiesOnUI />
      <Routes>
        <Route exact path="/" />
        <Route path="/Recipe/:recipe" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
