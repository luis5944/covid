import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";
import App from "../App";
import { Info } from "../components/Info/Info";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/info" component={Info} />
          <Redirect push to="/"/>
        </Switch>
      </div>
    </Router>
  );
};
