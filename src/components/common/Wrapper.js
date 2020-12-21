import _ from "lodash"
import React from "react";
import { Container } from "@material-ui/core";

import { ErrorBoundary, Loading } from "../../components";

/**
 * @param {JSX.Element} Component
 * @param {[]|{}} data
 * @param {string} error
 * @param {boolean} loading
 * @param {function} onClick
 * @return {JSX.Element}
 * @constructor
 */
const Wrapper = ({ component: Component, data, error, loading, onClick = () => {}}) =>
  <Container className="appWrapper" display="flex">
    {
      loading
        ? <Loading />
        : error
          ? <ErrorBoundary error={error} />
          : _.isEmpty(data) || <Component data={data} onClick={onClick} />
    }
  </Container>;

export default Wrapper;
