import { makeAutoObservable } from "mobx";
import { runInAction } from "mobx";
class Order {
  constructor(rootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  cacheOrder = [];

  fields = [
    {
      label: "Name",
      name: "name",
      value: "",
      valid: "",
      pattern: /^.{2,}$/,
    },
    {
      label: "Email",
      name: "email",
      value: "",
      valid: false,
      pattern: /^.+@.+$/,
    },
    {
      name: "phone",
      label: "Phone",
      value: "",
      valid: false,
      pattern: /^\d{5,12}.+$/,
    },
  ];
  orderFormUpdate(name, value) {
    let field = this.fields.find((field) => field.name === name);
    if (field !== undefined) {
      field.value = value.trim();
      field.valid = field.pattern.test(field.value);
    }
  }
  get orderData() {
    let res = {};
    this.fields.forEach((field) => {
      res[field.name] = field.value;
    });
    return res;
  }
  get isValid() {
    return this.fields.every((field) => field.valid);
  }
}
export default Order;
