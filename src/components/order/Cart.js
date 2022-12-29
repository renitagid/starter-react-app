import React from "react";

const Cart = (props) => {
  return (
    <div>
      <h2>Cart</h2>
      <div className="cart">
        <div>
          <strong>Your items:</strong>
          {props.cart.map((item, index) => {
            return <p>{`${index + 1}. ${item}`}</p>;
          })}
        </div>
        <div>
        <strong>Price:</strong>
        {props.prices.map((item, index) => {
          return <p>${item}</p>;
        })}
        </div>
        <div className="total">Your total cost: {(props.cost).toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Cart;
