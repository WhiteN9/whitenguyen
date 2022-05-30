import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import Home from "../Home/Home";
import NotFound from "./NotFound";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default Layout;
