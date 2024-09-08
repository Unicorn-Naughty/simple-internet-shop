import { useRoutes } from "react-router-dom";
import routes from "../router";
import Navbar from "./Navbar";
import useStore from "../hooks/useStore";
import { useColorScheme } from "@mui/material";
function App() {
  const { mode, setMode } = useColorScheme();

  const view = useRoutes(routes);
  const { page } = useStore();
  page.update("Remarket");
  if (!mode) {
    null;
  }
  return (
    <div className="">
      <Navbar />
      {mode === "dark" ? (
        <button onClick={() => setMode("light")}>set light theme</button>
      ) : (
        <button onClick={() => setMode("dark")}>set dark theme</button>
      )}
      <hr />
      {view}
    </div>
  );
}

export default App;
