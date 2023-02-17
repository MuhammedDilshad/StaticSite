import React from "react";
import BusinessCard from "../BusinessCard/BusinessCard";
import { BusinessDetails } from "../../Assist/Assist";
import "./Business.scss";

function Business() {
  return (
    <div>
      <div>
        <div className="Title">BUSINESS OFFERINGS</div>
        <div className="BCard">
          {BusinessDetails.map((value) => (
            <BusinessCard value={value} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Business;
