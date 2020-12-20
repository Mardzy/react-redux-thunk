import React from "react";
import { CircularProgress, Box, Typography } from "@material-ui/core";

const LoadingContainer = () =>
  <Box className="loadingContainer" display="flex" flexDirection="column">
      <CircularProgress />
      <Typography className="loadingContainer-text" variant="h4">
        Loading...
      </Typography>
  </Box>;

export default LoadingContainer;
