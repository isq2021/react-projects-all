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
import { GeneralContext } from "../Context/GeneralContext";
import { useContext } from "react";

function Form() {
  const { formData, setFormData, dispatch } = useContext(GeneralContext);
  return (
    <>
      <div className="form-container">
        <Grid container spacing={2} mt={2}>
          <Grid item xs={6}>
            <FormControl>
              <InputLabel>Type</InputLabel>
              <Select
                value={formData.type}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, type: e.target.value }))
                }>
                <MenuItem value="Income">Income</MenuItem>
                <MenuItem value="Expense">Expense</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl>
              <TextField
                type="number"
                value={formData.value}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, value: e.target.value }))
                }
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} />
          <Button
            onClick={() =>
              dispatch({ type: "addTransaction", payload: formData })
            }>
            Add expense
          </Button>
        </Grid>
      </div>
    </>
  );
}

export default Form;
