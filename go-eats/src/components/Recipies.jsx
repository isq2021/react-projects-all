import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
} from "@mui/material";
import React, { useContext } from "react";
import { GeneralContext } from "../Context/GeneralContext";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";

function ShowRecipiesOnUI() {
  const { allData } = useContext(GeneralContext);

  const styleHeader = {
    height: 50,
  };
  return (
    <>
      <Hamburger />
      <Grid container spacing={2} style={styleHeader}>
        {allData.map((recipe) => (
          <Grid item xs={6} md={3} key={uuidv4()}>
            <Card>
              <CardHeader title={recipe.recipe.label} />
              <Divider />
              <CardContent>
                <CardMedia
                  component="img"
                  image={recipe.recipe.image}
                  height={200}></CardMedia>
              </CardContent>
            </Card>
            <Button>
              <Link to={`/Recipe/${recipe.recipe.label}`}>See details</Link>
            </Button>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ShowRecipiesOnUI;
