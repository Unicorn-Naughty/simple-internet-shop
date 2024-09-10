import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

export default function MultiActionAreaCard({ product }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link
          underline="none"
          component={RouterLink}
          to={`/catalog/${product.id}`}
        >
          <CardMedia
            component="img"
            height="140"
            src="http://dummyimage.com/120"
            alt="api product photo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {`${product.price}$`}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto doloremque fugit consectetur qui sit autem, commodi
              aliquam dolorum. Quam maxime, autem ipsum quod culpa incidunt.
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
      <CardActions>
        <Link component={RouterLink} to={`/catalog/${product.id}`}>
          Read More
        </Link>
      </CardActions>
    </Card>
  );
}
