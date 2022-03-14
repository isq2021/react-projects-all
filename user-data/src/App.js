import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Users from "./components/users";

function App() {
  let URL = "https://user-list-seytech.herokuapp.com/users";
  const [users, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      let { data } = await axios.get(URL);
      setUser(data);
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
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        page is loading...
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <CircularProgress />
      </Box>
    </>
  ) : (
    <div className="App">
      <Users users={users} />
    </div>
  );
}

export default App;
