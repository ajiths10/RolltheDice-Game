import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  const redirectionHandler = (payload) => {};

  return (
    <div>
      <div>
        <h1>Game World</h1>
      </div>
      <div>
        <ui>
          <li>
            <NavLink to='/dice'>Dice</NavLink>
          </li>
        </ui>
      </div>
    </div>
  );
};
export default Home;
