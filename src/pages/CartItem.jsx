import { Link } from "react-router-dom";
import Counter from "../components/Counter";
function CartItem({ pr, cart }) {
  return (
    <div>
      <Link to={`/catalog/${pr.id}`}>{pr.title}</Link>
      <div>{pr.price}</div>
      <Counter
        onChange={(cnt) => cart.change(pr.id, cnt)}
        max={pr.rest}
        cnt={pr.cnt}
      />
      <button onClick={() => cart.remove(pr.id)}>Delete</button>
    </div>
  );
}
export default CartItem;
