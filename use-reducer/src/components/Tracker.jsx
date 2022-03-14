import React from "react";
import { Box, Card, CardContent, CardHeader, Divider } from "@mui/material";
import Form from "./Form";

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
      </Box>
    </>
  );
}

export default Tracker;
