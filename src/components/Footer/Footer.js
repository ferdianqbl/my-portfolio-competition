import React from "react";
import "./Footer.css";
import { Icon } from "@iconify/react";
import { Zoom } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="row justify-content-center align-items-center text-center footer-links">
          <div className="col-lg-1 col-md-2 col-sm-4 p-0 m-0">
            <span className="footer-link text-center d-inline-block">Docs</span>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-4 p-0 m-0">
            <span className="footer-link text-center d-inline-block">
              Notes
            </span>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-4 p-0 m-0">
            <span className="footer-link text-center d-inline-block">
              Blogs
            </span>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-4 p-0 m-0">
            <span className="footer-link text-center d-inline-block">
              Analytics
            </span>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-4 p-0 m-0">
            <span className="footer-link text-center d-inline-block">
              Statistics
            </span>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-4 p-0 m-0">
            <span className="footer-link text-center d-inline-block">
              Guestbook
            </span>
          </div>
          <div className="col-lg-1 col-md-2 col-sm-4 p-0 m-0">
            <span className="footer-link text-center d-inline-block">
              Subcribe
            </span>
          </div>
        </div>

        <div className="row justify-content-center align-items-center text-center">
          <p className="social-title pb-0">Reach Me Out</p>
          <div className="col-sm-1 col p-0 m-0">
            <Zoom cascade triggerOnce delay={200 * 0}>
              <a
                href="https://www.instagram.com/ferdianqbl/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="akar-icons:instagram-fill" />
              </a>
            </Zoom>
          </div>
          <div className="col-sm-1 col p-0 m-0">
            <Zoom cascade triggerOnce delay={200 * 1}>
              <a
                href="https://github.com/ferdianqbl"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="akar-icons:github-fill" />
              </a>
            </Zoom>
          </div>
          <div className="col-sm-1 col p-0 m-0">
            <Zoom cascade triggerOnce delay={200 * 2}>
              <a
                href="https://www.linkedin.com/in/muhammad-ferdian-iqbal-21b2371b8/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="ant-design:linkedin-outlined" />
              </a>
            </Zoom>
          </div>
          <div className="col-sm-1 col p-0 m-0">
            <Zoom cascade triggerOnce delay={200 * 3}>
              <a
                href="https://twitter.com/ferdianqbl"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="akar-icons:twitter-fill" />
              </a>
            </Zoom>
          </div>
          <div className="col-sm-1 col p-0 m-0">
            <Zoom cascade triggerOnce delay={200 * 4}>
              <a
                href="mailto:muhammadferdianiqbal@gmail.com"
                className="social-link"
              >
                <Icon icon="fluent:mail-48-filled" />
              </a>
            </Zoom>
          </div>
        </div>

        <div className="row text-center">
          <p className="footer-tag mb-0">© Muhammad Ferdian Iqbal 2021</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
