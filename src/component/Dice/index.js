import React, { useState, useEffect } from "react";
import DiceComponent from "./DiceComponent";
import winner from "../../Common/Images/winner.png";
import PartyPops from "../common/PartyPops";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import "./dice.css";

const DiceGame = (props) => {
  const [diceOne, setDiceOne] = useState(1);
  const [diceTwo, setDiceTwo] = useState(1);
  const [initialStart, setInitialStart] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isPartyPopup, setPartyPopup] = useState(false);

  const randomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const handleRoll = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setDiceOne(randomNumber());
      setDiceTwo(randomNumber());
      setInitialStart(false);
    }, 1000);
  };

  useEffect(() => {
    if (initialStart) return setPartyPopup(false);
    if (diceOne === diceTwo) return setPartyPopup(false);
    return setPartyPopup(true);
  }, [initialStart, diceOne, diceTwo]);

  return (
    <div className="App">
      <PartyPops action={isPartyPopup} />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <div className="heading-conatiner">
        <h1>
          {initialStart ? (
            "Lets Play"
          ) : diceOne > diceTwo ? (
            <>
              <img src={winner} className="winner" alt="winnerlogo" />
              &nbsp;{" "}
              {props.formikValues
                ? props.formikValues.player1.toUpperCase()
                : ""}{" "}
              Wins &nbsp;
              <img src={winner} className="winner" alt="winnerlogo" />
            </>
          ) : diceOne === diceTwo ? (
            "Math Tie"
          ) : (
            <>
              <img src={winner} className="winner" alt="winnerlogo" />
              &nbsp;{" "}
              {props.formikValues
                ? props.formikValues.player2.toUpperCase()
                : ""}{" "}
              Wins &nbsp;
              <img src={winner} className="winner" alt="winnerlogo" />
            </>
          )}
        </h1>
      </div>
      <div className="Dice-container">
        <>
          <DiceComponent
            dice={diceOne}
            playerLabel={props.formikValues ? props.formikValues.player1 : ""}
            key={1}
          />
          <DiceComponent
            dice={diceTwo}
            playerLabel={props.formikValues ? props.formikValues.player2 : ""}
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

export default DiceGame;
