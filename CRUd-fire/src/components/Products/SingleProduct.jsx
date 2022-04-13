import React, { useState, useContext } from "react";
import { CardContext } from "../../context/GeneralCard";
import * as actions from "../../context/Actions";
import "../../App.css";

function SingleProduct({ id, data }) {
  const [amount, setAmount] = useState(0);
  const { dispatch } = useContext(CardContext);
  const handleAddtoCart = () => {
    dispatch({
      type: actions.ADDTOCART,
      payload: { id: id, amount: amount, ...data },
    });
    setAmount(0);
  };
  return (
    <>
      <section>
        <h2>{data.name}</h2>
        <img src={data.image} alt="asd" width="100px" />
        <h4>{data.price}$</h4>
        <button onClick={() => setAmount(amount + 1)}>+</button>
        <span>{amount}</span>
        <button onClick={() => setAmount(amount - 1)}>-</button>
        <button onClick={() => handleAddtoCart()}>Add to Cart</button>
      </section>
    </>
  );
}

export default SingleProduct;
