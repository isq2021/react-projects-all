import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

function Form() {
  return (
    <>
      <div className="form-container">
        <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <FormControl>
              <InputLabel>Type</InputLabel>
              <Select value="Income">
                <MenuItem value="Income">Income</MenuItem>
                <MenuItem value="Expense">Expense</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <InputLabel>Amount</InputLabel>
              <TextField type="number" />
            </FormControl>
          </Grid>
          <Grid item xs={12} />
          <Button>Add expense</Button>
        </Grid>
      </div>
    </>
  );
}

export default Form;
