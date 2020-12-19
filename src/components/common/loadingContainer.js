import React from "react";
import { CircularProgress, Container } from "@material-ui/core";

const LoadingContainer = ({ component: Component, loading, data }) =>
  <Container>
    {
      loading
        ? <CircularProgress/>
        : <Component {...data} />
    }

  </Container>;

export default LoadingContainer;
