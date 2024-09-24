import useStore from "../hooks/useStore";
import { observer } from "mobx-react-lite";

import CartItem from "./CartItem";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Link } from "@mui/material";
function Cart() {
  const { cart } = useStore();

  return cart.items.length > 0 ? (
    <Box>
      <Box mb={"10px"}
        display={"flex"}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
      >
        <h1>Cart</h1>
        <Box>
          <h2>Total summary: {cart.total}$</h2>
          <Button LinkComponent={RouterLink} variant="contained" to={`/order`}>
            Move to order
          </Button>
        </Box>
      </Box>
      {cart.itemsDetailed.map((pr) => (
        <CartItem cart={cart} pr={pr} key={pr.id} />
      ))}
    </Box>
  ) : (
    <div>
      <h1>Cart</h1>
      <p>You have not got products in cart, return and buy something </p>
      <Button LinkComponent={RouterLink} variant="outlined" to={`/catalog`}>
        Back to catalog
      </Button>
    </div>
  );
}
export default observer(Cart);
