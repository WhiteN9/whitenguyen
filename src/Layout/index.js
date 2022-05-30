import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "../Home/Home";
import NotFound from "./NotFound";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default Layout;
