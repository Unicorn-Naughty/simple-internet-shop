import { Link } from "react-router-dom";
import useStore from "../hooks/useStore";
function Err404({ title = "Page not found" }) {
  const { page } = useStore();
  page.update(`${title} `);
  return (
    <div>
      {title}
      <div>
        <p>Back to <Link to={`/`}>Home</Link></p>
      </div>
    </div>
  );
}
export default Err404;
