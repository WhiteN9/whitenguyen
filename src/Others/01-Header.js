import React from "react";
// import { Link } from "react-scroll";

let headerStyle = {
  backgroundColor: "#010101",
};

const Header = () => {
  return (
    <header className="">
      <div className="container">
        <nav
          id="scroll-list"
          className="navbar navbar-dark fixed-top navbar-expand-lg"
          style={headerStyle}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#home_section">
              <img
                class="logo_default"
                src={require("../assets/images/logo_light.png")}
                alt="logo"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="#home_section"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#experience">
                    Experience
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
