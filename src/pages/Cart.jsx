import useStore from "../hooks/useStore";
import { observer } from "mobx-react-lite";

import CartItem from "./CartItem";
import { Link } from "react-router-dom";
function Cart() {
  const { cart } = useStore();

  return cart.items.length > 0 ? (
    <div  >
      {cart.itemsDetailed.map((pr) => (
        <CartItem cart={cart} pr={pr} key={pr.id} />
      ))}
      <Link to={`/order`}>Move to order</Link>
    </div>
  ) : (
    <div>
      <p>You have not got products in cart, return and buy something </p>
      <Link to={`/catalog`}>Back to catalog</Link>
    </div>
  );
}
export default observer(Cart);
