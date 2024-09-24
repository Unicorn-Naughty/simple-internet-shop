import Counter from "../components/Counter";
import { Box, Button } from "@mui/material";

function CartItem({ pr, cart }) {
  return (
    <>
      <Box p={2} width={"275px"} mb={"15px"} >
        <h3>Product name: {pr.title}</h3>
        <h4>Price: {pr.price * pr.cnt}$</h4>
        <Box mb={"15px"}>
          <Counter
            onChange={(cnt) => cart.change(pr.id, cnt)}
            max={pr.rest}
            cnt={pr.cnt}
          />
        </Box>
        <Button
          fullWidth
          variant="outlined"
          color="error"
          onClick={() => cart.remove(pr.id)}
        >
          Delete
        </Button>
      </Box>
      <hr />
    </>
  );
}
export default CartItem;
