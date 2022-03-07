import { useContext } from "react";
import { ContextCounter } from "../context/GenerateContext";
import PlusOne from "./PlusOne";

function Counter() {
  const context = useContext(ContextCounter);
  return (
    <>
      <h1>
        {context.counter}
        <PlusOne />
      </h1>
    </>
  );
}
export default Counter;
