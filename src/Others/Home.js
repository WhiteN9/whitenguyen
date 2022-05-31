import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <section id="home_section" className="">
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
                  I enjoy challenges and enjoy learning more about the
                  technology world.
                </p>
                <a href="#" className="btn btn-default rounded-0 animation">
                  Download CV
                </a>
                <a href="#" className="btn btn-outline-white rounded-0 animation">
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
