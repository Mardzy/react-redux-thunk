import React from "react";
import { Container } from "@material-ui/core";

import { ErrorBoundary, LoadingContainer } from "../../components";

const AppWrapper = ({ component: Component, data, error, loading }) =>
  <Container className="appWrapper" display="flex">
    {
      loading
        ? <LoadingContainer />
        : error
          ? <ErrorBoundary error={error} />
          : <Component {...data} />
    }
  </Container>;

export default AppWrapper;
