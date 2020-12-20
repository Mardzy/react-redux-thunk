import React from "react";
import {
  Box, Image, Typography
} from "@material-ui/core";

const Episode = ({ data }) => {
  const { airdate, image, name, number, runtime, season, summary} = data
  const createMarkup = (markup) => ({ __html: markup })

  return (
    <Box className="episode">
      <Box className="episode-header">
        <Typography variant="h3">
          {name}
        </Typography>

      </Box>
      <Box className="episode-content">
        <img src={image.original} />
        <Box className="episode-content__text">
          <Typography variant="h5">
            {`Season ${season} Episode ${number}`}
          </Typography>
        <Typography variant="body1" dangerouslySetInnerHTML={createMarkup(summary)} />
          <Typography variant="subtitle2">
            {`Initially aired: ${new Date(airdate).toDateString()}`}
          </Typography>
          <Typography variant="subtitle2">
            {`Runtime: ${runtime} minutes`}
          </Typography>
        </Box>
      </Box>

    </Box>
  );
}

export default Episode;
