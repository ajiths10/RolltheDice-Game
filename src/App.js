import React, { useState } from "react";
import DiceComponent from "./Common/component/DiceComponent";
import "./App.css";

const App = () => {
  const [diceOne, setDiceOne] = useState(1);
  const [diceTwo, setDiceTwo] = useState(1);
  const [initialStart, setInitialStart] = useState(false);
  const randomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const handleRoll = () => {
    setDiceOne(randomNumber());
    setDiceTwo(randomNumber());
    setInitialStart(true);
  };

  return (
    <div className="App">
      <div className="heading-conatiner">
        <h1>
          {!initialStart
            ? "Lets Play"
            : diceOne > diceTwo
            ? "Player 1 Wins"
            : diceOne === diceTwo
            ? "Math Tie"
            : "Player 2 Wins"}
        </h1>
      </div>
      <div className="Dice-container">
        <>
          <DiceComponent dice={diceOne} playerLabel="Player 1" />
          <DiceComponent dice={diceTwo} playerLabel="Player 2" />
        </>
      </div>
      <div>
        <button className="RollButton" onClick={handleRoll}>
          Roll the Dice
        </button>
      </div>
    </div>
  );
};

export default App;
