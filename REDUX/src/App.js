import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Todos";

export default function App() {
  return (
    <>
      <div className="main-container">
        <Counter />
        <Todos />
      </div>
    </>
  );
}
