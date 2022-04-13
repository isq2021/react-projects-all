import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  Input,
} from "@mui/material";
import React, { useContext, useState } from "react";
import AllProductsList from "../components/Products/AllProductsList";
import { DELETEPRODUCT } from "../context/Actions";
import { FirestoreContext } from "../context/GeneralFireStore";
import { v4 as uuidv4 } from "uuid";

function SeeProducts() {
  const { allProducts, deleteProduct, modifyProduct } =
    useContext(FirestoreContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dataToChange, setDataToChange] = useState({});
  const handleDelete = (id, imgtoDelete) => {
    imgtoDelete = [...imgtoDelete];
    const start = imgtoDelete.indexOf("%");
    const end = imgtoDelete.indexOf("?");
    imgtoDelete = imgtoDelete.slice(start + 3, end).join("");
    deleteProduct(id, imgtoDelete);
  };

  const handleClose = () => {
    setDialogOpen(!dialogOpen);
  };
  const handleEdit = (data) => {
    setDataToChange(data);
    setDialogOpen(true);
  };
  //save modified data

  const updateProduct = () => {
    modifyProduct(dataToChange);
  };
  return (
    <>
      <Grid container spacing={2}>
        {allProducts.map(({ data, id }) => (
          <>
            <Grid item xs={2} key={uuidv4()}>
              {data.name}
            </Grid>
            <Grid item xs={2} key={uuidv4()}>
              {data.price}
            </Grid>
            <Grid item xs={2} key={uuidv4()}>
              <img src={data.img} alt="12" width="100" />
              {data.name}
            </Grid>
            <Grid item xs={2} key={uuidv4()}>
              <Button onClick={() => handleEdit({ ...data, id: id })}>
                Modify
              </Button>
            </Grid>
            <Grid item xs={4} key={uuidv4()}>
              <Button key={uuidv4()} onClick={() => handleDelete(id, data.img)}>
                Delete
              </Button>
            </Grid>
          </>
        ))}
      </Grid>
      <Dialog open={dialogOpen} onClose={handleClose}>
        <DialogTitle>
          <FormControl fullWidth>
            <Input
              value={dataToChange.name}
              placeholder="name"
              onChange={(e) =>
                setDataToChange({ ...dataToChange, name: e.target.value })
              }
            />
          </FormControl>
          <FormControl fullWidth>
            <Input
              value={dataToChange.price}
              placeholder="price"
              onChange={(e) =>
                setDataToChange({ ...dataToChange, price: e.target.value })
              }
            />
          </FormControl>
          <FormControl fullWidth>
            <Input
              type="file"
              onChange={(e) =>
                setDataToChange({ ...dataToChange, newImg: e.target.files[0] })
              }
            />
          </FormControl>
        </DialogTitle>
        <Button variant="contained" onClick={updateProduct}>
          Save
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "red" }}
          onClick={handleClose}>
          Cancel
        </Button>
      </Dialog>
    </>
  );
}

export default SeeProducts;
