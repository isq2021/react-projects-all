import React, { useContext } from "react";
import { FirestoreContext } from "../../context/GeneralFireStore";
import SingleProduct from "./SingleProduct";
import "../../App.css";

function AllProductsList() {
  const { allProducts } = useContext(FirestoreContext);
  return (
    <>
      <div className="allproducts">
        <h1>products</h1>

        {allProducts.map((product) => {
          return (
            <SingleProduct
              className="singleproduct"
              key={product.id}
              id={product.id}
              data={product.data}
            />
          );
        })}
      </div>
    </>
  );
}

export default AllProductsList;
