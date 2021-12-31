import React from "react";
import { LightSpeed } from "@stahl.luke/react-reveal";
import "./Experiences.css";
import experienceItems from "../../json/experienceItems.json";
import ExperienceCard from "../../parts/ExperienceCard/ExperienceCard";

const Experiences = () => {
  return (
    <div className="experiences" id="experiences">
      <div className="container">
        <LightSpeed left>
          <h1 className="section-heading">
            I Can Create App Using A Lot of Technologies
          </h1>
        </LightSpeed>
        <div className="row align-items-center justify-content-center m-auto">
          <ExperienceCard data={experienceItems} />
        </div>
      </div>
    </div>
  );
};

export default Experiences;
