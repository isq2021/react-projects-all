import "./App.css";
import Form from "./components/Form";
import ShowRecipiesOnUI from "./components/Recipies";
import { Routes, Route } from "react-router-dom";
import Recipe from "./components/Recipe";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Form />
      <ShowRecipiesOnUI />
      <Router>
        <Routes>
          <Route exact path="/" />
          <Route path="/Recipe/:recipe" element={<Recipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
