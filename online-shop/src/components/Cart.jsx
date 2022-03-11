import React from "react";

export default function Cart({ cart }) {
  return (
    <>
      {cart.map((el) => {
        `${el.name} + ${el.price} + ${el.quantity}`;
      })}
    </>
  );
}
