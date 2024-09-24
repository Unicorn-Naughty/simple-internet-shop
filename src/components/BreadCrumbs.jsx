import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Link as RouterLink } from "react-router-dom";

export default function BasicBreadcrumbs() {
  const breadcrumbs = useBreadcrumbs();
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs.map(({ match, breadcrumb }) => (
          <Link
          color="primary"
            underline="none"
            component={RouterLink}
            key={match.pathname}
            to={match.pathname}
          >
            {breadcrumb}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
}
