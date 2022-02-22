import { useState } from "react";

export default function Tictactoe() {
  const [board, setBoard] = useState([
    { id: 1, field: "1" },
    { id: 2, field: "2" },
    { id: 3, field: "3" },
    { id: 4, field: "4" },
    { id: 5, field: "5" },
    { id: 6, field: "6" },
    { id: 7, field: "7" },
    { id: 8, field: "8" },
    { id: 9, field: "9" },
  ]);
  const [turn, setTurn] = useState(false);

  const handleClick = (id) => {
    const symbol = turn ? "X" : "0";

    const newBoard = [...board];
    newBoard[id - 1]["field"] = symbol;
    setBoard(newBoard);

    setTurn(!turn);
  };

  return (
    <>
      <h1>Tictactoe</h1>
      <div
        className="board"
        style={{ width: "400px", display: "flex", flexWrap: "wrap" }}>
        {board.map((square) => {
          return (
            <div
              onClick={() => handleClick(square.id)}
              className="eachSquare"
              key={"square" + square.id}
              style={{
                width: "130px",
                border: "solid 1px black",
                borderRadius: "20px",

                height: "130px",
                fontSize: "3rem",
              }}>
              {square.field}
            </div>
          );
        })}
      </div>
    </>
  );
}
