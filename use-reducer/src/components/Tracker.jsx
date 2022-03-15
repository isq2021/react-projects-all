import React from "react";
import { Box, Card, CardContent, CardHeader, Divider } from "@mui/material";
import Form from "./Form";
import List from "./List";

function Tracker() {
  return (
    <>
      <Box>
        <Card>
          <CardHeader title="Tracker" subheader="By me" />
          <Divider />
          <CardContent>
            <Form />
          </CardContent>
        </Card>
        <Box>
          <List />
        </Box>
      </Box>
    </>
  );
}

export default Tracker;
