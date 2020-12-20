import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchShowInfo } from "../../data/actions";
import { POWER_PUFF_GIRLS_ID } from "../../data/constants";

import { AppWrapper, ShowView } from "../../components";

const Show = ({ fetchShowInfo, showInfo }) => {
  useEffect(() => {
    fetchShowInfo(POWER_PUFF_GIRLS_ID);
  }, [fetchShowInfo]);

  return <AppWrapper component={ShowView} {...showInfo} />;
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
