import { observer } from "mobx-react-lite";
import useStore from "../hooks/useStore";
import { useNavigate } from "react-router-dom";
import { runInAction } from "mobx";
import Err404 from "./Err404";
import { Box, Button, FormControl, TextField, Alert } from "@mui/material";
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
      <h1>Order Form</h1>
      {cart.itemsDetailed.length > 0 ? (
        <FormControl>
          {order.fields.map((field) => (
            <Box key={field.name} width={"300px"} mb={"15px"}>
              <TextField
                fullWidth
                error={field.value.length && !field.valid ? true : false}
                helperText={
                  field.value.length && !field.valid
                    ? `Please enter your ${field.name}`
                    : ""
                }
                variant="outlined"
                label={field.name}
                value={field.value}
                name={field.name}
                onChange={(e) =>
                  order.orderFormUpdate(field.name, e.target.value.trim())
                }
              ></TextField>
            </Box>
          ))}
          <Button
            variant="contained"
            type="button"
            disabled={!order.isValid}
            onClick={() => pushCacheOrder()}
          >
            Get order
          </Button>
        </FormControl>
      ) : (
        <Err404 />
      )}
    </div>
  );
}
export default observer(Order);
