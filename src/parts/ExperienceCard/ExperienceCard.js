import React from "react";
import { Bounce } from "react-awesome-reveal";
import "./ExperienceCard.css";

const ExperienceCard = ({ data }) => {
  return data.map((item, index) => {
    return (
      <div className="col-lg-3 col-md-4 col-6" key={`experience-card-${index}`}>
        <Bounce triggerOnce delay={250 * index} cascade>
          <div className="experience-card">
            <div className="row justify-content-center align-items-center m-auto">
              <div className="col-sm-4 col-4">
                <img src={item.imgUrl} alt={item.title} className="img-fluid" />
              </div>

              <div className="col-sm-6 col-8">
                <p className="experience-card-title p-0 m-0">{item.title}</p>
                <p className="experience-card-desc p-0 m-0">{item.desc}</p>
              </div>
            </div>
          </div>
        </Bounce>
      </div>
    );
  });
};

export default ExperienceCard;
