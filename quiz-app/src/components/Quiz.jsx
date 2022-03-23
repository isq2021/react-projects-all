import React, { useContext } from "react";
import { GeneralContext } from "../Context/GeneralContext";
import { Questions } from "../Data/Questions";

function Quiz() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(GeneralContext);
  return (
    <div className="quiz">
      <h2></h2>
    </div>
  );
}

export default Quiz;
