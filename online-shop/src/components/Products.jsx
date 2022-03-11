import React from "react";
import Product from "./Product";
import { Grid } from "@mui/material";

export default function Products({ data, allProducts, passCart ) {
  return (
    <>
      <Grid container>
        {data.map((pr) => {
          return (
            <Grid item xs={6}>
              <Product data={pr} key={pr.id} allProducts={allProducts} passCart={passCart} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
