import React from "react";
import "./Portfolios.css";

import PortfolioItems from "../../json/portfolioItems.json";
import PortfolioCard from "../../parts/PortfolioCard/PortfolioCard";
import { LightSpeed } from "@stahl.luke/react-reveal";

const Portfolios = () => {
  return (
    <div className="portfolios" id="portfolios">
      <div className="container">
        <LightSpeed left>
          <h1 className="section-heading">Projects</h1>
        </LightSpeed>
        <div className="row align-items-center">
          <PortfolioCard data={PortfolioItems} />
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
