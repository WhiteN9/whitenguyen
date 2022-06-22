import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="mb-5">
      <div className="container">
        <div className="row justify-content-center mb-3">
          <div className="col-xl-6 col-lg-7 col-md-9 text-center">
            <div className="">
              <h2>My Portfolio</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-0 gy-4">
        <div className="col col-lg-3 px-3 d-flex align-items-stretch">
          <div className="card">
            <img
              src="https://user-images.githubusercontent.com/39269842/174650793-6f1e0ea5-67cb-455b-b0a6-a7a31746b766.png"
              className="card-img-top"
              alt="we-love-movies-database-app"
            />
            <div className="card-body">
              <h5 className="card-title">We Love Movies</h5>
              <p className="card-text">
                The backend of a movie website allowing any user to search for
                their favorite movies. <br></br>
                <b>Technology</b>: Node.js, Express, Knex, PostgreSQL and
                Heroku. Git/GitHub.
              </p>
              <small>
                <a href="https://github.com/WhiteN9/we-love-movie-backend">
                  GitHub repo
                </a>
              </small>
            </div>
          </div>
        </div>
        <div className="col col-lg-3 px-3 d-flex align-items-stretch">
          <div className="card">
            <img
              src="https://user-images.githubusercontent.com/39269842/174650792-d41d510a-ebfd-4eb5-826e-b93a35eb7135.png"
              className="card-img-top"
              alt="flash-card-app"
            />
            <div className="card-body">
              <h5 className="card-title">Flash Card as Study Tool</h5>
              <p className="card-text">
                The application allows users to create, update, and delete decks
                and cards of the deck. <br></br>
                <b>Technology</b>: React, JavaScript, HTML and CSS using
                bootstrap. Git/GitHub.
              </p>
              <small>
                <a href="https://github.com/WhiteN9/flashcard-app-react-project">
                  GitHub repo
                </a>
              </small>
            </div>
          </div>
        </div>
        <div className="col col-lg-3 px-3 d-flex align-items-stretch">
          <div className="card">
            <img
              src="https://user-images.githubusercontent.com/39269842/174650790-9367224e-dc3e-4fa4-a328-f3703ee15d31.png"
              className="card-img-top"
              alt="decoder-ring-app"
            />
            <div className="card-body">
              <h5 className="card-title">Decoder Ring</h5>
              <p className="card-text">
                An encode/decode application capable of parsing and translating
                secret messages. <br></br>
                <b>Technology</b>: JavaScript ES6, Node.js, Mocha and Chai.
                Git/GitHub.
              </p>
              <small>
                <a href="https://github.com/WhiteN9/decoder-ring">
                  GitHub repo
                </a>
              </small>
            </div>
          </div>
        </div>{" "}
        <div className="col col-lg-3 px-3 d-flex align-items-stretch">
          <div className="card">
            <img
              src="https://user-images.githubusercontent.com/39269842/174650791-d4bd0999-6e71-47d8-ba49-8df57f90fc72.png"
              className="card-img-top"
              alt="local-library-app"
            />
            <div className="card-body">
              <h5 className="card-title">Local Library Admin Page</h5>
              <p className="card-text">
                A dashboard that shows which books are available, which are
                currently out, and other general statistics.
                <br></br>
                <b>Technology</b>: JavaScript ES6, Node.js. Git/GitHub.
              </p>
              <small>
                <a href="https://github.com/WhiteN9/Local-Library-TF">
                  GitHub repo
                </a>
              </small>
            </div>
          </div>
        </div>
        <div className="col col-lg-3 px-3 d-flex align-items-stretch">
          <div className="card">
            <img
              src="https://user-images.githubusercontent.com/39269842/174650799-8b4f313b-4f8a-43a0-92ac-8e6a8f8732d5.png"
              className="card-img-top"
              alt="thinkfulbnb"
            />
            <div className="card-body">
              <h5 className="card-title">ThinkfulBnB Landing Page</h5>
              <p className="card-text">
                Landing page of Thinkfulbnb, a website that allows people to
                rent out their homes to people who are seeking short-term
                accommodations in that locale. <br></br>
                <b>Technology</b>: HTML5, CSS3. Git/GitHub.
              </p>
              <small>
                <a href="https://github.com/WhiteN9/thinkful-airbnb">
                  GitHub repo
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
