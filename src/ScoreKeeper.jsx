import { useState } from "react";

function ScoreKeeper() {
  const [scores, setScores] = useState({ p1: 0, p2: 0 });
  const handleScores = () => {
    setScores((newScores) => ({ ...newScores, p1: newScores.p1 + 1 }));
  };
  const handleScores2 = () => {
    setScores((newScores) => ({ ...newScores, p2: newScores.p2 + 1 }));
  };

  return (
    <div>
      <p>Player 1:{scores.p1} </p>
      <p>Player 2:{scores.p2} </p>
      <button onClick={handleScores}>+1 Player 1</button>
      <button onClick={handleScores2}>+1 Player 2</button>
    </div>
  );
}

export default ScoreKeeper;
