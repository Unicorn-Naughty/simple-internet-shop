import createCartApi from "./cart";
import createProductsApi from "./products";
function createApi(http) {
  return {
    products: createProductsApi(http),
    cart: createCartApi(http),
  };
}
export default createApi;
