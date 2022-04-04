import React, { useState, useContext } from "react";
import "../App.css";
import { FirestoreContext } from "../context/GeneralFireStore";

function FormProducts() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    image: "",
    price: "",
  });
  const { addProduct } = useContext(FirestoreContext);
  return (
    <>
      <div className="input_container">
        <input
          type="text"
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
          placeholder="product name"
        />
        <input
          type="number"
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          placeholder="product price"
        />
        <input
          type="text"
          placeholder="product image"
          onChange={(e) =>
            setNewProduct({ ...newProduct, image: e.target.value })
          }
        />
        <button onClick={() => addProduct(newProduct)}>Add product</button>
      </div>
    </>
  );
}

export default FormProducts;
