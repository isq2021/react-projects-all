import { Divider, Grid, List, ListItemButton } from "@mui/material";
import React, { useContext } from "react";
import Header from "../components/commons/Header";
import FormProducts from "../components/FormProducts";
import { GeneralAuthContext } from "../context/AuthContext";
import { Link, Navigate, Outlet } from "react-router-dom";

function Dashboard() {
  const { userInfo } = useContext(GeneralAuthContext);
  return (
    <>
      {userInfo ? (
        <>
          <Header />
          <Grid container spacing={2}>
            <Grid item xs={2} md={4}>
              <List>
                <ListItemButton>
                  <Link to="see-products">all products</Link>
                </ListItemButton>
                <Divider />
                <ListItemButton>
                  <Link to="add-product">add product</Link>
                </ListItemButton>
                <Divider />
                <ListItemButton>
                  <Link to="orders">see orders</Link>
                </ListItemButton>
                <Divider />
              </List>
            </Grid>
            <Grid item xs={2} md={4}>
              <Outlet />
            </Grid>
          </Grid>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Dashboard;
