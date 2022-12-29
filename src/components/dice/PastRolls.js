import React from "react";

const PastRolls = (props) => {
  return (
    <>
      <div id="previous" className="tooltip">
      <span className="tooltiptext">Your roll history</span>
      {props.lastRoll.map((roll, index) => {
        return (
          <div className="eachlast" key={index}>
            {roll}
          </div>
        );
      })}
      </div>
    </>
  );
};
export default PastRolls;
