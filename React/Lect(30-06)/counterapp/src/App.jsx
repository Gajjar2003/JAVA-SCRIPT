import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <fieldset>
        <legend>Welcome To Counter Application</legend>

        <button onClick={decrement}>-</button>

        <span >{count}</span>

        <button onClick={increment}>+</button>
      </fieldset>

      <Home />
    </>
  );
}

export default App;
