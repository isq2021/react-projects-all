import { Button, Grid, List as ListExpenses, ListItem } from "@mui/material";
import { Delete } from "@material-ui/icons";

import React from "react";

function List() {
  return (
    <>
      <ListExpenses>
        <ListItem>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Button>
                <Delete />
              </Button>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>
          </Grid>
        </ListItem>
      </ListExpenses>
    </>
  );
}

export default List;
