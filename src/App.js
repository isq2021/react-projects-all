import { useState } from "react";
import "./App.css";

export default function App() {
  const [stars, updateStars] = useState(Array.from(Array(6).keys()));
  const [rate, updateRate] = useState(localStorage.getItem("rate"));

  const handleClick = (star) => {
    localStorage.setItem("rate", star);
    updateRate(star);
  };
  const removeAll = (star) => {
    localStorage.clear("star");
    updateRate(0);
  };

  return (
    <>
      <div className="rating-container">
        {stars.map((star) => {
          return (
            <div
              style={{
                display: "inline-block",
                border: "1px solid brown",
                padding: "20px",
                color: "red",
                fontSize: "20px",
              }}
              className={star <= rate ? "filled" : ""}
              onClick={() => handleClick(star)}>
              {star}
            </div>
          );
        })}
        <button onClick={() => removeAll()}>Remove all</button>
        <h1>
          Your rate:
          {rate + "  "}
          {rate >= 4 ? "  :)" : " :("}
        </h1>
      </div>
    </>
  );
}
