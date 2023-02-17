import React from "react";
import "./TopClientCards.scss";

function TopClientCards(props) {
  console.log(props, "asdf");
  return (
    <div>
      <div className="Tcs">
        <div className="TcsVal">{props.value}</div>
      </div>
    </div>
  );
}

export default TopClientCards;
