import React from "react";
import TopClientCards from "../TopClientCards/TopClientCards";
import "./TopClients.scss";
import { TClient } from "../../Assist/Assist";

function TopClients() {
  return (
    <div>
      <div className="TopHead">TOP 12 CLIENTS</div>
      <div className="TopCmp">
        {TClient.map((value) => (
          <TopClientCards value={value} />
        ))}
      </div>
    </div>
  );
}

export default TopClients;
