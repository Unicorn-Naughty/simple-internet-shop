import useStore from "../hooks/useStore";
import { observer } from "mobx-react-lite";
import Err404 from "./Err404";

function Result() {

  const { order } = useStore();
  
  return (
    <div>
      {order.cacheOrder.length > 0 ? (
        order.cacheOrder.map((cache) => (
          <div key={cache.info.name}>
            <h1>{`${cache.info.name}, ваш заказ готов.`}</h1>
            <table>
              <thead>
                <tr>
                  <th>Название товара</th>
                  <th>Количество</th>
                  <th>Цена</th>
                </tr>
              </thead>
              {cache.products.map((pr) => (
                <tbody key={pr.id}>
                  <tr>
                    <td>{`${pr.title}`}</td>
                    <td>{`${pr.cnt}`}</td>
                    <td>{`${pr.price}`}</td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div>{`Сумма заказа: ${cache.total}$`}</div>
          </div>
        ))
      ) : (
        <Err404 />
      )}
      {}
      <hr />
    </div>
  );
}
export default observer(Result);
