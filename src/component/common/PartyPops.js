import React from "react";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const PartyPops = ({ action }) => {
  const { width, height } = useWindowSize();
  return action ? <Confetti width={width} height={height} /> : null;
};

export default PartyPops;
