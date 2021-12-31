import React from "react";
import "./Hero.css";
import { Zoom } from "react-awesome-reveal";
// import imgHero from "../../assets/images/hero-img.png";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <Zoom triggerOnce cascade delay={250 * 1}>
              <h1 className="hero-heading">
                Hi, There!
                <br />
                <span className="hero-heading-main">
                  I'm Ferdian Iqbal,
                  <br />
                  <span className="hero-heading-main-colorful">
                    Full-Stack <br /> Web Developer
                  </span>
                </span>
              </h1>
            </Zoom>
            <Zoom cascade triggerOnce delay={250 * 1.5}>
              <p className="hero-text">
                Technology is my interest since childhood. I have learned a lot
                about programming, from websites, mobile apps, and data
                sciences. I have more than seven years of experience in the
                technology and programming.
              </p>
            </Zoom>
            <Zoom cascade triggerOnce delay={250 * 2}>
              <a
                href="mailto:muhammadferdianiqbal@gmail.com"
                className="my-btn-primary"
              >
                Hire Me Now
              </a>
            </Zoom>
          </div>

          <div className="col-md-7">
            <Zoom triggerOnce delay={250 * 0}>
              <img
                src="images/hero-img.png"
                alt="hero img"
                className="img-fluid p-0"
              />
            </Zoom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
