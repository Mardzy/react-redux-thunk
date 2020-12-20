import React from "react";
import { Box, CircularProgress, Container, Typography } from "@material-ui/core";

import { ErrorBoundary } from "../../components";

const LoadingContainer = ({ component: Component, data, error, loading }) =>
  <Container className="loadingContainer" display="flex">
    {console.log("error: ", error)}
    <Box className="loadingContainer-box" display="flex" flexDirection="column">

      <CircularProgress />
      <Typography className="loadingContainer-box__text" variant="h4">
        Loading...
      </Typography>
    </Box>
    {/*{*/}
    {/*  loading*/}
    {/*    ? <CircularProgress/>*/}
    {/*    : error*/}
    {/*      ? <ErrorBoundary error={error} />*/}
    {/*      : <Component {...data} />*/}
    {/*}*/}

  </Container>;

export default LoadingContainer;
