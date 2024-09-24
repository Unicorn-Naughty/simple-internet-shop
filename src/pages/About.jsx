import { Box, Skeleton, Stack } from "@mui/material";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import SkeletonTypography from "../components/SkeletonAbout";
function About() {
  return (
    <div>
      <h1>About</h1>
      <Box display={"flex"} sx={{ mb: "50px" }}>
        <SkeletonTypography />
      </Box>
      <h2>Our location & Contacts</h2>
      <Box width={"400px"} display={"flex"}>
        <Stack mr={44}>
          <Skeleton width={300} height={50} />
          <Skeleton width={300} height={75} />
          <Skeleton width={300} height={100} />
          <Skeleton width={300} height={200} />
        </Stack>
        <YMaps>
          <div>
            <Map
              width={"600px"}
              height={"400px"}
              defaultState={{ center: [56.01, 92.85], zoom: 15 }}
            >
              <Placemark geometry={[56.01, 92.85]} />
            </Map>
          </div>
        </YMaps>
      </Box>
    </div>
  );
}
export default About;
