import { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);
  function changeNum() {
    setNum(num + 1);
  }
  function changeNum3() {
    setNum((num) => num + 1);
    setNum((num) => num + 1);
    setNum((num) => num + 1);
  }
  return (
    <div>
      <p>The count is:{num}</p>
      <button onClick={changeNum}>click</button>
      <button onClick={changeNum3}>click +3</button>
    </div>
  );
}
