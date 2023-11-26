import { useState } from "react";

function randomColor(arr) {
  const randIdx = Math.floor(Math.random() * arr.length);
  return arr[randIdx];
}
export default function ColorList({ data }) {
  const [color, setColor] = useState(randomColor(data));
  console.log("color: ", color);
  function handleColor() {
    setColor(randomColor(data));
    console.log("color in function: ", color);
  }
  return (
    <div
      onClick={handleColor}
      style={{ width: "100px", height: "100px", backgroundColor: color }}
    ></div>
  );
}
