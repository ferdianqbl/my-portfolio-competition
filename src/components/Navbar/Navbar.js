import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
import "./Navbar.css";
// import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const toggleHandler = () => {
    document
      .querySelector(".navbar-toggler--nav")
      .classList.toggle("toggler-active");
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      id="my-navbar"
    >
      <div className="container">
        <Link
          className="nav-link js-scroll-trigger navbar-brand pb-0"
          to="hero"
          spy={true}
          smooth={true}
          duration={100}
          offset={-50}
        >
          <img
            src="images/logo.png"
            className=" align-top logo-img img-fluid"
            alt=""
            loading="lazy"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleHandler}
        >
          <div className="navbar-toggler--nav">
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </div>
        </button>
        <div
          className="collapse navbar-collapse align-items-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-center align-items-center">
            <li className="nav-item">
              <Link
                activeClass="active"
                className="nav-link js-scroll-trigger"
                to="hero"
                spy={true}
                smooth={true}
                duration={100}
                offset={-50}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                className="nav-link js-scroll-trigger"
                to="services"
                spy={true}
                smooth={true}
                duration={100}
                offset={-50}
              >
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                className="nav-link js-scroll-trigger"
                to="portfolios"
                spy={true}
                smooth={true}
                duration={100}
                offset={-50}
              >
                Portfolios
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                className="nav-link js-scroll-trigger"
                to="experiences"
                spy={true}
                smooth={true}
                duration={100}
                offset={-50}
              >
                Experiences
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
