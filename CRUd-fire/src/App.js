import React, { useContext, useState } from "react";
import "./App.css";
import FormProducts from "./components/FormProducts";
import AllProductsList from "./components/Products/AllProductsList";
import { GeneralAuthContext } from "./context/AuthContext.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CardProductList from "./pages/CardProductList";
import OrderPage from "./pages/OrderPage";

import LoginAdmin from "./pages/LoginAdmin";
import OrdersView from "./pages/OrdersView";
import AddProduct from "./pages/AddProduct";
import SeeProducts from "./pages/SeeProducts";

const App = () => {
  const [newUser, setNewUser] = useState({ email: "", password: "" });
  // const [logUser, setLogUser] = useState({ email: "", password: "" });
  const { signUp, userInfo, logOut, loginUser } =
    useContext(GeneralAuthContext);
  return (
    <>
      {userInfo ? (
        <>
          <div className="todo">
            <button onClick={() => logOut()}>log out </button>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/productlist" element={<CardProductList />} />
            <Route path="/order-page" element={<OrderPage />} />
            <Route path="/loginAdmin" element={<LoginAdmin />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="orders" element={<OrdersView />} />
              <Route path="add-product" element={<AddProduct />} />
              <Route path="see-products" element={<SeeProducts />} />
            </Route>
          </Routes>
        </>
      ) : (
        <div className="todo">
          <div className="todo_container">
            <div className="input_container">
              <input
                type="text"
                placeholder="email"
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="password"
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
              />
              <div className="btn_container">
                <button onClick={() => signUp(newUser.email, newUser.password)}>
                  Register
                </button>
              </div>
              <div className="btn_container">
                <button
                  onClick={() => loginUser(newUser.email, newUser.password)}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
