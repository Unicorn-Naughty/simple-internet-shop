import { NavLink } from "react-router-dom";
import pagesArr from "../router/routesNavBar";

import { Box, Typography } from "@mui/material";
function Navbar() {
  return (
    <Box display={"flex"} id="navbar">
      <Box display={"flex"}>
        {pagesArr.map((pageLink) => (
          <Typography key={pageLink.name}>
            <NavLink
              
            >
              
            </NavLink>
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
export default Navbar;
