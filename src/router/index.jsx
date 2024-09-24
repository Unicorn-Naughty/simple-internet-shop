import Err404 from "../pages/Err404";
import obsProductItem from "../pages/ProductItem";
import obsProductsPage from "../pages/productsPage";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import About from "../pages/About";
import Order from "../pages/Order";
import Result from "../pages/Result";

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
    path: "/order",
    Component: Order,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/result",
    Component: Result,
  },
  {
    path: "*",
    Component: Err404,
  },
  {
    path: "/catalog/:id",
    Component: obsProductItem,
  },
  {
    path: "/:id",
    Component: obsProductItem,
  },
];
export default routes;
