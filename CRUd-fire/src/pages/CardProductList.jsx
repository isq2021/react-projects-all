import { Button, Grid } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../components/commons/Header";
import { CardContext } from "../context/GeneralCard";
import { v4 as uuidv4 } from "uuid";
import * as actions from "../context/Actions";

function CardProductList() {
  const { allProductsInCart, dispatch } = useContext(CardContext);
  const handleDelete = (id) => {
    dispatch({
      type: actions.DELETEPRODUCT,
      payload: { id: id },
    });
  };
  return (
    <>
      <Header />

      <Grid container spacing={2}>
        <Grid item md={2}>
          Name
        </Grid>
        <Grid item md={2}>
          amount
        </Grid>
        <Grid item md={2}>
          price
        </Grid>
        <Grid item md={3}>
          image
        </Grid>
        <Grid item md={3}>
          delete
        </Grid>

        {allProductsInCart.map((product) => {
          return (
            <>
              <Grid key={uuidv4()} item md={2}>
                {product.name}
              </Grid>
              <Grid key={uuidv4()} item md={2}>
                {product.amount}
              </Grid>
              <Grid key={uuidv4()} item md={2}>
                {product.price}
              </Grid>
              <Grid key={uuidv4()} item md={3}>
                <img src={product.image} alt="imagesda" width={100} />
              </Grid>
              <Grid key={uuidv4()} item md={3}>
                <Button onClick={() => handleDelete(product.id)}>X</Button>
              </Grid>
            </>
          );
        })}
        <Grid item md={2}>
          Number of products
        </Grid>
        <Grid item md={2}>
          --------
        </Grid>
        <Grid item md={2}>
          total cost
        </Grid>
        <Grid item md={3}>
          ------
        </Grid>
        <Grid item md={3}>
          <Link to="/order-page">
            <Button>Go to Order</Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}

export default CardProductList;
