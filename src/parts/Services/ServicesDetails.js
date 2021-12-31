import React from "react";
import "./ServicesDetails.css";
import { JackInTheBox } from "react-awesome-reveal";

const ServicesDetails = (props) => {
  const { title, text, loc, count } = props;

  return (
    <JackInTheBox cascade triggerOnce delay={250 * count}>
      <div className="services-details">
        <div className="row align-items-start justify-content-center">
          <div className="col-1 me-4">
            <img src={loc} alt="services icon" />
          </div>
          <div className="col-10">
            <div className="services-details-body">
              <p className="services-details-title p-0 m-0">{title}</p>
              <p className="services-details-text p-0 m-0">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </JackInTheBox>
  );
};

export default ServicesDetails;
