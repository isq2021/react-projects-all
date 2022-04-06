import React, { useContext } from "react";
import { FirestoreContext } from "../../context/GeneralFireStore";
import SingleProduct from "./SingleProduct";

function AllProductsList() {
  const { allProducts } = useContext(FirestoreContext);
  return (
    <>
      <div>
        <h1>products</h1>

        {allProducts.map((product) => {
          return (
            <SingleProduct
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
