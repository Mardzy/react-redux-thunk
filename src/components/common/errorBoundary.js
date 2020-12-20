import React from "react";
import { Alert } from "@material-ui/lab";
import { Box, Typography } from "@material-ui/core";

const ErrorBoundary = ({ error }) =>
  <Box className="errorBoundary">
    <Alert
      children={
        <Box className="errorBoundary-alert__box">
          <Typography align="center" variant="h4">
            You've encountered an error!
          </Typography>
          <Typography align="center" variant="subtitle1">
            {error}
          </Typography>
        </Box>
      }
      className="errorBoundary-alert"
      severity="error"
    />
  </Box>

export default ErrorBoundary;
