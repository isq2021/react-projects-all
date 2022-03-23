import React, { useState } from "react";
import { Drawer, List, ListItem, Button, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

function Hamburger() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="left">
        <List>
          <ListItem>
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link to="/Recipe/:recipe">Recipe</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Button onClick={() => setOpenMenu(!openMenu)}>Show Menu</Button>
    </>
  );
}

export default Hamburger;
