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
              <h4>I'm a Fullstack Developer student</h4>
              <p>
                I discovered the fun in designing and developing cool things.
              </p>
              <p>Big goal: contribute to the great projects out there.</p>
              <a
                href={require("../assets/resume/WhiteNguyenResume.pdf")}
                className="btn btn-default btn-lg rounded-0"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
              <a
                href="https://linkedin.com/in/whitenguyen"
                className="btn btn-default btn-lg rounded-0"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/WhiteN9"
                className="btn btn-default btn-lg rounded-0"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a href="http://google.com/" target="blank">
                Google
              </a>
              <a href="http://en.wikipedia.org/" target="blank">
                Wikipedia
              </a>

              <a href="http://google.com/" target="_blank">
                Google
              </a>
              <a href="http://en.wikipedia.org/" target="_blank">
                Wikipedia
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
