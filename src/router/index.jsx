import Err404 from "../pages/Err404";
import obsProductItem from "../pages/ProductItem";
import obsProductsPage from "../pages/productsPage";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import About from "../pages/About";

const routes = [
  {
    path: "/catalog",
    Component: obsProductsPage,
  },
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/cart",
    Component: Cart,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "*",
    Component: Err404,
  },
  {
    path: "/catalog/:id",
    Component: obsProductItem,
  },
];
export default routes;
