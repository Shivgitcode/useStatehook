import { useState } from "react";

function generateGameBoard() {
  console.log("Making The Initial game Board");
  return Array(5000);
}

export default function Dumbo() {
  const [board, setBoard] = useState(generateGameBoard);
  return (
    <button onClick={() => setBoard("hello")}>click me to change state</button>
  );
}
