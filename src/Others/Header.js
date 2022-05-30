import React from "react";
// import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="header_wrap fixed-top light_skin hover_menu_style2 transparent-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand page-scroll" href="#home_section">
            <img
              className="logo_light"
              src="assets/images/logo_white.png"
              alt="logo"
            />
            <img
              className="logo_dark"
              src="assets/images/logo_dark.png"
              alt="logo"
            />
            <img
              className="logo_default"
              src="assets/images/logo_dark.png"
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {" "}
            <span className="ion-android-menu"></span>{" "}
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <a className="navbar-brand page-scroll" href="#home_section">
              <img
                className="logo_light"
                src="assets/images/logo_white.png"
                alt="logo"
              />
              <img
                className="logo_dark"
                src="assets/images/logo_dark.png"
                alt="logo"
              />
              <img
                className="logo_default"
                src="assets/images/logo_dark.png"
                alt="logo"
              />
            </a>
            <ul className="navbar-nav">
              <li>
                <a className="nav-link active page-scroll" href="#home_section">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="#experience">
                  Experience
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="#blog">
                  blog
                </a>
              </li>
              <li>
                <a className="nav-link page-scroll" href="#contact">
                  contact
                </a>
              </li>
              <li className="dropdown">
                <a
                  className="dropdown-toggle nav-link"
                  href="asdsa"
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu dropdown-reverse">
                  <ul>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="portfolio-detail-dark.html"
                      >
                        portfolio detail dark
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="portfolio-detail-sidemenu-dark.html"
                      >
                        portfolio detail sidemenu dark
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="portfolio-detail-sidemenu-white.html"
                      >
                        portfolio detail sidemenu white
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="portfolio-detail-white.html"
                      >
                        portfolio detail white
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="blog-detail-dark.html"
                      >
                        blog detail dark
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="blog-detail-sidemenu-dark.html"
                      >
                        blog detail sidemenu dark
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="blog-detail-sidemenu-white.html"
                      >
                        blog detail sidemenu white
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="blog-detail-white.html"
                      >
                        blog detail white
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;

