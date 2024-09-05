import useStore from "../hooks/useStore";
import { observer } from "mobx-react-lite";
import Counter from "../components/Counter";
import { Link } from "react-router-dom";
function Cart() {
  const { cart, catalog } = useStore();

  
  const detailedCarts = cart.items.map((item) => {
    return { ...catalog.one(item.id), item };
  });
  console.log(detailedCarts);

  /*
here can be 1 more request on server but 4 load user product in cart, i am stupid
*/

  return cart.items.length > 0 ? (
    <div>
      {detailedCarts.map((pr) => (
        <div key={pr.id}>
          <Link to={`/catalog/${pr.id}`}>{pr.title}</Link>
          <div>{pr.price}</div>
          <div>{pr.item.cnt}</div>
          <Counter cnt={pr.item.cnt} />
        </div>
      ))}
    </div>
  ) : (
    `You haven't got products in cart, return and buy somthing`
  );
}
export default observer(Cart);
