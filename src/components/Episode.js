import React from "react";
import { Box, Typography } from "@material-ui/core";

import { createMarkup } from "../utils";

const Episode = ({ data : { airdate, image, name, number, runtime, season, summary } }) => (
  <Box className="episode">
    <Box className="episode-header">
      <Typography variant="h3">
        {name}
      </Typography>
    </Box>
    <Box className="episode-content">
      {image && <img src={image.original} alt={name}/>}
      <Box className="episode-content__text">
        <Typography variant="h5">
          {`Season ${season} Episode ${number}`}
        </Typography>
        {summary && <Typography variant="body1" dangerouslySetInnerHTML={createMarkup(summary)}/>}
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

export default Episode;
