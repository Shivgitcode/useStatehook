import { useState } from "react";

export default function ScoreKeeper2({ players }) {
  const newArr = new Array(players).fill(0);
  const [score, setScore] = useState(newArr);
  const target = 4;

  function handleScore(index) {
    setScore((newarr) => {
      return newarr.map((el, i) => {
        if (i === index) {
          return el + 1;
        } else {
          return el;
        }
      });
    });
  }
  return (
    <div>
      {score.map((el, index) => {
        return (
          <div style={{ display: "flex" }} key={index}>
            <li>
              Player{index + 1}:{el}
            </li>
            {el >= target && <h3>Winner</h3>}
            <button onClick={() => handleScore(index)}>+1</button>
          </div>
        );
      })}
      <button onClick={() => setScore(newArr)}>reset</button>
    </div>
  );
}
