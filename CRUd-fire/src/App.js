import React, { useContext, useState } from "react";
import "./App.css";
import FormProducts from "./components/FormProducts";
import { GeneralAuthContext } from "./context/AuthContext.jsx";

const App = () => {
  const [newUser, setNewUser] = useState({ email: "", password: "" });
  const [logUser, setLogUser] = useState({ email: "", password: "" });
  const { signUp, userInfo, logOut, loginUser } =
    useContext(GeneralAuthContext);
  return (
    <>
      {userInfo ? (
        <div className="todo">
          <h1>Welcome to your homepage! </h1>
          <h2>
            you are logged in as {userInfo ? userInfo.email : "logged out!"}
          </h2>
          <button onClick={() => logOut()}>log out </button>
          <FormProducts />
        </div>
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
