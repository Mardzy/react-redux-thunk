import React from "react";
import { CircularProgress, Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab"
const CommonContainer = ({ children, error, loading }) =>
  <Container>
    {
      loading
        ? <CircularProgress/>
        : error
          ? <Alert children={`You have encountered an error! ${error}`} severity="error"/> :
          <>{children}</>
    }
  </Container>

export default CommonContainer;
