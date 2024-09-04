import Err404 from "../pages/Err404";
import obsProductItem from "../pages/ProductItem";
import obsProductsPage from "../pages/productsPage";

const routes = [
  {
    path: "/",
    Component: obsProductsPage,
  },
  {
    path: "*",
    Component: Err404,
  },
  {
    path: "/product/:id",
    Component: obsProductItem,
  },
];
export default routes;
