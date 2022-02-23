import { useState, useEffect } from "react";

export default function Tictactoe() {
  const [board, setBoard] = useState([
    { id: 1, field: "" },
    { id: 2, field: "" },
    { id: 3, field: "" },
    { id: 4, field: "" },
    { id: 5, field: "" },
    { id: 6, field: "" },
    { id: 7, field: "" },
    { id: 8, field: "" },
    { id: 9, field: "" },
  ]);

  const result = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  function checkWinner(myArray, combinations) {
    let counter = 0;
    for (let element of combinations) {
      if (myArray.indexOf(element) >= 0) {
        counter++;
      }
    }
    return counter;
  }
  const [forX, setForX] = useState([]);
  const [for0, setFor0] = useState([]);
  const [winner, setWinner] = useState([]);

  useEffect(() => {
    if (forX.length >= 3 && for0.length >= 3) {
      for (let i = 0; i < result.length; i++) {
        let var1 = [...forX].sort();

        const isAwinner = checkWinner(var1, result[i]);

        if (isAwinner === 3) {
          setWinner([...winner, "X"]);
        }
      }

      for (let i = 0; i < result.length; i++) {
        let var1 = [...for0].sort();

        const isAwinner = checkWinner(var1, result[i]);

        if (isAwinner === 3) {
          setWinner([...winner, "0"]);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forX, for0]);
  const [turn, setTurn] = useState(true);

  const handleClick = (id) => {
    if (
      board[id - 1]["field"] !== "X" &&
      board[id - 1]["field"] !== "0" &&
      winner.length < 1
    ) {
      const symbol = turn ? "X" : "0";

      switch (symbol) {
        case "X":
          setForX([...forX, id]);
          break;
        default:
          setFor0([...for0, id]);
      }

      const newBoard = [...board];
      newBoard[id - 1]["field"] = symbol;
      setBoard(newBoard);

      setTurn(!turn);
    }
  };

  return (
    <>
      <h1>Tictactoe</h1>
      <div className="board" style={{}}>
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
              <h2>{square.field}</h2>
            </div>
          );
        })}
        <h3>{turn ? "X ' s " : "0's "} turn to play</h3>
        <h3>Player : {winner} === is a winner</h3>
      </div>
    </>
  );
}
