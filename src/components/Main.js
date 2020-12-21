import React from "react";
import {
  Box, Link,
  Typography
} from "@material-ui/core";

import { Wrapper, Episodes } from "./index";

import { createMarkup } from "../utils";

const Main = ({ showInfo, episodeList, onClick }) => {

  const MainComponent = ({ data: { image, name, officialSite, rating, summary } }) => (
    <Box className="main">
      <Typography className="main-header" variant="h3">
        {name}
      </Typography>
      <Box className="main-content">
        <Box className="main-content__image">
          <img src={image.original} alt={name}/>
        </Box>
        <Box className="main-content__text">
          <Typography dangerouslySetInnerHTML={createMarkup(summary)}/>
          <Typography variant="body2">
            Rating: {rating.average}
          </Typography>
          <Link variant="subtitle1" href={officialSite} target="_blank">
            Official Site
          </Link>
          <Wrapper component={Episodes} onClick={onClick} {...episodeList} />
        </Box>
      </Box>
    </Box>
  );

  return <Wrapper component={MainComponent} {...showInfo} />;
};


export default Main;
