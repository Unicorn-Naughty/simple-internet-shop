import { useRoutes } from "react-router-dom";
import routes from "../router";
import "./index.css";
import useStore from "../hooks/useStore";
import { Box, Container, useColorScheme } from "@mui/material";

import ButtonAppBar from "./ButtonAppBar";
import BasicBreadcrumbs from "./BreadCrumbs";
import Footer from "./Footer";
import { observer } from "mobx-react-lite";
function App() {
  const { mode, setMode } = useColorScheme();

  // const [isDataLoading, setIsDataLoading] = useState(false);
  // async function getDataFromBackend() {
  //   //set the state isDataLoading = true before making the network call
  //   setIsDataLoading(true);
  //   //make the network call here
  //   await store.catalog.load().then(store.cart.load());

  //   //reset the state isDataLoading = false when network call has finished
  //   setIsDataLoading(false);
  // }

  // useEffect(() => {
  //   getDataFromBackend();
  // }, []);

  const view = useRoutes(routes);
  const { page, cart } = useStore();

  page.update("Remarket");
  if (!mode) {
    null;
  }
  // return isDataLoading ? (
  //   <Loader />
  // ) : (
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box className="hidden" component={"header"} mb={"25px"}>
        <ButtonAppBar mode={mode} setMode={setMode} cart={cart} />
      </Box>
      <Container
        className="hidden"
        component={"main"}
        maxWidth="xl"
        sx={{ flexGrow: 1 }}
      >
        <BasicBreadcrumbs />
        {view}
      </Container>
      <Box mt={"125px"} component={"footer"}>
        <Footer />
      </Box>
    </Box>
  );
}

export default observer(App);
