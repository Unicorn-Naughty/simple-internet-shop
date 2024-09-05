import { observer } from "mobx-react-lite";
import useStore from "../hooks/useStore";
import { Link } from "react-router-dom";
function ProductsPage() {
  const { catalog } = useStore();
  return (
    <div>
      <h1>Catalog</h1>
      <hr />
      <div>
        {catalog.products.map((pr) => (
          <div key={pr.id}>
            <h3>{pr.title}</h3>

            <div>{pr.price}</div>
            <Link to={`/catalog/${pr.id}`}>Read more</Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
const obsProductsPage = observer(ProductsPage);
export default obsProductsPage;
