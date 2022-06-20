import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Experience</h2>
            <hr></hr>
          </div>
        </div>
      </div>
      {/* Thinkful - Coding Bootcamp */}
      <div className="row g-0 m-4 experience-row">
        <div className="col-md-3">
          <a href="#">
            <img
              className="img-fluid"
              src="https://images.ctfassets.net/344fh7n2hs9h/4QnjDGHAGIIXaCylyM0wMQ/0c4f5a969b7065cd3db431de893be958/logo.svg"
              alt=""
            ></img>
          </a>
        </div>
        <div className="col-md-7">
          <a href="#">
            <h3>Thinkful</h3>
          </a>
          <h5>Software Engineer Student | March 2022 - August 2022</h5>
          <p>
            Learned industry best practices and software development standards
            with a focus on JavaScript, HTML5, CSS3, Node.js, and React.
            Also backend developing and unit testings subjects. 
          </p>
        </div>
      </div>
      {/* Eurofins USA - Donor & Product Testing - Pre Transplant Testing*/}
      <div className="row g-0 m-4 experience-row">
        <div className="col-md-3">
          <a href="https://www.thinkful.com/">
            <img
              className="img-fluid"
              src="https://cdnmedia.eurofins.com/eurofins-us/media/1706848/eurofinsdonor-product-testing.jpg"
              alt=""
            ></img>
          </a>
        </div>
        <div className="col-md-7">
          <a href="https://www.eurofinsus.com/clinical-diagnostics/eurofins-donor-product-testing/">
            <h3>Eurofins DPT - Pre-transplant Testing</h3>
          </a>
          <h5>Immunogenetics Technologist 2 | October 2018 - May 2022</h5>
          <p>
            Learned and applied excel VBA to handle data of assays which reduced
            the required manual steps of creating and formatting said data for
            the next downstream processes. Analyzed ambiguous and/or rare
            results through critical thinking. Handled STAT On-Call for Deceased
            Donors in a professional manner.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
