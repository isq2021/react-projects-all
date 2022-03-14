import React from "react";
import Product from "./Product";
import { Grid } from "@mui/material";
import { useContext } from "react";
import { GeneralContext } from "../context/Context";

export default function Products() {
  const { allProducts } = useContext(GeneralContext);
  return (
    <>
      <Grid container>
        {allProducts.map((pr) => {
          return (
            <Grid item xs={6}>
              <Product data={pr} key={pr.id} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
