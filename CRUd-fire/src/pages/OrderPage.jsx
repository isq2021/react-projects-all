import { Button, FormControl, Grid, Input, ListItem } from "@mui/material";
import React, { useContext, useState } from "react";
import Header from "../components/commons/Header";
import { CardContext } from "../context/GeneralCard";
import { FirestoreContext } from "../context/GeneralFireStore";

function OrderPage() {
  const { allProductsInCart } = useContext(CardContext);
  const { saveOrder } = useContext(FirestoreContext);
  const [customerData, setcustomerData] = useState({});
  const handleOrder = () => {
    saveOrder(allProductsInCart, customerData);
  };
  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <h1>list of items</h1>
          {allProductsInCart.map((el) => {
            return (
              <ListItem key={el.id}>
                {el.name}
                {el.price} <img src={el.img} alt="image12" />
              </ListItem>
            );
          })}
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <FormControl fullWidth>
              <Input
                placeholder=" name"
                onChange={(e) =>
                  setcustomerData({ ...customerData, name: e.target.value })
                }
              />
            </FormControl>
            <FormControl fullWidth>
              <Input
                placeholder=" phone"
                onChange={(e) =>
                  setcustomerData({
                    ...customerData,
                    telephone: e.target.value,
                  })
                }
              />
            </FormControl>
            <FormControl fullWidth>
              <Input
                placeholder=" address"
                onChange={(e) =>
                  setcustomerData({ ...customerData, address: e.target.value })
                }
              />
            </FormControl>
            <FormControl fullWidth>
              <Input
                placeholder="email"
                onChange={(e) =>
                  setcustomerData({ ...customerData, email: e.target.value })
                }
              />
            </FormControl>
            <FormControl fullWidth>
              <Input
                type="number"
                placeholder="payment card"
                onChange={(e) =>
                  setcustomerData({
                    ...customerData,
                    creditCard: e.target.value,
                  })
                }
              />
            </FormControl>
            <Button
              variant="contained"
              style={{ backgroundColor: "orange" }}
              onClick={handleOrder}>
              Make an order
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default OrderPage;
