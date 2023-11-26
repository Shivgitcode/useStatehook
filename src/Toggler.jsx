import { useState } from "react";

export default function Toggler() {
  const [tog, setTog] = useState(true);
  function handleToggler() {
    setTog(!tog);
  }

  return (
    <div>
      {tog ? <h1>:)</h1> : <h1>:(</h1>}
      <button onClick={handleToggler}>click</button>
    </div>
  );
}
