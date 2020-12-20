import React from "react";
import {
  Box, Link,
  Typography
} from "@material-ui/core";

import { createMarkup } from "../utils";

const Main = ({ data : { image, name, officialSite, rating, summary } }) => (
  <Box className="main">
    <Typography className="main-header" variant="h3">
      {name}
    </Typography>
    <Box className="main-content">

      <img src={image.original} alt={name}/>
      <Box className="main-content__text">
        <Typography dangerouslySetInnerHTML={createMarkup(summary)} />
        <Typography variant="body2">
          Rating: {rating.average}
        </Typography>
        <Link variant="subtitle1" href={officialSite} target="_blank">
          Official Site
        </Link>
      </Box>
    </Box>
  </Box>
);


export default Main;
