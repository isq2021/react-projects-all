import { Button, FormControl, Grid, Input } from "@mui/material";
import React, { useContext, useState } from "react";
import Header from "../components/commons/Header";
import { GeneralAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function LoginAdmin() {
  const [seePassword, setSeePassword] = useState(false);
  const [loginInfo, setLoginInfo] = useState({});
  const { loginUser, userInfo } = useContext(GeneralAuthContext);
  const handleLogin = () => {
    loginUser(loginInfo.email, loginInfo.password);
  };
  return (
    <>
      {!userInfo ? (
        <div>
          <Header />
          <Grid container spacing={2}>
            <Grid item sx={12}>
              <FormControl>
                <Input
                  placeholder="email"
                  type="email"
                  onChange={(e) =>
                    setLoginInfo({ ...loginInfo, email: e.target.value })
                  }></Input>
              </FormControl>
            </Grid>
            <Grid item sx={12}>
              <FormControl>
                <Input
                  placeholder="password"
                  type={seePassword ? "text" : "password"}
                  onChange={(e) =>
                    setLoginInfo({ ...loginInfo, password: e.target.value })
                  }></Input>
                <Button onClick={() => setSeePassword(!seePassword)}>
                  See
                </Button>
              </FormControl>
            </Grid>
            <Grid item sx={12}>
              <FormControl>
                <Button onClick={() => handleLogin()}>
                  {userInfo ? "Log out" : "Login"}
                </Button>
              </FormControl>
            </Grid>
            <Grid item sx={12}></Grid>
          </Grid>
        </div>
      ) : (
        <Navigate to="/dashboard" />
      )}
    </>
  );
}

export default LoginAdmin;
