import React from "react";

const Display = (props) => {
  //use state to make an empty array, that can be updated with addiitonal items each time the button is clicked, while remmebering the previous items

  return (
    <div className="indiv">
      <div>{props.name}: {props.price}</div>
      
      <button
        onClick={() => {
          console.log(props.name)
          props.addToCart(props);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Display;
