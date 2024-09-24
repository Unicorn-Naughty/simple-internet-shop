import useStore from "../hooks/useStore";
import { observer } from "mobx-react-lite";
import Err404 from "./Err404";
import { runInAction } from "mobx";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableFooter } from "@mui/material";
function Result() {
  const { order } = useStore();

  console.log("1");

  return (
    <div>
      <h1>Your order</h1>
      {order.cacheOrder.length > 0 ? (
        order.cacheOrder.map((cache) => (
          <div key={cache.info.name}>
            <h3>{`${cache.info.name}, we sent message on your email. We will contact you, when your order be ready!`}</h3>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Products name</TableCell>
                    <TableCell align="left">Quantity</TableCell>
                    <TableCell align="left">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cache.products.map((pr) => (
                    <TableRow key={pr.id}>
                      <TableCell padding="normal" component="th" scope="row">
                        {`${pr.title}`}
                      </TableCell>
                      <TableCell
                        padding="normal"
                        align="left"
                      >{`${pr.cnt}`}</TableCell>
                      <TableCell
                        padding="normal"
                        align="left"
                      >{`${pr.price}$`}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell>{`Сумма заказа: ${cache.total}$`}</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </div>
        ))
      ) : (
        <Err404 />
      )}
    </div>
  );
}
export default observer(Result);
