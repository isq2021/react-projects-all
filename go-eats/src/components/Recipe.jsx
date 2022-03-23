import { useParams } from "react-router-dom";
import React, { useContext } from "react";
import { GeneralContext } from "../Context/GeneralContext";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";

function Recipe() {
  const { allData } = useContext(GeneralContext);
  const { recipe } = useParams();
  console.log(recipe, "from router");
  console.log(allData);
  const recipe1 = allData.find((item) => item.recipe.label === recipe);
  console.log(recipe1?.recipe.image, "ddd");

  return recipe ? (
    <div>
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
        <CardContent>
          {recipe1?.recipe.ingredientLines.map((item) => (
            <h4 key={uuidv4()}>{item}</h4>
          ))}
        </CardContent>
      </Card>
    </div>
  ) : null;
}

export default Recipe;
