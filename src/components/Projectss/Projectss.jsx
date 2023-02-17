import React from "react";
import "./Projectss.scss";

function Projectss(props) {
  return (
    <div>
      <div className="ProjectCard">
        <img src={props.value.ImagSrc} alt="" />
        <div className="ProName">{props.value.Ttle}</div>
        <div className="ClName">{props.value.ClientName}</div>
        <div className="LocAd">
          <img className="PuneLocation" src={props.value.PuneLocation} alt="" />
          <div className="Lc">{props.value.Lc}</div>
        </div>
        <div className="Cnts">{props.value.Contends}</div>
      </div>
    </div>
  );
}

export default Projectss;
