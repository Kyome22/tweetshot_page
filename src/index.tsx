import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import queryString from "query-string";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route
        render={(props) => (
          <App qs={queryString.parse(props.location.search)} />
        )}
      />
    </Router>
  </React.StrictMode>,
  document.getElementById("app")
);
