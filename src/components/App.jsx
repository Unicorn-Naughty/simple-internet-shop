import { useRoutes } from "react-router-dom";
import routes from "../router";

function App() {
  const view = useRoutes(routes);

  
  return (
    <div>
      Hello react
    <hr />
    {view}
    </div>
  );
}

export default App;
