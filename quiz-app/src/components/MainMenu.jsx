import React, { useContext } from "react";
import { GeneralContext } from "../Context/GeneralContext";

function MainMenu() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GeneralContext);
  return (
    <>
      <div className="Menu">
        <label>Enter your name</label>
        <input
          type="text"
          placeholder="enter your name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          onClick={() => {
            setGameState("playing");
          }}>
          Start quiz
        </button>
      </div>
    </>
  );
}

export default MainMenu;
