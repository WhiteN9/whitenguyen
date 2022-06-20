import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="pb_70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-9 text-center">
            <div className="">
              <h2>My Portfolio</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-0 gy-4">
        <div className="col px-5">
          <div className="card">
            <img
              src="https://user-images.githubusercontent.com/39269842/174505823-5f854dca-b098-4cc7-98ef-312e4d80174d.png"
              className="card-img-top"
              alt="we-love-movies-database-app"
            />
            <div className="card-body">
              <h5 className="card-title">We Love Movies</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col px-5">
          <div className="card">
            <img
              src="https://user-images.githubusercontent.com/39269842/174505807-f25e4e27-4798-4617-9307-dbf2f9498fe6.png"
              className="card-img-top"
              alt="flash-card-app"
            />
            <div className="card-body">
              <h5 className="card-title">Flash Card as Study Tool</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col px-5">
          <div className="card">
            <img
              src="https://user-images.githubusercontent.com/39269842/174505811-8da86e16-2e61-4bce-9b76-40679a2f05a2.png"
              className="card-img-top"
              alt="local-library-app"
            />
            <div className="card-body">
              <h5 className="card-title">Local Library Administration</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col px-5">
          <div className="card">
            <img
              src="https://user-images.githubusercontent.com/39269842/174505801-696740bc-d90d-47d6-aafe-a8490564709d.png"
              className="card-img-top"
              alt="decoder-ring-app"
            />
            <div className="card-body">
              <h5 className="card-title">Decoder Ring</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col px-5">
          <div className="card">
            <img
              src="https://user-images.githubusercontent.com/39269842/174505832-beb97b1c-873f-48e2-85b7-d8f9a0941c1f.png"
              className="card-img-top"
              alt="thinkfulbnb"
            />
            <div className="card-body">
              <h5 className="card-title">ThinkfulBnB Landing Page</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
