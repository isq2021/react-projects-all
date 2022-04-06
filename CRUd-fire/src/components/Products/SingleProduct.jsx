import React, { useState } from "react";

function SingleProduct({ id, data }) {
  const [amount, setAmount] = useState(0);
  return (
    <>
      <section>
        <h2>{data.name}</h2>
        <img src={data.image} alt="asd" width="100px" />
        <h4>{data.price}$</h4>
        <button onClick={() => setAmount(amount + 1)}>+</button>
        <span>{amount}</span>
        <button onClick={() => setAmount(amount - 1)}>-</button>
        <button>Add to Cart</button>
      </section>
    </>
  );
}

export default SingleProduct;
