import logo from "./logo.svg";
import dice1 from "./Common/Images/dice1.png";
import dice2 from "./Common/Images/dice2.png";
import dice3 from "./Common/Images/dice3.png";
import dice4 from "./Common/Images/dice4.png";
import dice5 from "./Common/Images/dice5.png";
import dice6 from "./Common/Images/dice6.png";
import "./App.css";

const App = () => {

  return (
    <div className="App">
      <div className="heading-conatiner">
        <h1>Lets Play</h1>
      </div>
      <div className="Dice-container">
        <div>
          <h3>Player 1</h3>
          <img src={dice1} className="Dice-logo" alt="dice1" />
        </div>
        <div>
          <h3>Player 2</h3>
          <img src={dice1} className="Dice-logo" alt="dice1" />
        </div>
      </div>
      <div>
        <button className="RollButton">Roll the Dice</button>
      </div>
    </div>
  );
};

export default App;
