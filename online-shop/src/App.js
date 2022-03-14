import React from "react";
import "./app.css";
import Products from "./components/Products";
import { useState } from "react";

import { Grid } from "@mui/material";

import Cart from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <div className="App">
        <Grid container>
          <Grid item xs={8}>
            <Products />
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Cart />
        </Grid>
      </div>
    </>
  );
}
