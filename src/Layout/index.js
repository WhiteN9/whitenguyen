import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "../Home/Home";
import About from "../Others/About";
import Portfolio from "../Others/Portfolio";
import Experience from "../Others/Experience";
import Contact from "../Others/Contact";
import NotFound from "./NotFound";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/experience">
          <Experience />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default Layout;
