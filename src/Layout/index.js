import React from "react";
import { Route } from "react-router-dom";

import Header from "./Header";
import Home from "../Home/Home";
import About from "./Header";
import Portfolio from "./Header";
import Experience from "./Header";
import Contact from "./Header";
import NotFound from "./NotFound";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/">
        <About />
      </Route>
      <Route path="/">
        <Portfolio />
      </Route>
      <Route path="/">
        <Experience />
      </Route>
      <Route path="/">
        <Contact />
      </Route>
      <Route>
        <Contact />
      </Route>
      <NotFound />
    </React.Fragment>
  );
}

export default Layout;
