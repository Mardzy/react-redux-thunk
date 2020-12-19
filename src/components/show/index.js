import React from "react";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Button
} from "@material-ui/core";

const ShowView = ({ image, name }) => {

  return (
    <Container className="show">
      <Typography variant="h1" component="h3">
        {name}
      </Typography>
      <Card>
        <CardActionArea>
          <CardMedia
            className="show-image"
            image={image.original}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default ShowView;
