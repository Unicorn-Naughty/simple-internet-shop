import Catalog from "./catalog";
import Cart from "./cart";
import Page from "./page";
import Order from "./order";
class RootStore {
  constructor(api) {
    this.storage = window.localStorage;
    this.api = api;
    this.page = new Page(this);
    this.cart = new Cart(this);
    this.catalog = new Catalog(this);
    this.order = new Order(this);
  }
}
export default RootStore;
