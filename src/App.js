import { useState } from "react";
import "./App.css";
import Tictactoe from "./components/Tictactoe";

export default function App() {
  return (
    <>
      <div className="main-container">
        <Tictactoe />
      </div>
    </>
  );
}
