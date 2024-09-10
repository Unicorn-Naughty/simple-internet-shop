import { Paper, Typography, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const exampleItems = [
  {
    name: "First Item",
    description: "Description for first item",
  },
  {
    name: "Second Item",
    description: "Description for second item",
  },
];

const ExampleCarousel = () => {
  return (
    <Carousel
      animation="slide"
      indicators={true}
      timeout={500}
      navButtonsAlwaysVisible={true}
      navButtonsAlwaysInvisible={false}
      cycleNavigation={true}
      fullHeightHover={false}
      sx={{
        maxWidth: "lg",
        flexGrow: 1,
        margin: "auto",
        mt: 5,
      }}
    >
      {exampleItems.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

function Item(props) {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.100",
        color: "#000",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "10px",
        p: 4,
      }}
      elevation={10}
    >
      <Typography variant="h4">{props.item.name}</Typography>
      <Typography>{props.item.description}</Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2, alignSelf: "center" }}
      >
        Learn More
      </Button>
    </Paper>
  );
}

export default ExampleCarousel;
