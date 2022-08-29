import React from "react";

const DiceComponent = ({ dice, playerLabel }) => {
  return (
    <div>
      <h3>{playerLabel ? playerLabel : ""}</h3>
      <img
        src={require(`../../Common/Images/dice${dice}.png`)}
        className="Dice-logo"
        alt="dice2"
      />
    </div>
  );
};

export default DiceComponent;
