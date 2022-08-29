import React, { useState } from "react";
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
            ? "Math tie"
            : "Player 2 Wins"}
        </h1>
      </div>
      <div className="Dice-container">
        <div>
          <h3>Player 1</h3>
          <img
            src={require(`./Common/Images/dice${diceOne}.png`)}
            className="Dice-logo"
            alt="dice1"
          />
        </div>
        <div>
          <h3>Player 2</h3>
          <img
            src={require(`./Common/Images/dice${diceTwo}.png`)}
            className="Dice-logo"
            alt="dice2"
          />
        </div>
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
