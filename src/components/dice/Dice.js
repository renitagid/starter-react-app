import React from "react";

const Dice = (props) => {
  return (
    <>
      <div className="dice"
        onClick={props.rollDice}

      >
        {props.diceOptions[props.diceIndex]}
      </div>
    </>
  );
};

export default Dice;
