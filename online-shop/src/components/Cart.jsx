import React from "react";
import { useContext } from "react";
import { GeneralContext } from "../context/Context";

export default function Cart() {
  const { cart } = useContext(GeneralContext);
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
