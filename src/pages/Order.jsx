import { observer } from "mobx-react-lite";
import useStore from "../hooks/useStore";
import { useNavigate } from "react-router-dom";
import { runInAction } from "mobx";
import Err404 from "./Err404";
function Order() {
  const { order, cart, storage } = useStore();
  const navigate = useNavigate();
  function pushCacheOrder() {
    runInAction(() => {
      order.cacheOrder.push({
        products: [...cart.itemsDetailed],
        info: { ...order.orderData },
        total: cart.total,
      });

      cart.items = [];
      order.fileds = [];
    });
    storage.clear();

    navigate("/result");
  }

  return (
    <div>
      {cart.itemsDetailed.length > 0 ? (
        <form>
          {order.fields.map((field) => (
            <div key={field.name}>
              <label>{field.label}</label>
              <input
                type="text"
                value={field.value}
                name={field.name}
                placeholder={field.name}
                onChange={(e) =>
                  order.orderFormUpdate(field.name, e.target.value.trim())
                }
              />
            </div>
          ))}
          <button
            type="button"
            disabled={!order.isValid}
            onClick={() => pushCacheOrder()}
          >
            Get order
          </button>
        </form>
      ) : (
        <Err404 />
      )}
    </div>
  );
}
export default observer(Order);
