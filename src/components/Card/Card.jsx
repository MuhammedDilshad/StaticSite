import React from "react";
import "./Card.scss";

function Card(props) {
  return (
    <div>
      <div className="Est">
        <div className="FImage">
          <img className="Imgs" src={props.value.ImageOne} alt="" srcset="" />
          <div className="Info">{props.value.DtaOne}</div>
        </div>
        <div className="FImage">
          <img className="Imgs" src={props.value.ImageTwo} alt="" srcset="" />
          <div className="Info">{props.value.DtaTwo}</div>
        </div>
        <div className="FImage">
          <img className="Imgs" src={props.value.ImageThre} alt="" srcset="" />
          <div className="Info">{props.value.DtaTre}</div>
        </div>
        <div className="FImage">
          <img className="Imgs" src={props.value.ImageFour} alt="" srcset="" />
          <div className="Info">{props.value.DtaFr}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
