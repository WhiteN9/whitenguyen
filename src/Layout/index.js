import React from "react";

import Header from "../Others/01-Header";
import Home from "../Others/05-Home";
import About from "../Others/10-About";
import Portfolio from "../Others/15-Portfolio";
import Experience from "../Others/20-Experience";

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

// import React from "react";
// // let banner_img2 = require("../assets/images/banner_img2.jpg"); same as below
// import banner_img2 from "../assets/images/banner_img3.jpg"

// let homeStyle = {
//   width: 'auto',
//   backgroundImage: `url(${banner_img2})`,
// };

// const Home = () => {
//   return (
//     <section
//       id="home_section"
//       className="mb-5"
//       // style={homeStyle}
//     ></section>