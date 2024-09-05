import { NavLink } from "react-router-dom";
import pagesArr from "../router/routesNavBar";
import "./nav.css";
function Navbar() {
  return (
    <nav id="navbar">
      <ul>
        {pagesArr.map((pageLink) => (
          <li key={pageLink.name}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
              to={pageLink.path}
            >
              {pageLink.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
