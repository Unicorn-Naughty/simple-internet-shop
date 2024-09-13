import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import pagesArr from "../router/routesNavBar";
import { Link, NavLink } from "react-router-dom";
import { Badge, CssBaseline, FormControlLabel, FormGroup } from "@mui/material";
import MaterialUISwitch from "./Switcher";
import { useState } from "react";
import "./nav.css";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { observer } from "mobx-react-lite";

const drawerWidth = 240;
function DrawerAppBar({ window, setMode, mode, cart }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {pagesArr.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" position="sticky">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Remarket
          </Typography>
          <Box component="div" sx={{ flexGrow: 1 }}>
            <Typography id="navLinks" display="flex" component="div">
              {pagesArr.map((pageLink) => (
                <Typography variant="h6" marginLeft="20px" key={pageLink.name}>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    to={pageLink.path}
                  >
                    {pageLink.name}
                  </NavLink>
                </Typography>
              ))}
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Box component={Link} to={"/cart"} mr={"15px"}>
              <IconButton aria-label="cart">
                <Badge badgeContent={cart.items.length} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
            <FormGroup>
              <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} />}
                checked={mode === "dark" ? true : false}
                onChange={(e) =>
                  e.target.checked ? setMode("dark") : setMode("light")
                }
              />
            </FormGroup>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default observer(DrawerAppBar);
