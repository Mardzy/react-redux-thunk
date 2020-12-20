import React from "react";
import { Container } from "@material-ui/core";

import { ErrorBoundary, LoadingContainer } from "../../components";

/**
 * @param {JSX.Element} Component
 * @param {[]|{}} data
 * @param {string} error
 * @param {boolean} loading
 * @param {function} onClick
 * @return {JSX.Element}
 * @constructor
 */
const AppWrapper = ({ component: Component, data, error, loading}) =>
  <Container className="appWrapper" display="flex">
    {
      loading
        ? <LoadingContainer />
        : error
          ? <ErrorBoundary error={error} />
          : <Component data={data} />
    }
  </Container>;

export default AppWrapper;
