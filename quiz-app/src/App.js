import React, { useState } from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { GeneralContext } from "./Context/GeneralContext";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    <div>
      <h1>Quiz</h1>
      <GeneralContext.Provider
        value={{
          gameState,
          setGameState,
          score,
          setScore,
        }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </GeneralContext.Provider>
    </div>
  );
}

export default App;
