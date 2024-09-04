import Catalog from "./catalog";
import Cart from "./cart";
import Page from "./page";
class RootStore {
  constructor(api) {
    this.storage = window.localStorage;
    this.api = api;
    this.page = new Page(this);
    this.cart = new Cart(this);
    this.catalog = new Catalog(this);
  }
}
export default RootStore;
