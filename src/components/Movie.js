import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://via.placeholder.com/150x200/EB91EA/FFFFFF/?text=No_IMG";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <Card>
      <CardActionArea>
        <CardMedia title={movie.Title}>
          <img width="200" height="300" src={poster} alt="net" />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.Title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.Year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Movie;
