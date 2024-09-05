import { useRoutes } from "react-router-dom";
import routes from "../router";
import Navbar from "./Navbar";
function App() {
  const view = useRoutes(routes);
  return (
    <div>
      <Navbar/>
      <hr />
      {view}
    </div>
  );
}

export default App;
