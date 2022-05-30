import React from "react";

import Header from "./Header";
import Home from "../Home/Home";
import About from "../Others/About";
import Portfolio from "../Others/Portfolio";
import Experience from "../Others/Experience";
import Contact from "../Others/Contact";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </React.Fragment>
  );
}

export default Layout;
