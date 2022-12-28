import React from "react";

const Match = (props) => {
  if (props.match)
    return (
      <>
        <div className="match">
          It's a match! You and your partner both would be up for {props.match}!
        </div>
      </>
    );
};

export default Match;
