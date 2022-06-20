import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <section id="home_section" className="mb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="text-center">
                <h2>I'm White Nguyen</h2>
                <div>
                  <b>Software Developer</b>
                </div>
                <h4>I'm a student</h4>
                <p>
                  I discovered the fun in designing and developing cool things.
                </p>
                <p>
                  Side goal: actually contributing to the great projects out
                  there.
                </p>
                <a href="#" className="btn btn-default rounded-0">
                  Download Resume
                </a>
                <a href="#" className="btn btn-outline-white rounded-0">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
