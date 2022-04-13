import React, { useContext } from "react";
import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CardContext } from "../../context/GeneralCard";
import { GeneralAuthContext } from "../../context/AuthContext";

function Header() {
  const { allProductsInCart } = useContext(CardContext);
  const { userInfo, logOut } = useContext(GeneralAuthContext);
  const handleLogout = () => {
    logOut();
  };
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{ display: "flex", justifyContent: "space-around" }}>
        <Grid item xs={12} md={2}>
          <Link to="/">
            <CardMedia
              component="img"
              image="https://www.pngitem.com/pimgs/m/178-1783030_online-shopping-logo-png-transparent-png.png"
              height="100"
            />
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "space-between",
            }}>
            <Link to="/">
              <Typography sx={{ minWidth: 100 }}>Home</Typography>
            </Link>
            <Link to="/dashboard">
              <Typography sx={{ minWidth: 100 }}>Dashboard</Typography>{" "}
            </Link>

            <Typography sx={{ minWidth: 100 }}>About us</Typography>
            <Link to="/productlist">
              <Button color="secondary" variant="contained">
                Cart {allProductsInCart.length}
              </Button>
            </Link>
            {!userInfo ? (
              <Link to="/loginAdmin">
                <Button color="primary" variant="contained">
                  Login
                </Button>
              </Link>
            ) : (
              <Button
                color="primary"
                variant="contained"
                onClick={handleLogout}>
                Log out
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
