import React, { useContext, useState } from "react";
import { GeneralContext } from "../GeneralContext/GeneralContext";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./Products.css";
import { Link } from "react-router-dom";

var cardStyle = {
  display: "block",
  width: "18vw",
  transitionDuration: "0.3s",
  height: "40vw",
};

function Products() {
  const { allData, setSelectedProduct, selectedProduct } =
    useContext(GeneralContext);
  const handleBuyNow = (item) => {
    setSelectedProduct(item);
  };

  return (
    <>
      <div className="container">
        {allData.map((item) => {
          return (
            <div className="productCard">
              <Card sx={{ maxWidth: 345 }} style={cardStyle} ml={2}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt="product"
                    style={{ height: "200px" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {`Price : ${item.price} $`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleBuyNow(item)}>
                    <Link to="/ProductCard">Buy Now</Link>
                  </Button>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleBuyNow(item)}>
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
