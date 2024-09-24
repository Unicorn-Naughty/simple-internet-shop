import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import { Box, Stack } from "@mui/material";
export default function SkeletonTypography() {
  return (
    <div>
      <h2>Our Team</h2>
      <Box
        sx={{
          display: "flex",
          gap: "25px",
          flexWrap: "wrap",
        }}
      >
        <Stack spacing={1}>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
          <Skeleton variant="rectangular" width={400} height={150} />
          <Skeleton variant="rounded" width={400} height={150} />
        </Stack>
        <Stack spacing={1}>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
          <Skeleton variant="rectangular" width={400} height={150} />
          <Skeleton variant="rounded" width={400} height={150} />
        </Stack>
        <Stack spacing={1}>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
          <Skeleton variant="rectangular" width={400} height={150} />
          <Skeleton variant="rounded" width={400} height={150} />
        </Stack>
        <Stack spacing={1}>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
          <Skeleton variant="rectangular" width={400} height={150} />
          <Skeleton variant="rounded" width={400} height={150} />
        </Stack>
        <Stack spacing={1}>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
          <Skeleton variant="rectangular" width={400} height={150} />
          <Skeleton variant="rounded" width={400} height={150} />
        </Stack>
        <Stack spacing={1}>
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
          <Skeleton variant="rectangular" width={400} height={150} />
          <Skeleton variant="rounded" width={400} height={150} />
        </Stack>
      </Box>
    </div>
  );
}
