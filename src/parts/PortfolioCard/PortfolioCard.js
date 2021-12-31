import React from "react";
import "./PortfolioCard.css";
import { Icon } from "@iconify/react";
import { Zoom } from "react-awesome-reveal";

const PortfolioCard = ({ data }) => {
  // console.log(data);
  return data.map((item, index) => {
    return (
      <div className="col-md-6" key={`portfolio-card-${index}`}>
        <Zoom cascade triggerOnce delay={150 * index}>
          <div className="portfolio-card">
            <h4 className="portfolio-card-title">{item.title}</h4>
            <p className="portfolio-card-desc">{item.desc}</p>
            <img
              src={item.imgUrl}
              alt={item.title}
              className="portfolio-card-img img-fluid d-block"
            />

            <a
              href={item.href}
              className="portfolio-card-link"
              target="_blank"
              rel="noreferrer"
            >
              More{" "}
              <Icon
                icon="fa-solid:location-arrow"
                className="portfolio-card-link-icon"
              />
            </a>
          </div>
        </Zoom>
      </div>
    );
  });
};

export default PortfolioCard;
