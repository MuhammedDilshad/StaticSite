import React from "react";
import "./Projectss.scss";

function Projectss(props) {
  return (
    <div>
      <div className="ProjectCard">
        <div className="PcImg">
          <img src={props.value.ImagSrc} alt="" />
        </div>
        <div className="PcDetails">
          <div className="a">
            <div className="ProName">{props.value.Ttle}</div>
            <div className="ClName">{props.value.ClientName}</div>
            <div className="LocAd">
              <img
                className="PuneLocation"
                src={props.value.PuneLocation}
                alt=""
              />
              <div className="Lc">{props.value.Lc}</div>
            </div>
            <div className="b">
              <div className="Cnts">{props.value.Contends}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projectss;
