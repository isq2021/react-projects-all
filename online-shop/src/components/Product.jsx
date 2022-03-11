import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useState } from "react";

import { Grid } from "@mui/material";

export default function ActionAreaCard({ data, allProducts }) {
  const { image, title, description, price } = data;
  const [quantity, setQuantity] = useState(0);
  const [cartProducts, setCart] = useState(0);

  const handleCart = () => {
    setCart(allProducts);
  };
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
        size="large"
        color="primary"
        fullWidth
        onClick={() => handleCart()}>
        Add to cart
      </Button>
    </Card>
  );
}
