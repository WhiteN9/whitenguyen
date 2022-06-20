import React from "react";

const About = () => {
  return (
    <section id="about" className="mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="">
              <img
                src="assets/images/about_img3.jpg"
                className="img-fluid"
                alt="about_img3"
              />
              <div className=""></div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="">
              <div className="mb-3">
                <h2>About Me</h2>
              </div>
              <p>
                I enjoy challenges and enjoy learning more about the technology
                world. I graduated with a B.S in Biochemistry from Metropolitan
                State University of Denver. After I joined the research
                laboratory field, I've found a great interest in the software
                that was developed for us to use. I decided to study further to
                be able to develop useful and better tools for the research and
                healthcare field.
              </p>
              <p>
                My experience from Thinkful revolves around developing
                applications using JavaScript and PERN. Currently I am looking
                for new opportunites to broaden my developer skill-set.
              </p>
              <hr />
              <div className="mb-4">
                <h5>Basic Info</h5>
              </div>
              <ul className="">
                <li>
                  <span className="title">From</span>
                  <p>Denver, CO</p>
                </li>
                <li>
                  <span className="title">Phone No:</span>
                  <p>+ (303) 552-2605</p>
                </li>
                <li>
                  <span className="title">Email:</span>
                  <a href="mailto:info@sitename.com">
                    whitenguyen0909@gmail.com
                  </a>
                </li>
                <li>
                  <span className="title">Website:</span>
                  <p> www.mywebsite.com </p>
                </li>
                <li>
                  <span className="title">Status:</span>
                  <p>Available to Work</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
