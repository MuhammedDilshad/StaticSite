import React from "react";
import "./BusinessCard.scss";

function BusinessCard(props) {
  console.log(props.value);
  return (
    <div>
      <div className="BusinessCards">
        <div className="Topline">
          <img className="TlineIcon" src={props.value.IconOne} alt="" />
          <div className="TlineHeading">{props.value.IconTitle}</div>
        </div>
        <img className="GdLine" src={props.value.Line} alt="" />
        <div className="Midline">
          <img className="ProImage" src={props.value.ProImage} alt="" />
          <div className="IconsOf">
            <div className="Ponts">
              {props.value.PointOne ? (
                <img
                  className="OptionIcon"
                  src={props.value.PointIcon}
                  alt=""
                />
              ) : null}
              <div className="Optionss">{props.value.PointOne}</div>
            </div>
            <div className="Ponts">
              {props.value.PointTwo ? (
                <img
                  className="OptionIcon"
                  src={props.value.PointIcon}
                  alt=""
                />
              ) : null}
              <div className="Optionss">{props.value.PointTwo}</div>
            </div>
            <div className="Ponts">
              {props.value.PointThre ? (
                <img
                  className="OptionIcon"
                  src={props.value.PointIcon}
                  alt=""
                />
              ) : null}
              <div className="Optionss">{props.value.PointThre}</div>
            </div>
          </div>
        </div>

        <div className="Content">{props.value.Content}</div>
      </div>
    </div>
  );
}

export default BusinessCard;
