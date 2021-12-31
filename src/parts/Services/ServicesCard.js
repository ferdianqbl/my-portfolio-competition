import React from "react";
import "./ServicesCard.css";
import { Icon } from "@iconify/react";
import { JackInTheBox } from "react-awesome-reveal";

const ServicesCard = ({ title, text, loc, count }) => {
  return (
    <JackInTheBox cascade triggerOnce delay={250 * count}>
      <div className="services-card row justify-content-center align-items-center">
        <div className="col-3 p-0">
          <div className="services-card-img-wrapper">
            <img src={loc} alt="card-img" className="img-fluid" />
          </div>
        </div>

        <div className="col-9 p-0">
          <div className="row justify-content-center align-items-center">
            <div className="col-6 p-0 m-0">
              <div className="text-body-contain">
                <p className="services-card-title p-0 m-0">{title}</p>
                <p className="services-card-text p-0 m-0">{text}</p>
              </div>
            </div>

            <div className="col-3 p-0 m-0">
              <Icon icon="bx:bxs-right-arrow" />
            </div>
          </div>
        </div>
      </div>
    </JackInTheBox>
  );
};

export default ServicesCard;
