import React from "react";

const Button = (props) => {
  return (
    <>
      <button
className="refresh"
        onClick={() => {
          props.refresh();
        }}
      >
        Restart
      </button>
    </>
  );
};

export default Button;
