import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import useStore from "../hooks/useStore";
import Err404 from "./Err404";
import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { Button } from "@mui/material";
import { Accordion } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
      <Box mb={"50px"} display={"flex"}>
        <img src="http://dummyimage.com/300"></img>
        <Box ml={25}>
          <Box mb={"25px"}>Price {product.price}$</Box>
          <Box mb={"25px"}>Rest: {product.rest}</Box>
          <Box mb={"25px"}></Box>
          <Box mb={"25px"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odit,
            officiis aut ipsa ea rem.
          </Box>
          <div>
            {cart.inCart(id) ? (
              <Button
                color="error"
                sx={{ display: "block", width: "100%" }}
                variant="outlined"
                disabled={cart.inProccessAct(id)}
                onClick={() => cart.remove(id)}
              >
                Remove from cart
              </Button>
            ) : (
              <Button
                sx={{ display: "block", width: "100%" }}
                variant="outlined"
                disabled={cart.inProccessAct(id)}
                onClick={() => cart.add(id, product)}
              >
                Buy
              </Button>
            )}
          </div>
        </Box>
      </Box>
      <div>
        <Accordion defaultExpanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component={"span"} > Parametrs</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={"span"} > Colors : ...</Typography>
            <Typography component={"span"} > Weight : ...</Typography>
            <Typography component={"span"} > Country : ...</Typography>
            <Typography component={"span"} > CVV code : ...</Typography>
            <Typography component={"span"} > Transport : ...</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>More params</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography component={"span"} > 1: ...</Typography>
              <Typography component={"span"} > 2: ...</Typography>
              <Typography component={"span"} > 3: ...</Typography>
              <Typography component={"span"} > 4: ...</Typography>
              <Typography component={"span"} > 5: ...</Typography>
              <Typography component={"span"} > 6: ...</Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
const obsProductItem = observer(ProductItem);
export default obsProductItem;
