import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import pagesArr from "../router/routesNavBar";
import { NavLink } from "react-router-dom";
import { FormControlLabel, FormGroup } from "@mui/material";
import MaterialUISwitch from "./Switcher";
import "./nav.css";

export default function ButtonAppBar({ mode, setMode }) {
  return (
    <Box component="nav" sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <DragHandleIcon />
          </IconButton>
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
          <FormGroup>
            <FormControlLabel
              control={<MaterialUISwitch sx={{ m: 1 }} />}
              checked={mode === "dark" ? true : false}
              onChange={(e) =>
                e.target.checked ? setMode("dark") : setMode("light")
              }
            />
          </FormGroup>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
