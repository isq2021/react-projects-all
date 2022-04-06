import React, { useState, useContext } from "react";
import "../App.css";
import { FirestoreContext } from "../context/GeneralFireStore";

function FormProducts() {
  const [newProduct, setNewProduct] = useState({
    name: "",

    price: "",
  });

  const [newImage, setNewImage] = useState("");
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
          type="file"
          placeholder="product image"
          onChange={(e) => setNewImage(e.target.files[0])}
        />
        <button onClick={() => addProduct(newProduct, newImage)}>
          Add product
        </button>
      </div>
    </>
  );
}

export default FormProducts;
