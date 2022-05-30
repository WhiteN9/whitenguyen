import React from "react";
import { Link } from "react-scroll";

//a flexible bar if mobile?

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <Link to="#">W.N </Link>
          <ul>
            <li>
              <Link to="#">Home </Link>
            </li>
            <li>
              <Link to="about">About </Link>
            </li>
            <li>
              <Link to="portfolio">Portfolio </Link>
            </li>
            <li>
              <Link to="experience">Experience </Link>
            </li>
            <li>
              <Link to="contact">Contact </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
