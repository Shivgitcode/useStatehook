import { useState } from "react";

export default function TogglerCounter() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setCount] = useState(0);
  function handleToggler() {
    setIsHappy(!isHappy);
  }
  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      {isHappy ? <h1>:)</h1> : <h1>:(</h1>}
      <button onClick={handleToggler}>click</button>
      <p onClick={incrementCount}>count:{count}</p>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}
