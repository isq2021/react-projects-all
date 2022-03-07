import { useContext } from "react";
import { ContextCounter } from "../context/GenerateContext";

function PlusOne() {
  const { setCounter } = useContext(ContextCounter);
  return (
    <button onClick={() => setCounter((prev) => prev + 1)}> Plus One</button>
  );
}
export default PlusOne;
