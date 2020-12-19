import React from "react";
import { Alert } from "@material-ui/lab";

const ErrorBoundary = (error) =>
  <Alert children={`You have encountered an error! ${error}`} severity="error"/>;

export default ErrorBoundary;
