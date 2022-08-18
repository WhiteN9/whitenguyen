import React from "react";

import Header from "../Others/01-Header";
import Home from "../Others/05-Home";
import About from "../Others/10-About";
import Portfolio from "../Others/15-Portfolio";
import Experience from "../Others/20-Experience";
import Footer from "../Others/30-Footer";

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Footer />
    </React.Fragment>
  );
}

export default Layout;