import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { GeneralContext } from "../context/Context";

import { Grid } from "@mui/material";

export default function ActionAreaCard({ data, allProducts, passCart }) {
  const { image, title, description, price } = data;
  const [quantity, setQuantity] = useState(0);
  const { setToCart } = useContext(GeneralContext);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />

      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
      <Typography variant="h3" color="text.secondary">
        {price}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Button onClick={() => setQuantity(quantity + 1)} variant="contained">
            One more
          </Button>
        </Grid>
        <Grid item xs={4}>
          <TextField disabled value={quantity} />
        </Grid>
        <Grid item xs={4}>
          <Button onClick={() => setQuantity(quantity - 1)} variant="contained">
            Minus One
          </Button>
        </Grid>
      </Grid>
      <Button
        onClick={() =>
          passCart((prev) => [
            ...prev,
            { title: title, price: price * quantity, quantity: quantity },
          ])
        }
        size="large"
        color="primary"
        fullWidth>
        Add to cart
      </Button>
    </Card>
  );
}
