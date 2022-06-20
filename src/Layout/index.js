import React from "react";

import Header from "../Others/Header";
import Home from "../Others/Home";
import About from "../Others/About";
import Portfolio from "../Others/Portfolio";
import Experience from "../Others/Experience";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Experience />
    </React.Fragment>
  );
}

export default Layout;
