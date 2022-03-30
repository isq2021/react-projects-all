import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { GeneralContext } from "../GeneralContext/GeneralContext";

var cardStyle = {
  display: "block",
  width: "18vw",
  transitionDuration: "0.3s",
  height: "40vw",
};

function ProductCard() {
  const { selectedProduct } = useContext(GeneralContext);
  console.log(selectedProduct);
  return (
    <>
      <div className="productCard">
        <Card sx={{ maxWidth: 345 }} style={cardStyle} ml={2}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={selectedProduct.image}
              alt="product"
              style={{ height: "200px" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {selectedProduct.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`Price : ${selectedProduct.price} $`}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Go to Checkout
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

export default ProductCard;
