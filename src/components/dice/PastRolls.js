import React from "react";

const PastRolls = (props) => {
  return (
    <>
      <div className="previous">
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
