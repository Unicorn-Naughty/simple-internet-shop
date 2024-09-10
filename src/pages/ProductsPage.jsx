import { observer } from "mobx-react-lite";
import useStore from "../hooks/useStore";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import { Box } from "@mui/material";
import MultiActionAreaCard from "../components/MultiActionAreaCard";
function ProductsPage() {
  const { catalog } = useStore();

  const [filterText, setFilterText] = useState("");

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const filtredProducts = catalog.products.filter((product) =>
    product.title.toLowerCase().includes(filterText.toLocaleLowerCase())
  );

  return (
    <div>
      <h1>Catalog</h1>
      <hr />
      <div>
        <SearchBar
          filterText={filterText}
          handleFilterChange={handleFilterChange}
        />
        <Box>
          {filtredProducts.map((pr) => (
            <MultiActionAreaCard key={pr.id} product={pr} />
          ))}
        </Box>
      </div>
    </div>
  );
}
const obsProductsPage = observer(ProductsPage);
export default obsProductsPage;
