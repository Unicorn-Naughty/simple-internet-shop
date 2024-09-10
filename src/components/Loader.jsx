import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
function Loader() {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <h1>Some data Loading...</h1>
      <CircularProgress />
    </Box>
  );
}
export default Loader;
