import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Users from "./components/Users";
import styled from "styled-components";

const SpinnerStyle = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

function App() {
  let URL = "https://user-list-seytech.herokuapp.com/users";
  const [users, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      let { data } = await axios.get(URL);
      setUser(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return isLoading ? (
    <>
      <SpinnerStyle>
        <Typography mb={2}>LOADING DATA...</Typography>
        <Box>
          <CircularProgress />
        </Box>
      </SpinnerStyle>
    </>
  ) : (
    <Users users={users} />
  );
}

export default App;
