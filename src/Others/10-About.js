import React from "react";

const About = () => {
  return (
    <section id="about" className="mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="">
              <img
                src={require("../assets/images/about_img_self_picture.jpg")}
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
                world. After I joined the research laboratory field, I found a
                great interest in the applications developers have built for us
                to use. I decided to study further to develop useful and better
                tools for the research and healthcare field.
              </p>
              <p>
                I've learned great techniques and knowledge from Thinkful
                involved in developing applications using JavaScript and PERN.
                Now I am looking for new opportunities to broaden my skill-set.
              </p>
              <hr />
              <div className="mb-4">
                <h5>Basic Info</h5>
              </div>
              <dl className="row">
                <dt className="col-sm-3">From: </dt>
                <dd className="col-sm-9">Denver, CO</dd>

                <dt className="col-sm-3">Phone No: </dt>
                <dd className="col-sm-9">+(303) 552-2605</dd>

                <dt className="col-sm-3">Email: </dt>
                <dd className="col-sm-9">
                  <a href="mailto:whitenguyen0909@gmail.com">
                    whitenguyen0909@gmail.com
                  </a>
                </dd>
                <dt className="col-sm-3 text-truncate">Website: </dt>
                <dd className="col-sm-9">
                  <a href="https://whiten9.github.io/whitenguyen/">whiten9.github.io/whitenguyen</a>
                </dd>
                <dt className="col-sm-3">Status: </dt>
                <dd className="col-sm-9">Available to Work</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
