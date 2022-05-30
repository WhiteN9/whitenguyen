import React from "react";
import About from "../Others/About";
import Skills from "../Others/Skills";
import Portfolio from "../Others/Portfolio";
import Experience from "../Others/Experience";
import Contact from "../Others/Contact";

const Home = () => {
  return (
    <React.Fragment>
      <section id="home">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2>I'm White Nguyen</h2>
            </div>
            <h4>I'm a...</h4>
            <p>Text</p>
            {/* <a>Download Resume</a>
            <a>Get In Touch</a> */}
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
