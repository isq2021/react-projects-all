import "./App.css";
import Products from "./components/Products";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import SearchAppBar from "./components/NavbarMain";
import Cart from "./components/Cart";

export default function App() {
  return (
    <>
      <div className="main-container">
        <Router>
          {" "}
          <SearchAppBar />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/ProductCard" element={<ProductCard />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </Router>
      </div>{" "}
    </>
  );
}
