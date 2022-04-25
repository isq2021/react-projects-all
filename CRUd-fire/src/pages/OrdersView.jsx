import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { FirestoreContext } from "../context/GeneralFireStore";

function OrdersView() {
  const { getAllOrders, allOrder } = useContext(FirestoreContext);
  useEffect(() => {
    getAllOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          order id
        </Grid>
        <Grid item xs={2}>
          Name
        </Grid>
        <Grid item xs={2}>
          address
        </Grid>
        <Grid item xs={2}>
          description
        </Grid>
        <Grid item xs={2}>
          status
        </Grid>
        <Grid item xs={2}>
          Delete
        </Grid>
      </Grid>
      {allOrder.map(({ data, id }) => (
        <>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              {id}
            </Grid>
            <Grid item xs={2}>
              {data.name}
            </Grid>
            <Grid item xs={2}>
              {data.address}
            </Grid>
            <Grid item xs={2}>
              description
            </Grid>
            <Grid item xs={2}>
              status
            </Grid>
            <Grid item xs={2}>
              Delete
            </Grid>
          </Grid>
        </>
      ))}
    </>
  );
}

export default OrdersView;
