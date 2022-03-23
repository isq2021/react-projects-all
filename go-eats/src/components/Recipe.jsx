import { useParams } from "react-router-dom";
import React, { useContext, useState } from "react";
import { GeneralContext } from "../Context/GeneralContext";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Tab,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { TabPanel, TabList, TabContext } from "@mui/lab";
import Hamburger from "./Hamburger";

function Recipe() {
  const { allData } = useContext(GeneralContext);
  const { recipe } = useParams();

  const recipe1 = allData.find((item) => item.recipe.label === recipe);
  console.log(recipe1);

  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return recipe ? (
    <div>
      <Hamburger />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card style={{ width: "400px", objectFit: "cover", margin: "auto" }}>
            <CardHeader title={recipe1?.recipe.label} />
            <Divider />
            <CardContent>
              <CardMedia
                component="img"
                image={recipe1?.recipe.images.REGULAR.url}
                height={200}
                width={"100px"}></CardMedia>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <TabContext value={value}>
            <TabList onChange={handleChange} aria-label="description">
              <Tab label="Ingredients" value="1" />
              tab1
              <Tab label="Nutritional value" value="2" />
              tab2
              <Tab label="type of food" value="3" />
              tab3
            </TabList>
            <TabPanel value="1">
              {recipe1?.recipe.ingredientLines.map((item) => (
                <h4 key={uuidv4()}>{item}</h4>
              ))}
            </TabPanel>
            <TabPanel value="2">2</TabPanel>
            <TabPanel value="3">3</TabPanel>
          </TabContext>
        </Grid>
      </Grid>
    </div>
  ) : null;
}

export default Recipe;
