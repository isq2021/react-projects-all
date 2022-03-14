import React from "react";
import "./app.css";
import Products from "./components/Products";
import { useEffect, useState } from "react";
import axiosInstance from "./helpers/Axios";
import { Grid } from "@mui/material";

import Cart from "./components/Cart";

export default function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const callApi = async () => {
    const url = "products/";
    const req = await axiosInstance.get(url);

    setAllProducts(req.data);
  };
  useEffect(() => {
    callApi();
  }, []);

  const passCart = () => {
    setCart(allProducts);
  };
  return (
    <>
      <div className="App">
        <Grid container>
          <Grid item xs={8}>
            <Products
              data={allProducts}
              allProducts={allProducts}
              passCart={setCart}
            />
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Cart cart={cart} />
        </Grid>
      </div>
    </>
  );
}
