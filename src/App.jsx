import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Toggler from "./Toggler";
import TogglerCounter from "./ToggleCounter";
import ColorList from "./ColorList";
import Dumbo from "./Dumbo";
import ScoreKeeper from "./ScoreKeeper";
import EmojiClicker from "./EmojiClicker";
import ScoreKeeper2 from "./ScoreKeeper2";

function App() {
  const list = [
    "red",
    "green",
    "orange",
    "blue",
    "teal",
    "purple",
    "violet",
    "magenta",
    "white",
    "black",
  ];
  return (
    <div>
      {/* <Toggler></Toggler> */}
      {/* <Counter></Counter>
       */}
      {/* <Dumbo></Dumbo> */}
      {/* <TogglerCounter></TogglerCounter>
       */}
      {/* <ColorList data={list}></ColorList> */}
      {/* <ScoreKeeper></ScoreKeeper> */}
      {/* <EmojiClicker></EmojiClicker> */}
      <ScoreKeeper2 players={4}></ScoreKeeper2>
    </div>
  );
}

export default App;
