import { useReducer } from "react";
import { reduceFunction } from "../helpers/Reducers";
import { useContext } from "react";
import { GeneralContext } from "../Context/GeneralContext";

function Light() {
  const { isOn } = useContext(GeneralContext);
  const [state, dispatch] = useReducer(reduceFunction, isOn);

  return (
    <>
      <h1>Your Light is {state} now</h1>
      <div>
        <img
          src={
            isOn
              ? "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png"
              : "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png"
          }
          alt="light"
        />
        <button onClick={() => dispatch("turnOn")}>Switch </button>
      </div>
    </>
  );
}
export default Light;
