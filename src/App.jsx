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
      <ScoreKeeper></ScoreKeeper>
    </div>
  );
}

export default App;
