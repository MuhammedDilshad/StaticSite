import React from "react";
import AwardCards from "../AwardCards/AwardCards";
import "./Awards.scss";
import { Awds } from "../../Assist/Assist";

function Awards() {
  return (
    <div className="Award">
      <div className="AwdTitle">
        <div>AWARDS</div>
        <div>CERTIFICATIONS</div>
      </div>
      <div className="LastBx">
        {Awds.map((value) => (
          <AwardCards value={value} />
        ))}
      </div>
    </div>
  );
}

export default Awards;
