import { useReducer } from "react";
import { reduceFunction } from "../helpers/Reducers";

const counterInitValue = 0;

function Counter() {
  const [state, dispatch] = useReducer(reduceFunction, counterInitValue);

  return (
    <>
      <h1>{state}</h1>
      <div>
        <button onClick={() => dispatch("addOne")}>Plus</button>
        <button onClick={() => dispatch("removeOne")}>Minus</button>
        <button onClick={() => dispatch("reset")}>Reset</button>
        <button onClick={() => dispatch("double")}>Double it</button>
      </div>
    </>
  );
}
export default Counter;
