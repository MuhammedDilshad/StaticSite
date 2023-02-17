import React from "react";
import Projectss from "../Projectss/Projectss";
import "./HallFame.scss";
import { Project } from "../../Assist/Assist";

function HallFame() {
  return (
    <div>
      <div className="HallTitle">HALL OF FAME</div>
      <div className="HallFrame">
        {Project.map((value) => (
          <Projectss value={value} />
        ))}
      </div>
      <div className="Dots">
        <img src="/images/Ellipse 1382.png" alt="" />
        <img src="/images/Ellipse 1386.png" alt="" />
        <img src="/images/Ellipse 1386.png" alt="" />
        <img src="/images/Ellipse 1386.png" alt="" />
        <img src="/images/Ellipse 1386.png" alt="" />
      </div>
    </div>
  );
}

export default HallFame;
