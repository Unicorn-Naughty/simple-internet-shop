import { Box, Typography } from "@mui/material";
import Link from "@mui/material/Link";
function Footer() {
  return (
    <Box
      position={"sticky"}
      p={2}
      py={3}
      px={2}
      mt="auto"
      sx={[
        (theme) => ({
          color: "#fff",
          backgroundColor: theme.palette.primary.main,
          ...theme.applyStyles("dark", {
            backgroundColor: theme.palette.divider,
          }),
        }),
      ]}
    >
      <Typography
        variant="body2"
        color="text.white"
        gutterBottom
        align="center"
      >
        {"Copyright © "}
        <Link color="inherit" href="#">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}
export default Footer;
