import React from "react";

export default function Cart({ cart }) {
  return (
    <>
      <h1>Checkout</h1>
      {cart.map((el) => {
        return (
          <p>
            title = {el.title} Qantity = {el.quantity} price = {el.price}
          </p>
        );
      })}
    </>
  );
}
