import { useContext } from "react";
import { GeneralContext } from "../Context/GeneralContext";
import { Button, Grid, List as ListExpenses, ListItem } from "@mui/material";
import { Delete } from "@material-ui/icons";

import React from "react";

function List() {
  const { transactions, dispatch, formData } = useContext(GeneralContext);
  return (
    <>
      <ListExpenses>
        {transactions.map((transaction) => {
          return (
            <ListItem key={transaction.id}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Button>
                    <Delete
                      onClick={() =>
                        dispatch({
                          type: "deleteTransaction",
                          payload: transaction.id,
                        })
                      }
                    />
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  {transaction.type}
                </Grid>
                <Grid item xs={4}>
                  {transaction.value}
                </Grid>
              </Grid>
            </ListItem>
          );
        })}
      </ListExpenses>
    </>
  );
}

export default List;
