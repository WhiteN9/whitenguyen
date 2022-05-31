import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="">
              <img src="assets/images/about_img3.jpg" alt="about_img3" />
              <div className="border_shape2"></div>
            </div>
          </div>
          <div className="col-md">
            <div className="">
              <div className="mb-3">
                <h2>About Me</h2>
              </div>
              <p>
                Just a person who discovered the fun in designing and developing
                cool things.
              </p>
              <p>
                Side goal: actually contributing to the great projects out
                there.
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
                  <span className="title">Address:</span>
                  <p> 123 Street, Old Trafford, London </p>
                </li>
                <li>
                  <span className="title">Website:</span>
                  <p> www.mywebsite.com </p>
                </li>
                <li>
                  <span className="title">Freelance:</span>
                  <p>Available</p>
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
