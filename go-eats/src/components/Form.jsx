import React, { useContext } from "react";
import { Box, FormControl, Grid, TextField } from "@mui/material";
import { GeneralContext } from "../Context/GeneralContext";
import { debounce } from "lodash";

function Form() {
  const { setsearchRecipeValue } = useContext(GeneralContext);
  const handleSearch = debounce((value) => {
    setsearchRecipeValue(value);
  }, 500);

  return (
    <Grid container spacing={2}>
      <Grid item xs={1} md={3}></Grid>
      <Grid item xs={10} md={6}>
        <Box xs={{ m: "2rem" }}>
          <FormControl fullWidth>
            <TextField
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </FormControl>
        </Box>
      </Grid>
      <Grid item x={1} md={3}></Grid>
    </Grid>
  );
}

export default Form;
