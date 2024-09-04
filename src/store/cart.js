import { makeAutoObservable, runInAction } from "mobx";

class Cart {
  constructor(rootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }
  items = [];
  #token = null;
  loading = false;
  iDiNProccess = [];

  inCart(id) {
    return this.items.some((item) => item.id == id);
  }
  inProccessAct(id) {
    return this.iDiNProccess.some((el) => el == id);
  }

  load = async () => {
    let curToken = this.rootStore.storage.getItem("CART_TOKEN");
    let { cart, token, needUpdate } = await this.rootStore.api.cart.load(
      curToken
    );
    if (needUpdate) {
      this.rootStore.storage.setItem("CART_TOKEN", token);
    }
    runInAction(() => {
      this.items = cart;
      this.#token = token;
    });
  };

  add = async (id) => {
    if (!this.inCart(id) && !this.inProccessAct(id)) {
      this.iDiNProccess.push(id);
      let res = await this.rootStore.api.cart.add(this.#token, id);

      runInAction(() => {
        if (res) {
          this.items.push({ id, cnt: 1 });
        }
        this.iDiNProccess = this.iDiNProccess.filter((el) => el != id);
      });
    }
  };

  // get itemsDetailed() {
  //   return this.items.map((item) => {
  //     let details = this.rootStore.products.getById(item.id);
  //     return { ...details, ...item };
  //   });
  // }

  get total() {
    return this.itemsDetailed.reduce(
      (sum, product) => sum + product.cnt * product.price,
      0
    );
  }

  change = async (id, cnt) => {
    if (this.inCart(id)) {
      let item = this.items.find((pr) => pr.id == id);
      let productDetails = this.itemsDetailed.find((pr) => pr.id == id);
      let res = await this.rootStore.api.cart.change(this.#token, id, cnt);
      if (res) {
        runInAction(() => {
          item.cnt = Math.max(1, Math.min(productDetails.rest, cnt));
        });
      }
    }
  };
  remove = async (id) => {
    if (this.inCart(id) && !this.inProccessAct(id)) {
      this.iDiNProccess.push(id);

      let res = await this.rootStore.api.cart.remove(this.#token, id);
      runInAction(() => {
        if (res) {
          this.items = this.items.filter((product) => product.id != id);
        }
        this.iDiNProccess = this.iDiNProccess.filter((el) => el != id);
      });
    }
  };
}

export default Cart;
