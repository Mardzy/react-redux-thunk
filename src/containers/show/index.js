import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchShowInfo } from "../../data/actions";
import { POWER_PUFF_GIRLS_ID } from "../../data/constants";

const Show = ({ fetchShowInfo, showInfo }) => {
  const { data, error, loading } = showInfo;

  useEffect(() => {
    fetchShowInfo(POWER_PUFF_GIRLS_ID);
  }, [fetchShowInfo]);
  // console.log("showInfo: ", showInfo);
  return loading
    ? <div>Loading...</div>
    : error
      ? <div>{error}</div>
      : <div>{data.name}</div>;
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
