import React from "react";
import Confetti from "react-confetti";
// import  useWindowSize  from 'react-use-window-size'

const PartyPops = ({ action }) => {
  //   const { width, height } = useWindowSize()
  return action ? <Confetti /> : null;
};

export default PartyPops;
