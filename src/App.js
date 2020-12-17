import { connect } from "react-redux";
import './App.css';

import { fetchEpisodes } from "./data/episodes";
import { fetchShowInfo } from "./data/showInfo";

function App({dispatch, show}) {
  const data = fetchShowInfo("/6112");
  console.log("data: ", data);
  return (
    <div className="App">
      Hello world
    </div>
  );
}

const mapStateToProps = ({ show }) => ({ show });

const mapDispatchToProps = { fetchEpisodes, fetchShowInfo };

export default connect(mapStateToProps, mapDispatchToProps)(App);
