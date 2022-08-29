import React, { useState } from "react";
import DiceComponent from "./Common/component/DiceComponent";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import "./App.css";

const App = () => {
  const [diceOne, setDiceOne] = useState(1);
  const [diceTwo, setDiceTwo] = useState(1);
  const [initialStart, setInitialStart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const randomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const handleRoll = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setDiceOne(randomNumber());
      setDiceTwo(randomNumber());
      setInitialStart(true);
    }, 1000);
  };

  return (
    <div className="App">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
