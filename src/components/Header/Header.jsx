import React from "react";
import Discription from "../Discription/Discription";
import "./Header.scss";

function Header() {
  return (
    <div className="Header">
      <div>
        <img className="Banner" src="/images/Frame 6.png" alt="" />
      </div>
      <div className="Body">
        <div className="BodyRight">
          <div className="Pre">
            <img src="/images/IFrame 1285.png" alt="" />
          </div>
          <div className="Buttons">
            <button className="Btn">Send Enqiury</button>
            <button className="Btn">Save</button>
          </div>
        </div>
        <div className="BodyLeft">
          <div className="MainInfo">
            <div className="Headings">
              <div className="Title">NUTAN GLASS HOUSE</div>
              <div className="SubTitle">
                Real Estate Developer (20-50 Projects Delivered)
              </div>
            </div>
            <div className="Address">
              <div className="Vector">
                <img src="/images/Vector (2).png" alt="" />
              </div>
              <div className="vectorAd">
                <p>Pune</p>
              </div>
            </div>
            <div className="Icons">
              <img src="/images/XMLID_1_.png" alt="" />
              <img src="/images/Group.png" alt="" />
              <img src="/images/XMLID_1_ (1).png" alt="" />
              <img src="/images/Group (1).png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Discription />
    </div>
  );
}

export default Header;
