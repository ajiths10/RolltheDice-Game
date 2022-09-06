import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const Home = () => {
  const redirectionHandler = (payload) => {};

  return (
    <div>
      <div>
        <h1>Game World</h1>
      </div>
      <div className="link-container">
        <NavLink to="/dice" className="Nav-link">
          <h3>Dice Game</h3>
          <p className="disc">multi-player</p>
        </NavLink>
      </div>
    </div>
  );
};
export default Home;
