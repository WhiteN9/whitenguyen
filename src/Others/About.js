import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div class="row">
          <div class="col-md-5">
            <div
              class="about_img3 animation"
              data-animation="fadeInUp"
              data-animation-delay="0.02s"
            >
              <img src="assets/images/about_img3.jpg" alt="about_img3" />
              <div class="border_shape2"></div>
            </div>
          </div>
          <div class="col-md-7">
            <div
              class="about_info animation"
              data-animation="fadeInUp"
              data-animation-delay="0.02s"
            >
              <div class="heading_s1 mb-3">
                <h2>About Me</h2>
              </div>
              <p>
                Just a person who discovered the fun in designing and developing
                cool things.
              </p>
              <p>
                Side goal: actually contributing to the great projects out there.
              </p>
              <hr />
              <div class="heading_s1 mb-4">
                <h5>Basic Info</h5>
              </div>
              <ul class="profile_info_style2 list_none">
                <li>
                  <span class="title">From</span>
                  <p>Denver, CO</p>
                </li>
                <li>
                  <span class="title">Phone No:</span>
                  <p>+ (303) 552-2605</p>
                </li>
                <li>
                  <span class="title">Email:</span>
                  <a href="mailto:info@sitename.com">whitenguyen0909@gmail.com</a>
                </li>
                <li>
                  <span class="title">Address:</span>
                  <p> 123 Street, Old Trafford, London </p>
                </li>
                <li>
                  <span class="title">Website:</span>
                  <p> www.mywebsite.com </p>
                </li>
                <li>
                  <span class="title">Freelance:</span>
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
