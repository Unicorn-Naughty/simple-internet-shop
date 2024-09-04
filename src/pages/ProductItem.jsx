import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import useStore from "../hooks/useStore";
import Err404 from "./Err404";
function ProductItem() {
  const { catalog, page, cart } = useStore();
  const { id } = useParams();
  const validId = /^[1-9]+\d*$/.test(id);
  const product = catalog.one(+id);

  if (!validId || !product) {
    return <Err404 title={`Product not found`} />;
  }
  page.update(`${product.title} - buy now!`);
  return (
    <div>
      <h1>{product.title}</h1>
      <div>
        <div>{product.img ? `img` : "here can be photo"}</div>
        <span>Price {product.price}$</span>
        <div>Rest: {product.rest}</div>
        <div>
          {cart.inCart(id) ? (
            <button
              disabled={cart.inProccessAct(id)}
              onClick={() => cart.remove(id)}
            >
              Remove
            </button>
          ) : (
            <button
              disabled={cart.inProccessAct(id)}
              onClick={() => cart.add(id)}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
const obsProductItem = observer(ProductItem);
export default obsProductItem;
