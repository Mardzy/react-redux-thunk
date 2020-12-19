import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchShowInfo } from "../../data/actions";
import { POWER_PUFF_GIRLS_ID } from "../../data/constants";

import { Container } from "../../components";

const Show = ({ fetchShowInfo, showInfo }) => {
  const { data } = showInfo;

  useEffect(() => {
    fetchShowInfo(POWER_PUFF_GIRLS_ID);
  }, [fetchShowInfo]);
  console.log("showInfo: ", data, Container);
  return <Container children="I'm a show" {...showInfo} />
}

const mapStateToProps = ({ showInfo }) =>
  ({ showInfo });

const mapDispatchToProps = dispatch => {
  return {
    fetchShowInfo: showId => dispatch(fetchShowInfo(showId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Show);
