import React from "react";
import "./AwardCards.scss";

function AwardCards(props) {
  return (
    <div className="AwdCrd">
      <div className="Ad">
        <img src={props.value.Awd} alt="" />
      </div>
      <div className="AwdName">{props.value.AwdName}</div>
      <div className="DataWay">
        <div className="Fic">
          <img className="TIc" src={props.value.Ic} alt="" />
          <div>{props.value.Symb}</div>
        </div>
        <div className="Fico">
          <img className="One" src={props.value.BlueI} alt="" />
          <img className="One" src={props.value.WhitI} alt="" />
          <img className="One" src={props.value.WhitI} alt="" />
          <img className="One" src={props.value.WhitI} alt="" />
          <img className="One" src={props.value.WhitI} alt="" />
        </div>
        <div className="Ficoi">
          <div>{props.value.Symbl}</div>
          <img className="TIc" src={props.value.Ico} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AwardCards;
