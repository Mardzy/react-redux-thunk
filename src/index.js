import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux";

import store from "./data/store";

import Main from "./main";
import reportWebVitals from "./reportWebVitals";

import 'fontsource-roboto';
import "./styles/main.scss";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Main />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
