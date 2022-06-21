import React from "react";
// let banner_img2 = require("../assets/images/banner_img2.jpg"); same as below
import banner_img2 from "../assets/images/banner_img3-scaled-down.jpg";

let homeStyle = {
  backgroundSize: "auto",
  backgroundImage: `url(${banner_img2})`,
  height: "100vh",
  color: "white",
};

const Home = () => {
  return (
    <section id="home_section" className="mb-5" style={homeStyle}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="text-center banner_content">
              <h2>I'm White Nguyen</h2>
              <h4>I'm a Software Developer student</h4>
              <p>
                I discovered the fun in designing and developing cool things.
              </p>
              <p>
                Side goal: actually contributing to the great projects out
                there.
              </p>
              <a href="#" className="btn btn-default btn-lg rounded-0">
                Resume
              </a>
              <a
                href="https://linkedin.com/in/whitenguyen"
                className="btn btn-default btn-lg rounded-0"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/WhiteN9"
                className="btn btn-default btn-lg rounded-0"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
