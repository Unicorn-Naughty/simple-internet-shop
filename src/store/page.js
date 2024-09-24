import { makeAutoObservable } from "mobx";

export default class Page {
  status = 200;
  title = "Remarket";
  flag = false;
  constructor(rootStore) {
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }
  update(title) {
    this.title = title;
    if (!import.meta.env.SSR) {
      document.title = title;
    }
  }
}
