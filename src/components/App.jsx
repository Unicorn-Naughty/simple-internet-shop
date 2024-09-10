import { useRoutes } from "react-router-dom";
import routes from "../router";
import Navbar from "./Navbar";
import useStore from "../hooks/useStore";
import {
  Container,
  FormControlLabel,
  FormGroup,
  useColorScheme,
} from "@mui/material";
import MaterialUISwitch from "./Switcher";
import ButtonAppBar from "./ButtonAppBar";

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
  const { page } = useStore();
  page.update("Remarket");
  if (!mode) {
    null;
  }
  // return isDataLoading ? (
  //   <Loader />
  // ) : (
  return (
    <div className="">
      <ButtonAppBar mode={mode} setMode={setMode} />
      <hr />
      <Container maxWidth="xl">{view}</Container>
    </div>
  );
}

export default App;
