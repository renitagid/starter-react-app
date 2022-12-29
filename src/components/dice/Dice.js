import React from "react";

const Dice = (props) => {
  return (
    <>
      <div id="dice" className="tooltip" onClick={props.rollDice}>
        <span className="tooltiptext">Click to roll!</span>
        {props.diceOptions[props.diceIndex]}
      </div>
    </>
  );
};

export default Dice;
