import React, { useContext, useEffect } from "react";
import { GeneralContext } from "../Context/GeneralContext";
import { Box, Card, CardContent, CardHeader, Divider } from "@mui/material";
import Form from "./Form";
import { useSpeechContext } from "@speechly/react-client";
import {
  ErrorPanel,
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";

function Tracker() {
  const { setFormData } = useContext(GeneralContext);
  const { segment } = useSpeechContext();
  useEffect(() => {
    if (segment) {
      segment.entities.forEach((el) => {
        if (el.type === "amount") {
          setFormData((prev) => ({ ...prev, value: el.value }));
        } else {
          setFormData((prev) => ({ ...prev, type: el.value }));
        }
      });
    }
  }, [segment]);
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
          <PushToTalkButtonContainer>
            <PushToTalkButton />
            <ErrorPanel />
          </PushToTalkButtonContainer>
        </Box>
      </Box>
    </>
  );
}

export default Tracker;
