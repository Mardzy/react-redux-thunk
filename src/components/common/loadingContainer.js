import React from "react";
import { CircularProgress, Container } from "@material-ui/core";

import { ErrorBoundary } from "../../components";

const LoadingContainer = ({ component: Component, data, error, loading }) =>
  <Container className="loadingContainer">
    {console.log("error: ", error)}
    {
      loading
        ? <CircularProgress/>
        : error
          ? <ErrorBoundary error={error} />
          : <Component {...data} />
    }

  </Container>;

export default LoadingContainer;
