import React, { useState } from "react";
import DiceComponent from "./Common/component/DiceComponent";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import "./App.css";
import FormComponent from "./Common/component/formComponent";

const App = () => {
  const [diceOne, setDiceOne] = useState(1);
  const [diceTwo, setDiceTwo] = useState(1);
  const [initialStart, setInitialStart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formikValues, setFormikValues] = useState("");

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

  const fieldFunction = (payload) => {
    setFormikValues(payload)
  }

  return (
    <div className="App">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <FormComponent fieldFunction={fieldFunction} />
      <div className="heading-conatiner">
        <h1>
          {!initialStart
            ? "Lets Play"
            : diceOne > diceTwo
            ? `${formikValues.player1.toUpperCase()} Wins`
            : diceOne === diceTwo
            ? "Math Tie"
            : `${formikValues.player2.toUpperCase()} Wins`}
        </h1>
      </div>
      <div className="Dice-container">
        <>
          <DiceComponent
            dice={diceOne}
            playerLabel={formikValues.player1}
            key={1}
          />
          <DiceComponent
            dice={diceTwo}
            playerLabel={formikValues.player2}
            key={2}
          />
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
